import router from '@/router/index.js';
import store from '@/store/store.js';

export function notLogin() {
  router.push({ name: 'LoginAuthentication'});
  return;
}
export function handleCheckLogin(value) {
  if(value.data.Status === '400') {
    store.commit('STATES_MESSAGE_REPORT', value.data.Messages[0]);
    return value;
  }
  return value;
}