import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    isLoggedIn: false,
    user: ''
  },
  mutations: {
    login (state, usr) {
      state.isLoggedIn = true
      state.user = usr
    },

    logout (state) {
      state.isLoggedIn = false
      state.user = ''
    }
  }
})

export default store
