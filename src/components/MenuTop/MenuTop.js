import routes from '@/router/index.js';
import store from '@/store/store.js';
import { fetchSiteName, switchSiteName } from '@/api/login.js';
import { i18n } from '@/libs/i18n';
import EzGolfDropdown from '@/components/EzGolfDropdown/EzGolfDropdown.vue';
import ModalBox from '@/components/ModalBox/ModalBox.vue';


export default {
    name: 'App',
    components: {
        EzGolfDropdown,
        ModalBox,
    },
    data(){
        return {
            hasShowMenu: false,
            dataSite: [],
            dataPickMenuDropdown: {},
            isShowModalPickSite: false,
        };
    },
    setup() {
        const stores = store; 
        const getObjectToken =  JSON.parse(localStorage.getItem('TOKEN_RAT01'));
        return {stores, getObjectToken};
      },
    methods: {
        activeMenuTop() {
            this.hasShowMenu = true;
        },

        deActiveMenuTop() {
            this.hasShowMenu = false;
        },

        logOut() {
            const dataRemove = ['AccessToken', 'CaddyId', 'TOKEN_RAT01'];
            dataRemove.forEach((item) => localStorage.removeItem(item));
            routes.push('/');
            this.deActiveMenuTop();
            store.commit('STATES_LOGIN', false);
        },

        async callSiteName() {
            if (this.getObjectToken === null) {
                return;
            }
            const param = {
                'UserName': this.getObjectToken.username
            };
            const fetchSiteNameData = await fetchSiteName(param);
            this.dataSite = [...fetchSiteNameData.data.Data.Site];
        },
        

       async pickMenuDropdown(value) {
            this.dataPickMenuDropdown = value;
        },

        async acceptPickSiteName() {
            const param = {
                'SiteId': this.dataPickMenuDropdown.SiteId
            };
            const resSiteNamePicked = await switchSiteName(param);
            localStorage.setItem('AccessToken', resSiteNamePicked.data.Data.AccessToken);
            localStorage.setItem('SiteId', this.dataPickMenuDropdown.SiteId);
            this.isShowModalPickSite = false;
            routes.push('/');
        },

        showModalPickSite() {
            this.isShowModalPickSite = true;
        },
        async triggerPickMenu() {
            await this.callSiteName();
            const siteIdSaved = localStorage.getItem('SiteId');
            this.dataSite.forEach((item) => {
                if (item.SiteId === siteIdSaved) {
                    this.dataPickMenuDropdown = item;
                } else {
                    this.dataPickMenuDropdown = this.dataSite[0];
                }
            });
        },
        changeLanguage(value) {
           localStorage.setItem('systemLanguage', value);
           i18n.locale = value;
        }
    },
    mounted() {
        this.triggerPickMenu();
    }
}