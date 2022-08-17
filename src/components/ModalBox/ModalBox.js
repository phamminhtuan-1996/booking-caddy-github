import store from '@/store/store.js';
export default {
    name: 'ModalBox',
    props: {
        data: {
            type: Object,
            require: false,
        },
        labelName: {
            type: String,
            default: 'placeholder'
        },
        isShowModal: {
            type: Boolean,
            default: false
        },
        hideFooter: {
            type: Boolean,
            default: false
        },
        
    },
    data(){
        return {
            modalShow: false,
        };
    },
    methods: {
        showModal() {
            this.modalShow = true;
        },
        hideModal() {
            this.modalShow = false;
        },
        acceptModal() {
            this.$emit('ACCEPT-MODAL');
            store.commit('STATES_SHOWMODAL_ADD_BDC', false);
        },
        cancelButton() {
            this.modalShow = false;
            store.commit('STATES_SHOWMODAL_ADD_BDC', this.modalShow);
            store.commit('STATES_SHOWMODAL_ADD_BDC_QR', this.modalShow);
            this.$emit('STATES_SHOWMODAL_VISIBLE', this.modalShow);
        }
    },
    watch: {
       isShowModal: function(value) {
            if(value) {
                this.showModal();
                return;
            }
            this.hideModal();
       },
       modalShow: function(value) {
        if (!value) {
            this.cancelButton();
        }
       }
    }
}