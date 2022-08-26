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
        copyCodeAndClose(value, index) {
            navigator.clipboard.writeText(value.Code);
            this.indexInterval = index;
            this.startUpCloseReport = true;
            this.$set(this.listDataNoftication[index].active = true);
            console.log('listDataNoftication in function click', index,  this.listDataNoftication[index].active);
            this.listDataNoftication.splice(index, 1);
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
            this.listDataNoftication.forEach((item) => {
                if (!item.active) {
                    item['active'] = false;
                }
            });
            console.log('listDataNoftication has active', this.listDataNoftication);
        },
    },
    
}