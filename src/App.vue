<template>
  <div id="app">
    <menu-top v-if="stateLogin"></menu-top>
    <router-view></router-view>
    <!-- <ez-date-range-picker @DATA-PICKER="pickValueDate"></ez-date-range-picker> -->
    <navigation-bottom  v-if="stateLogin"></navigation-bottom>
  </div>
</template>

<script>
// import EzDateRangePicker from '@/components/EzDateRangePicker/EzDateRangePicker.vue';
import routes from '@/router/index.js';
import store from '@/store/store.js';
import MenuTop from '@/components/MenuTop/MenuTop.vue';
import NavigationBottom from '@/components/NavigationBottom/NavigationBottom.vue';
import defaultPush from 'push.js';
// import PushFCM from 'pushjs-fcm';
import { initializeApp } from "firebase/app";
import { register } from 'register-service-worker';
// import { firebaseMessaging } from 'firebase/messaging';

export default {
  name: 'App',
  components: {
    // EzDateRangePicker
    MenuTop,
    NavigationBottom,
  },
  data() {
    return {
      // pickerDates: {}
    };
  },
  setup() {
    const stores = store; 
    const router = routes;
    // const messaging = firebaseMessaging;
    const firebaseConfig = {
        apiKey: "AIzaSyDyomrzDuEyL9ng4th7_n50FodYEXv0sOw",
        authDomain: "noftication-push.firebaseapp.com",
        databaseURL: "https://noftication-push-default-rtdb.firebaseio.com",
        projectId: "noftication-push",
        storageBucket: "noftication-push.appspot.com",
        messagingSenderId: "149012720189",
        appId: "1:149012720189:web:d928ed4e1482e103121854"
      };
    const app = initializeApp(firebaseConfig);
    // console.log(messaging);
    console.log(app);
    return {
        stores,
        router,
      };
  },
  methods: {
    nofticationPushBrowser() {
      defaultPush.create('Hi there!', {
        body: 'This is a notification.',
        icon: 'icon.png',
        timeout: 3000,               // Timeout before notification closes automatically.
        vibrate: [100, 100, 100],    // An array of vibration pulses for mobile devices.
        onClick: function() {
            // Callback for when the notification is clicked. 
            console.log(this);
        }  
      });
    },
    serviceWorker() {
      register('firebase-messaging-sw.js');
      if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('firebase-messaging-sw.js')
            .then(reg => {
              console.log(`Service Worker Registration (Scope: ${reg.scope})`);
            })
            .catch(error => {
              const msg = `Service Worker Error (${error})`;
              console.error(msg);
            });
        } else {
          // happens when the app isn't served over HTTPS or if the browser doesn't support service workers
          console.warn('Service Worker not available');
        }
    }
  },
  computed: {
    stateLogin() {
      return this.stores.state.login;
    }
  },
  watch: {
  },
  mounted() {
    defaultPush.Permission.request();
    if (localStorage.getItem('AccessToken')) {
            store.commit('STATES_LOGIN', true);
      } else {
        store.commit('STATES_LOGIN', false);
        routes.push('/');
      }
      this.serviceWorker();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
