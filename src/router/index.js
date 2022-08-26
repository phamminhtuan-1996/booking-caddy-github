import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store/store.js';
import LoginAuthentication from '@/views/pages/LoginAuthentication/LoginAuthentication.vue';
import ListTableShift from '@/views/pages/ListTableShift/ListTableShift.vue';
import SuccessAddBdc from '@/views/pages/SuccessAddBdc/SuccessAddBdc.vue';
import RejectAddBdc from '@/views/pages/RejectAddBdc/RejectAddBdc.vue';
import QrScanner from '@/views/pages/QrScanner/QrScanner.vue';
import ProfileCaddy from '@/views/pages/ProfileCaddy/ProfileCaddy.vue';
import NofticationBooking from '@/views/pages/NofticationBooking/NofticationBooking.vue';
import RejectPermission from '@/views/pages/RejectPermission/RejectPermission.vue';
import { fetchSiteName } from '@/api/login.js';
import { loadLocaleMessages } from '@/libs/i18n/index.js';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/', 
      name: 'LoginAuthentication',
      component:  LoginAuthentication
    },
    {
      path: '/home',
      name: 'Home',
      component: ListTableShift
    },
    {
      path: '/sucess/:id',
      name: 'Success',
      component: SuccessAddBdc
    },
    {
      path: '/reject',
      name: 'RejectAddBdc',
      component: RejectAddBdc
    },
    {
      path: '/qr-scanner',
      name: 'QrScanner',
      component: QrScanner
    },
    {
      path: '/profile',
      name: 'ProfileCaddy',
      component: ProfileCaddy
    },
    {
      path: '/noftication',
      name: 'NofticationBooking',
      component: NofticationBooking
    },
    {
      path: '/reject-access',
      name: 'RejectPermission',
      component: RejectPermission
    },
  ],
})

async function checkHasLogin() {
  const TokenRat01 = JSON.parse(localStorage.getItem('TOKEN_RAT01'));
  if (TokenRat01 === null) {
    return;
  }
  const param = {
    'UserName': TokenRat01.username,
  }
 
  const res = await fetchSiteName(param);
  return res.data.Data;
}

router.beforeEach(async (to, from, next) => {
  loadLocaleMessages();
  store.commit('STATES_LOGIN', true);
  const checkLogin = await checkHasLogin();
  if (to.name === 'LoginAuthentication') {
    store.commit('STATES_LOGIN', false);
    return next();
  }
  if (to.name !== 'LoginAuthentication' && !localStorage.getItem('AccessToken')) {
    store.commit('STATES_LOGIN', false);
    return next({ name: 'LoginAuthentication' });
  } else if(localStorage.getItem('AccessToken') && checkLogin !== null){
    return next();
  }
});

export default router;


