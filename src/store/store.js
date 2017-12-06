import Vue from 'vue'
import Vuex from 'vuex'
import ApiModule from './apiModule';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    basementApi: ApiModule
  }
})
