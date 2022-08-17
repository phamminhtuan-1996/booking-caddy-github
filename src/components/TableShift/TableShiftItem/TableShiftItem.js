import store from '@/store/store.js';

export default {
    name: 'TableShiftItem',
    props: {
        idCollapse: {
            type: Number,
        },
        visibleCollapse: {
            type: Boolean,
            default: false,
        },
        item: {
            type: Object,
        }
    },
    data(){
        return {
            visible: false,
        };
    },
    methods: {
        showModalAddBdc(item) {
            store.commit('STATES_SHOWMODAL_ADD_BDC', true);
            this.$emit('DATA_BDC',item);
        },
    },
    computed: {
        isNotBDC() {
            if (this.item.BDC === null) {
                return this.item.BDC;
            }
            return true;
        },
        checkNotBDC() {
            return this.item.BDC === null && this.item.TimeLine !== 'PAST';
        }
    },
    watch: {
        visibleCollapse: function(value) {
            this.visible = value;
        }
    },
    mounted() {
    }
}