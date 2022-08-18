import Vue from 'vue'
import Router from 'vue-router'
// import router from '@/router'; 
import LoginAuthentication from '@/views/pages/LoginAuthentication/LoginAuthentication.vue';
import ListTableShift from '@/views/pages/ListTableShift/ListTableShift.vue';
import SuccessAddBdc from '@/views/pages/SuccessAddBdc/SuccessAddBdc.vue';
import RejectAddBdc from '@/views/pages/RejectAddBdc/RejectAddBdc.vue';
import QrScanner from '@/views/pages/QrScanner/QrScanner.vue';
import ProfileCaddy from '@/views/pages/ProfileCaddy/ProfileCaddy.vue';

Vue.use(Router)

export default new Router({
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
  ],
})


