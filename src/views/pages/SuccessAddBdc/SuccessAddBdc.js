import store from '@/store/store.js';
import QrcodeVue from 'qrcode.vue';
import { fetchBookingDetails } from '@/api/service.js';
import { convertDateToVN, convertTimeToVn } from '@/helper/helper.js';

export default {
    name: 'SuccessAddBdc',
    components: {
        QrcodeVue,
    },
    data(){
        const stores = store; 
        return{
            bdcCode: '227226928',
            stores,
            infoBookingDetails: {},
            workingDay: '',
        };
    },
    setup() {
        return {
        };
    },
    methods: {
        async handleDataBookingDetails() {
            const param = {
                token: localStorage.getItem('AccessToken'),
                lang: '1000000',
                Id: Number(this.$route.params.id),
            };
            this.infoBookingDetails = await fetchBookingDetails(param);
            this.workingDay = convertDateToVN(this.infoBookingDetails.data.Data.Booking.BookingDetail.OpenDate);
            this.infoBookingDetails.data.Data.Booking.BookingDetail.StartTime = convertTimeToVn(this.infoBookingDetails.data.Data.Booking.BookingDetail.StartTime).all;
        }
    },
    mounted() {
        this.handleDataBookingDetails();
    }
}