
import routes from '@/router/index.js';
import store from '@/store/store.js';
import { 
    getTokenLogin, 
    fetchSiteName,
    switchSiteName,
} from '@/api/login.js';
import InputForm from '@/components/InputForm/InputForm.vue';
import LoadingBackground from '@/components/LoadingBackground/LoadingBackground.vue'

export default {
    name: 'LoginAuthentication',
    components: {
        InputForm,
        LoadingBackground,
    },
    data(){
        return{
            dataLogin: {
                username: '',
                password: '',
                token: '',
                site: [],
                numberSite: 0
            },
            siteNameLocal: localStorage.getItem('SiteId'),
            showSelectPickManage: false,
            valuePickSite: null,
            isShowLoading: false,
            isNotLogin: false,
            textWarning: 'golf_webapp_caddy_incorrect_login',
        };
    },
    methods: {

        pickValueUserName(value) {
            this.dataLogin.username = value;
        },

        pickValuePassword(value) {
            this.dataLogin.password = value;
        },

        async getTokenLogin() {
            const paramGetTokenLogin = {
                UserName: this.dataLogin.username,
                PassWord: this.dataLogin.password
            };
            const resTokenLogin = await getTokenLogin(paramGetTokenLogin);
            if (resTokenLogin.data.Status === "200" || resTokenLogin.data.Status !== '400') {
                this.dataLogin.token = resTokenLogin.data.Data.access_token;
                localStorage.setItem('AccessToken', this.dataLogin.token);
                localStorage.setItem('TOKEN_RAT01', JSON.stringify({ token: this.dataLogin.token, username: this.dataLogin.username }));
            } else {
                this.isShowLoading = !this.isShowLoading;
                this.isNotLogin = true;
                this.textWarning = 'golf_webapp_caddy_incorrect_login';
            }
        },

        async getSiteName() {
            const param = {
                'UserName': this.dataLogin.username,
            };
            const resSiteName = await fetchSiteName(param);
            if (resSiteName.data.Status === '200') {
                this.dataLogin.token = resSiteName.data.Data.AccessToken;
                localStorage.setItem('AccessToken', this.dataLogin.token);
                this.dataLogin.site = [...resSiteName.data.Data.Site];
            }
        },

        async pickSite() {
            const idSite = this.siteNameLocal == null ? this.dataLogin.site[this.dataLogin.numberSite].SiteId : this.siteNameLocal;
            const param = {
                'SiteId': idSite
            };
            const res = await switchSiteName(param);
            if (this.dataLogin.site.length < this.dataLogin.numberSite) {
                const dataRemove = ['AccessToken', 'CaddyId', 'TOKEN_RAT01'];
                dataRemove.forEach((item) => localStorage.removeItem(item));
                this.isNotLogin = true;
                this.textWarning = 'golf_webapp_caddy_id_caddy_null';
                this.isShowLoading = false;
                return;
            }
            if (res.data.Status === '200' && res.data.Data.CaddyId == null) {
                this.dataLogin.numberSite++;
                this.pickSite();
                return;
            }
            if (res.data.Status === '200' && res.data.Data.CaddyId !== null) {
                this.dataLogin.token = res.data.Data.AccessToken;
                localStorage.setItem('AccessToken', this.dataLogin.token);
                localStorage.setItem('SiteId', idSite);
                localStorage.setItem('CaddyId', res.data.Data.CaddyId);
                store.commit('STATES_LOGIN', true);
                this.isShowLoading = !this.isShowLoading;
                routes.push('/home');
                return;
            }
        },
        
        async signIn() {
            this.isShowLoading = !this.isShowLoading;

            await this.getTokenLogin();

            await this.getSiteName();

            await this.pickSite();
        },
    },
    mounted() {
        if (localStorage.getItem('AccessToken')) {
            store.commit('STATES_LOGIN', true);
            routes.push('/home');
        } else {
            routes.push('/')
        }
    }
}