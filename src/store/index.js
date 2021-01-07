import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datas: {}
  },

  getters: {
    datas(state) {
      return state.datas;
    }
  },

  mutations: {
    SET_DATAS(state, datas) {
      state.datas = datas;
    }
  },

  actions: {
    setDatasAction({ commit }, datas) {
      commit("SET_DATAS", datas);
    }
  }
});