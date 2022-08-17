import TableShiftItem from '@/components/TableShift/TableShiftItem/TableShiftItem.vue';

export default {
    name: 'TableShift',
    props: {
        data: {
            type: Array,
        },
        visibleCollapse: {
            type: Boolean,
            default: false,
        }
    },
    components: {
        TableShiftItem,
    },
    data(){
        return {};
    },
    methods: {
        pickDataBdc(value) {
            this.$emit('DATA_BDC', value);
        }
    },
     mounted()  {
    }
}