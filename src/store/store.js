import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0
}

const mutations = {
}

const actions = {

}

// getters are functions
const getters = {

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
