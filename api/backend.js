import axios from 'axios'

export default {

  useBack: 'https://test-i-staff.pled76.ru',

  doLogin(usr, pwd, store) {
    axios.post(this.useBack + '/login', { login: usr, password: pwd })
      .then(() => {
        store.commit('login', usr)
      })
      .catch(() => {
        store.commit('logout')
      })
  },

  doLogout(store) {
    store.commit('logout')
    axios.get(this.useBack + '/logout')
  }
}
