import routes from '@/router/index.js';
import store from '@/store/store.js';
import { searchListShift, fetchBookingDetailsId } from '@/api/service.js';
import { 
    convertTimeToVn, 
    convertDateToVN 
} from '@/helper/helper.js';
import EzDateRangePicker from '@/components/EzDateRangePicker/EzDateRangePicker.vue';
import TableShift from '@/components/TableShift/TableShift.vue';
import ModalBox from '@/components/ModalBox/ModalBox.vue';
import EzGolfDropdown from '@/components/EzGolfDropdown/EzGolfDropdown.vue';
import InputForm from '@/components/InputForm/InputForm.vue';

export default {
    name: 'ListTableShift',
    components: {
        EzDateRangePicker,
        TableShift,
        ModalBox,
        EzGolfDropdown,
        InputForm
    },
    data(){
        return {
            dataDate: null,
            arrayDataList: [],
            dataInputBDC: {},
            datePick: null,
            timePick: null,
            selectedShowInput: true,
            numberStatistical: {
                success: 0,
                hasBooking: 0,
                serving: 0,
                today: 0,
            },
            listCollapseStatistical: {
                success: [],
                hasBooking: [],
                serving: [],
                today: []
            },
            isFilterAll: false,
            dataSite: [],
            showListButtonModal: true,
            isShowInputBdc: false,
            visibleAllCollapse: false,
            inPutBDCLabelName: 'input_bdc_label'
        };
    },
    setup() {
        const stores = store; 
        return {stores};
      },
    methods: {

        resetNumberStatistical() {
            this.numberStatistical.success = 0;
            this.numberStatistical.hasBooking = 0;
            this.numberStatistical.serving = 0;
        },

        resetCollapseStatistical() {
            this.listCollapseStatistical.all = [];
            this.listCollapseStatistical.success = [];
            this.listCollapseStatistical.hasBooking = [];
            this.listCollapseStatistical.serving = [];
        },

        resetStatisticalShift() {
            this.resetNumberStatistical();
            this.resetCollapseStatistical();
        },

        statisticalShift() {
            this.arrayDataList.forEach((item, index) => {
                this.listCollapseStatistical.all.push(`collapse-${index}`);
                if (item.TimeLine === 'PAST') {
                    this.numberStatistical.success++;
                    this.listCollapseStatistical.success.push(`collapse-${index}`);
                }
                if (item.TimeLine === 'UPCOMING' && item.BDC !== null) {
                    this.numberStatistical.hasBooking++;
                    this.listCollapseStatistical.hasBooking.push(`collapse-${index}`);
                }
                if (item.TimeLine === 'TODAY' && item.BDC !== null) {
                    this.numberStatistical.serving++;
                    this.listCollapseStatistical.serving.push(`collapse-${index}`);
                }
                if (item.TimeLine === 'TODAY') {
                    this.numberStatistical.today++;
                    this.listCollapseStatistical.today.push(`collapse-${index}`);
                }
            });
        },

        async fetchIdBookingDetails(value) {
            if(!value.bdc) {
                return;
            }
            const param = {
                'BDC': value.bdc,
                'CaddyCalendarDetailId': value.idShift
            }
            const res = await fetchBookingDetailsId(param);
            return res.data.Data.BookingDetailId;
        },

        async pickValueDate(date) {
            this.dataDate = date;
            const param = {
                'StartDate': this.dataDate.dateStart, 
                'EndDate': this.dataDate.dateEnd, 
            }; 
            this.resetStatisticalShift();
            const res = await searchListShift(param);
            if(res.data.Data === null) {
                return;
            }
            if (res.data.Status === '200') {
                this.arrayDataList = [];
                this.arrayDataList = [...res.data.Data.Shift];
                this.arrayDataList.map(async (item) => {
                    item.WorkingDay = convertDateToVN(item.WorkingDay);
                    item.StartTime = convertTimeToVn(item.StartTime).all;
                    item.EndTime = convertTimeToVn(item.EndTime).all;
                    item.CourseName = item.CourseName !== null ? item.CourseName.toString() : '';
                    const idBooking = await this.fetchIdBookingDetails({bdc: item.BDC, idShift: item.Id});
                    item['idbookingDetails'] = item.BDC ? idBooking : null;
                });
                this.statisticalShift();
                store.commit('STATE_SHIFT', this.arrayDataList);
            } else {
                this.acceptData(this.dataDate);
            }
        },

        filterDate() {
            this.pickValueDate(this.dataDate);
        },

        pickDataBdc(value) {
            this.dataInputBDC = { 
                WorkingDay: value.WorkingDay, 
                CaddyCalendarDetailId: value.Id,
                Token: localStorage.getItem('AccessToken'),
                BDC: value.BDC
            };
            this.timePick = value.StartTime;
            this.datePick = value.WorkingDay;
        },

        pickValueBdcCode(value) {
            this.dataInputBDC.BDC = value;
        },

       async acceptData() {
            const param = {
                'BDC': this.dataInputBDC.BDC,
                'CaddyCalendarDetailId': this.dataInputBDC.CaddyCalendarDetailId
            };
            const res = await fetchBookingDetailsId(param);
            if (res.data.Status === '400') {
                store.commit('STATES_MESSAGE_PERMISSION',  res.data.Messages[0].MessageText);
                routes.push('/reject-access');
                return;
            }
            if(res.data.Data == null) {
                routes.push('/reject');
            } else {
                store.commit('STATES_ADD_BOOKING_ID_DETAILS', res.data.Data.BookingDetailId);
                routes.push(`/sucess/${res.data.Data.BookingDetailId}`);
            }
        },

        inputBDC() {
            this.showListButtonModal = !this.showListButtonModal;
            this.isShowInputBdc = !this.isShowInputBdc;
        },

        redirectQR() {
            store.commit('ADD_BDC_SHIFT', this.dataInputBDC.CaddyCalendarDetailId);
            store.commit('STATES_SHOWMODAL_ADD_BDC', false);
            routes.push('/qr-scanner');
        },

        resetStatePopup(value) {
            this.showListButtonModal = true,
            this.isShowInputBdc = false,
            store.commit('STATES_SHOWMODAL_ADD_BDC', value);
        }

    },
    computed: {
        isShowModalAddBdc() {
            return this.stores.state.showModalAddBDC;
        }
    },
}