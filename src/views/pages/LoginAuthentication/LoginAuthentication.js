
import routes from '@/router/index.js';
import store from '@/store/store.js';
import { 
    getTokenLogin, 
    fetchSiteName,
    switchSiteName,
} from '@/api/login.js';
import InputForm from '@/components/InputForm/InputForm.vue';
import LoadingBackground from '@/components/LoadingBackground/LoadingBackground.vue'

// import ModalBox from '@/components/ModalBox/ModalBox.vue';

export default {
    name: 'LoginAuthentication',
    components: {
        InputForm,
        LoadingBackground,
        // ModalBox
    },
    data(){
        return{
            dataLogin: {
                username: '',
                password: '',
                token: '',
                site: []
            },
            showSelectPickManage: false,
            valuePickSite: null,
            isShowLoading: false,
            siteIdPick: '',
            isNotLogin: false,
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
            if (resTokenLogin.data.Status === "200") {
                this.dataLogin.token = resTokenLogin.data.Data.access_token;
                localStorage.setItem('TOKEN_RAT01', JSON.stringify({ token: this.dataLogin.token, username: this.dataLogin.username }));
            } else {
                this.isShowLoading = !this.isShowLoading;
                this.isNotLogin = !this.isNotLogin;
            }
        },

        async getSiteName() {
            const param = {
                token: this.dataLogin.token,
                lang: '1000000',
                username: this.dataLogin.username,
            };
            const resSiteName = await fetchSiteName(param);
            if (resSiteName.data.Status === '200') {
                this.dataLogin.token = resSiteName.data.Data.AccessToken;
                this.dataLogin.site = [...resSiteName.data.Data.Site];
                const siteNameLocal = localStorage.getItem('SiteId');
                this.siteIdPick = siteNameLocal == null ? this.dataLogin.site[0].SiteId : siteNameLocal;
            }

        },

        async pickSite() {
            const param = {
                token: this.dataLogin.token,
                Lang: '1000000',
                SiteId: this.siteIdPick
            };
            const res = await switchSiteName(param);
            if (res.data.Status === '200') {
                this.dataLogin.token = res.data.Data.AccessToken;
                localStorage.setItem('AccessToken', this.dataLogin.token);
                localStorage.setItem('SiteId', this.siteIdPick);
                localStorage.setItem('CaddyId', res.data.Data.CaddyId);
                store.commit('STATES_LOGIN', true);
                this.isShowLoading = !this.isShowLoading;
                routes.push('/home');
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