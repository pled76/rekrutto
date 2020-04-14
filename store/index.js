import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    isLoggedIn: false,
    user: ''
  },

  mutations: {
    login (st, usr) {
      st.isLoggedIn = true
      st.user = usr
    },

    logout (st) {
      st.isLoggedIn = false
      st.user = ''
    }
  }
})

export default store
