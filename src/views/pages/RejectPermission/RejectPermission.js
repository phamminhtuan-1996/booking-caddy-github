import store from '@/store/store.js';
import routes from '@/router/index.js';

export default {
    name: 'RejectPermission',
    data() {        
        const stores = store; 
        return {
            messageText: '',
            stores
        };
    },
    methods: {
        redirectHome () {
            if (this.messageText === '') {
                routes.push('/');
            }
            return;
        }
    },
    created() {
        this.messageText = this.stores.state.messageText;
        this.redirectHome();
    }

}