<template>
  <div id="app">
    <NofticationReport/>
    <LoadingBackground :isShowPopup="isShowLoading"></LoadingBackground>
    <menu-top v-if="stateLogin"></menu-top>
    <router-view></router-view>
    <navigation-bottom  v-if="stateLogin"></navigation-bottom>
  </div>
</template>

<script>
import store from '@/store/store.js';
import MenuTop from '@/components/MenuTop/MenuTop.vue';
import NavigationBottom from '@/components/NavigationBottom/NavigationBottom.vue';
import NofticationReport from '@/components/NofticationReport/NofticationReport.vue';
import LoadingBackground from '@/components/LoadingBackground/LoadingBackground.vue';



export default {
  name: 'App',
  components: {
    MenuTop,
    NavigationBottom,
    NofticationReport,
    LoadingBackground,
  },
  data() {
    return {
    };
  },
  setup() {
    const stores = store; 
    return {
        stores,
      };
  },
  methods: {
  },
  computed: {
    stateLogin() {
      return this.stores.state.login;
    },
    isShowLoading() {
      return this.stores.state.loading
    }

  },
  mounted() {
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
