import basementApi from '@/basementApi'
import Vue from 'vue'

const getInboxUrl = "/messages/inbox";
const messagesUrl = "/messages/send";
const getLogsUrl = "/logs";
const gpioUrl = "/gpio";
const setGpio = "setGpio";

const setLoading = "setLoading";
const sending = "sending";

const state = {
  basementApi,
  inboxList: [],
  sentList: [],
  logsList: [],
  gpioList: [],
  isLoading: false,
  sending: false
}

const mutations = {
  updateGpio: (state, payload) => {
    state.gpioList.forEach((gpio, index) => {
      if (gpio.PinName === payload.gpio.PinName) {
        console.log(gpio);
        Vue.set(state.gpioList, index, { ...gpio, State: 0 });
      }
    });
  },
  setGpio: (state, payload) => {
    state.gpioList = payload.data;
  },
  setInbox: (state, payload) => {
    state.inboxList = payload.data;
  },
  setLogs: (state, payload) => {
    state.logsList = payload.data;
  },
  setSentItems: (state, payload) => {
    state.sentList = payload.data;
  },
  setLoading: (state, isLoading) => {
    state.isLoading = isLoading;
  },
  sending: (state, sending) => {
    state.sending = sending;
  }
}

const actions = {
  getGpio(context) {
    context.commit(setLoading, true);
    return context.state.basementApi
    .get(gpioUrl)
    .then((response) => {
      context.commit(setGpio, { data: response.data })
      context.commit(setLoading, false);
    })
    .catch(() => {
      context.commit(setLoading, false);
    });
  },
  sendSms: (context, data) => {
    context.commit(sending, true);
    return context.state.basementApi
    .post(messagesUrl, data)
    .then(() => {
      context.commit(sending, false);
    })
    .catch(() => {
      context.commit(sending, false);
    });
  },
  getSent: (context) => {
    context.commit(setLoading, true);
    return context.state.basementApi
    .get(messagesUrl)
    .then((response) => {
      context.commit('setSentItems', { data: response.data });
      context.commit(setLoading, false);
    })
    .catch(() => {
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
    })
    .catch(() => {
      context.commit(setLoading, false);
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
    .catch(() => {
      context.commit(setLoading, false);
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
  },
  gpioList: (state) => {
    return state.gpioList;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
