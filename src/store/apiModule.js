import basementApi from '@/basementApi'

const getInboxUrl = "/messages/inbox"

const state = {
  basementApi,
  inboxList: [],
  sentList: []
}

const mutations = {
  getInbox: (state, payload) => {
    state.inboxList = payload.data;
  }
}

const actions = {
  getInbox: (context) => {
    return context.state.basementApi.get(getInboxUrl)
    .then((response) => {
      context.commit('getInbox', { data: response.data });
    })
    .catch((error) => {
      console.log(error);
    });
  }
}

// getters are functions
const getters = {
  inboxList: (state) => {
    return state.inboxList;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
