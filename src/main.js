import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from "firebase";
import 'reflect-metadata';
import firebaseConfig from './firebaseConfig';

Vue.config.productionTip = false;

// Initialize Firebase
const config = firebaseConfig;
firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
