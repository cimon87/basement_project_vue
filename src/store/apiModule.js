import basementApi from '@/basementApi'

const getInboxUrl = "/messages/inbox";
const getLogsUrl = "/logs";

const state = {
  basementApi,
  inboxList: [],
  sentList: [],
  logsList: [],
  error: undefined,
  isLoading: false
}

const mutations = {
  setInbox: (state, payload) => {
    state.inboxList = payload.data;
  },
  setLogs: (state, payload) => {
    state.logsList = payload.data;
    console.log(state.logsList);
  },
  setLoading: (state, isLoading) => {
    state.isLoading = isLoading;
  },
  setError: (state, error) => {
    state.error = error.message;
  }
}

const actions = {
  getInbox: (context) => {
    context.commit('setLoading', true);
    return context.state.basementApi
    .get(getInboxUrl)
    .then((response) => {
      context.commit('setInbox', { data: response.data });
      context.commit('setLoading', false);
    })
    .catch((resp) => {
      context.commit('setError', resp);
    });
  },
  getLogs: (context) => {
    context.commit('setLoading', true);
    return context.state.basementApi
    .get(getLogsUrl)
    .then((response) => {
      console.log(response);
      context.commit('setLogs', { data: response.data });
      context.commit('setLoading', false);
    })
    .catch((resp) => {
      context.commit('setError', resp);
    });
  }
}

const getters = {
  logsList: (state) => {
    return state.logsList;
  },
  inboxList: (state) => {
    return state.inboxList;
  },
  error: (state) => {
    return state.error;
  },
  isLoading: (state) => {
    return state.isLoading;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
