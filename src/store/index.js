import Vue from "vue";
import Vuex from "vuex";
import { cards } from "../utils/constant.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allCards: [],
    activeCardIndex: 0
  },
  getters: {
    getCards: state => state.allCards
  },
  mutations: {
    ADD_CARD: (state, payload) => state.allCards.push(payload),
    STORED_CARD: (state, payload) => (state.allCards = payload),
    UPDATE_ACTIVE_CARD_INDEX: (state, payload) =>
      (state.activeCardIndex = payload)
  },
  actions: {
    storeCards(state) {
      state.commit("STORED_CARD", cards);
    },
    updateActiveCard(state, activeIndex) {
      state.commit("UPDATE_ACTIVE_CARD_INDEX", activeIndex);
    }
  },
  modules: {}
});
