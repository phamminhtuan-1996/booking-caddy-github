
import { fetchBookingDetails } from '@/api/service.js';
import { convertDateToVN, convertTimeToVn } from '@/helper/helper.js';
import QrcodeVue from 'qrcode.vue';
import LoadingBackground from '@/components/LoadingBackground/LoadingBackground.vue';

export default {
    name: 'SuccessAddBdc',
    components: {
        QrcodeVue,
        LoadingBackground,
    },
    data(){
        return{
            bdcCode: '227226928',
            infoBookingDetails: {},
            workingDay: '',
            isShowLoading: true,
            showData: false,
        };
    },
    setup() {
        return {
        };
    },
    methods: {
        async handleDataBookingDetails() {
            const param = {
                'BookingDetail': {'Id': Number(this.$route.params.id)}
            };
            this.infoBookingDetails = await fetchBookingDetails(param);
            this.workingDay = convertDateToVN(this.infoBookingDetails.data.Data.Booking.BookingDetail.OpenDate);
            this.bdcCode = this.infoBookingDetails.data.Data.Booking.BookingDetail.BDC;
            this.infoBookingDetails.data.Data.Booking.BookingDetail.StartTime = convertTimeToVn(this.infoBookingDetails.data.Data.Booking.BookingDetail.StartTime).all;
            this.isShowLoading = this.infoBookingDetails.status === 200 ? false : true;
        }
    },

    async mounted() {
       await this.handleDataBookingDetails();
       this.showData = true;
    }
}