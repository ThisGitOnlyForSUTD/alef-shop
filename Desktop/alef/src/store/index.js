import { createStore } from 'vuex'

export default createStore({
  state: {
    isCartCount: null,
  },
  getters: {
    CART_STATE(state) {
      return state.isCartCount
    },
  },
  mutations: {
    CHANGE_CART (state) {
      state.isCartCount += 1
    },
  },
  actions: {
    TOGGLE_CART({commit}) {
      commit('CHANGE_CART')
    },
  },
  modules: {
  }
})
