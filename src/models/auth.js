
export default {

  namespace: 'auth',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
    },
  },

  effects: {
    *fetchRemote({ payload }, { call, put }) {
    },
  },

  reducers: {
    fetch(state, action) {
      return { ...state, ...action.payload };
    },
  },

}
