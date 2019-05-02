import Vue from 'vue'
import Vuex from 'vuex'
import {oauth} from "./modules/oauth/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    oauth: oauth
  },
})
