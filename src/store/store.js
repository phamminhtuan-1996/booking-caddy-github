import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        login: false,
        showModalAddBDC: false,
        showModalAddBdcQr: false,
        arrayListShift: [],
        idInputAddBdc: 0,
        bookingDetailsId: 0,
        messageText: '',
        nofticationReport: {}
      },
      mutations: {
        STATES_LOGIN(state, val) {
            state.login = val;
        },
        STATE_SHIFT(state, val) {
          state.arrayListShift = [...val];
        },
        ADD_BDC_SHIFT(state, val) {
          state.idInputAddBdc = val;
        },
        STATES_SHOWMODAL_ADD_BDC(state, val) {
          state.showModalAddBDC = val;
        },
        STATES_SHOWMODAL_ADD_BDC_QR(state, val) {
          state.showModalAddBdcQr = val;
        },
        STATES_ADD_BOOKING_ID_DETAILS(state, val) {
          state.bookingDetailsId = val;
        },
        STATES_MESSAGE_PERMISSION(state, val) {
          state.messageText = val;
        },
        STATES_MESSAGE_REPORT(state, val) {
          state.nofticationReport = val;
        }
      },
      getters: {
      },
      actions: {
      },
      modules: {
      }
})
export default store;