import store from '@/store/store.js';
import routes from '@/router/index.js';
import { fetchBookingDetailsId } from '@/api/service.js';
import "/node_modules/vue-qrcode-reader/dist/vue-qrcode-reader.css";
import { QrcodeReader } from "vue-qrcode-reader";
import DecodeQrUpload from '@/views/pages/QrScanner/DecodeQrUpload/DecodeQrUpload.vue';


export default {
    name: 'QrScanner',
    components: { 
        QrcodeReader,
        DecodeQrUpload
    },
    data() {
        const stores = store; 
        return { 
            stores,
            qrCodeResult: null,
        };
    },
    methods: {

       async acceptData() {
            const accessToken = localStorage.getItem('AccessToken');
            const param = {
                token: accessToken,
                Lang: '1000000',
                CaddyCalendarDetailId: this.stores.state.idInputAddBdc,
                BDC: this.qrCodeResult
            }
            const res = await fetchBookingDetailsId(param);
            if (res.data.Data == null) {
                routes.push('/reject');
            } else {
                store.commit('STATES_ADD_BOOKING_ID_DETAILS', res.data.Data.BookingDetailId);
                routes.push('/sucess');
            }
        },

        onDecode(value) {
            this.qrCodeResult = value;
            this.acceptData();
        },
    },
    computed: {
        paused() {
            return this.qrCodeResult ? true : false;
        },
    }
}