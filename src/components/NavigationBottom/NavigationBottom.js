import routes from '@/router/index.js';
import store from '@/store/store.js';
import {
    getTimeComputer 
} from '@/helper/helper.js'
import ModalBox from '@/components/ModalBox/ModalBox.vue';
import EzGolfDropdown from '@/components/EzGolfDropdown/EzGolfDropdown.vue';
import InputForm from '@/components/InputForm/InputForm.vue';
import { fetchBookingDetailsId } from '@/api/service.js';

export default {
    name: 'NavigationBottom',
    components: {
        ModalBox,
        EzGolfDropdown,
        InputForm
    },
    data(){    
        const stores = store; 
        return {
            stores,
            dataListShift: [],
            resultPickTime: {
                name: '',
                StartTime: '',
                EndTime: '',
                id: 0,
            },
            modalShow: false,
            isSelectMethodAddBdc: false,
            isShowBDCInput: false,
            isJustScanner: true,
            pickBDC: '',
            objectPick:{},
        };
    },
    methods: {

        sortShiftToDayBDCNull() {
            const sortDataToDay = this.dataListShift.filter((item) => item.TimeLine === 'TODAY');
            const sortDataToDayBdcEmpty = sortDataToDay.filter((item) => item.BDC == null);
            if (sortDataToDayBdcEmpty.length > 0) {
                return sortDataToDayBdcEmpty;
            }
            return sortDataToDay;
        },

        sortTimeTodayFirst(arrayVal) {
            const arrayShiftToday = arrayVal;
            const timeComputerHours = getTimeComputer().hours;
            const timeComputerMinutes = getTimeComputer().minute;
            let result = null;
            for(let index = 0; index < arrayShiftToday.length; index++) { 
                const StartTimeHours = Number(arrayShiftToday[index].StartTime.split(':')[0]);
                const EndTimeHours = Number(arrayShiftToday[index].EndTime.split(':')[0]);
                const StartTimeMinutes = Number(arrayShiftToday[index].StartTime.split(':')[1]);
                const EndTimeMinutes = Number(arrayShiftToday[index].EndTime.split(':')[1]);
                const minTimeHours = timeComputerHours >= StartTimeHours;
                const maxTimeHours = timeComputerHours <= EndTimeHours;
                const maxTimeMinute = timeComputerMinutes <= EndTimeMinutes;
               
                if (minTimeHours && maxTimeHours && timeComputerMinutes >= StartTimeMinutes && maxTimeMinute) {
                    result = arrayShiftToday[index];
                    break;
                }
                if (minTimeHours && maxTimeHours && timeComputerMinutes < StartTimeMinutes  && maxTimeMinute) {
                    result = arrayShiftToday[index];
                    break;
                }
                if (minTimeHours && timeComputerHours <= EndTimeHours && timeComputerMinutes <= StartTimeMinutes  && maxTimeMinute) {
                    result = arrayShiftToday[index];
                    break;
                }
                if (timeComputerHours == EndTimeHours && timeComputerMinutes > EndTimeMinutes) {
                    result = arrayShiftToday[index + 1];
                    break;
                }
                if (timeComputerHours < StartTimeHours && timeComputerHours < EndTimeHours) {
                    result = arrayShiftToday[0];
                    break;
                }
                if (timeComputerHours >= StartTimeHours && timeComputerHours <= EndTimeHours) {
                    result = arrayShiftToday[index];
                    break;
                }
                if (timeComputerHours > StartTimeHours && timeComputerHours > EndTimeHours) {
                    result = arrayShiftToday[arrayShiftToday.length - 1];
                    break;
                }
            }
            return result;
        },
        
        showModalAddBdcNav() {
            store.commit('STATES_SHOWMODAL_ADD_BDC_QR', true);
            this.dataListShift = [...this.stores.state.arrayListShift];
            if (this.dataListShift.length == 0) {
                return;
            }
            const sortDataToDay = this.sortShiftToDayBDCNull();
            this.objectPick = this.sortTimeTodayFirst(sortDataToDay);
            this.resultPickTime = { 
                name: this.objectPick.WorkingDay, 
                StartTime: this.objectPick.StartTime,
                EndTime: this.objectPick.EndTime,
                id: this.objectPick.Id
            };
            store.commit('ADD_BDC_SHIFT', this.resultPickTime.id);
        },

        pickMenuDropdown(value) {
            this.resultPickTime = { 
                name: value.WorkingDay,
                StartTime: value.StartTime,
                EndTime: value.EndTime,
                id: value.Id,
            };
            store.commit('ADD_BDC_SHIFT', this.resultPickTime.id);
        },

        redirectScannerPage() {
            store.commit('STATES_SHOWMODAL_ADD_BDC_QR', false);
            routes.push('/qr-scanner');
        },

        isShowModalAddBdcInput() {
            this.isSelectMethodAddBdc = !this.isSelectMethodAddBdc;
            this.isJustScanner = !this.isJustScanner;
            this.showModalAddBdcNav();
        },

        inputBDC() {
            this.isShowBDCInput = true;
            this.isSelectMethodAddBdc = false;
        },

        resetPopup() {
            this.isSelectMethodAddBdc = false;
            this.isShowBDCInput = false;
            this.isJustScanner = true;
        },

        pickValueBdcCode(value) {
            this.pickBDC = value;
        },

        async acceptData() {
            const param = {
                'BDC': this.pickBDC,
                'CaddyCalendarDetailId': this.resultPickTime.id
            };
            const res = await fetchBookingDetailsId(param);
            if(res.data.Data == null) {
                routes.push('/reject');
            } else {
                store.commit('STATES_ADD_BOOKING_ID_DETAILS', res.data.Data.BookingDetailId);
                store.commit('STATES_SHOWMODAL_ADD_BDC_QR', false);
                routes.push(`/sucess/${res.data.Data.BookingDetailId}`);
            }
        }

    },

    computed: {
        isShowModalAddBdc() {
            return this.stores.state.showModalAddBdcQr;
        },

    },
}