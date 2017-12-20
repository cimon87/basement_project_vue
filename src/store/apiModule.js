import basementApi from '@/basementApi'

const getInboxUrl = "/messages/inbox";
const messagesUrl = "/messages/send";
const getLogsUrl = "/logs";

const setLoading = "setLoading";

const state = {
  basementApi,
  inboxList: [],
  sentList: [],
  logsList: [],
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
  setSentItems: (state, payload) => {
    state.sentList = payload.data;
  },
  setLoading: (state, isLoading) => {
    state.isLoading = isLoading;
  }
}

const actions = {
  sendSms: (context, data) => {
    console.log(data);
    return context.state.basementApi
    .post(messagesUrl, data);
  },
  getSent: (context) => {
    context.commit(setLoading, true);
    return context.state.basementApi
    .get(messagesUrl)
    .then((response) => {
      context.commit('setSentItems', { data: response.data });
      context.commit(setLoading, false);
    });
  },
  getInbox: (context) => {
    context.commit('setLoading', true);
    return context.state.basementApi
    .get(getInboxUrl)
    .then((response) => {
      context.commit('setInbox', { data: response.data });
      context.commit('setLoading', false);
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
  isLoading: (state) => {
    return state.isLoading;
  },
  sentList: (state) => {
    return state.sentList;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
