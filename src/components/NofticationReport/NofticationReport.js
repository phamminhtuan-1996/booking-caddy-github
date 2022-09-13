import store from '@/store/store.js';
import NofticationItem from '../NofticationItem/NofticationItem.vue';
export default {
    name: 'NofticationReport',
    components: {
        NofticationItem,
    },
    data() {
        return {
            listDataNoftication: [],
            indexInterval: 0,
            startUpCloseReport: false,
            indexTurnOff: -1,
        };
    },
    setup() {
        const stores = store;
        const hasNoftication = stores.state.nofticationReport;
        return {
            hasNoftication,
            stores,
        };
    },
    methods: {
       async copyCodeAndClose(value, index) {
            navigator.clipboard.writeText(value);
            this.indexInterval = index;
            this.startUpCloseReport = true;
            this.indexTurnOff = index;
            setTimeout(() => {
                this.listDataNoftication.splice(index, 1);
                this.indexTurnOff = -1;
            } , 500);

        },

    },
    computed: {
        checkHasMess() {
            return this.stores.state.nofticationReport;
        }
    },
    watch: {
        checkHasMess: function (value) {
            this.listDataNoftication.push(value);
            const startInterval = setInterval(async () => {
                if (this.listDataNoftication.length <= 0) {
                    clearInterval(startInterval);
                    this.indexTurnOff = -1;
                    return;
                }
                this.indexTurnOff = this.listDataNoftication.length === 1 ? 0 : this.indexTurnOff++;
                setTimeout(() => this.listDataNoftication.splice(this.indexTurnOff, 1), 500);
            }, 5000);  
        },
    },
    
}