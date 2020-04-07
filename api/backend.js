import axios from 'axios'

axios.defaults.withCredentials = true

export default {

  useBack: 'https://test-i-staff.pled76.ru',
  tokenPromise: null,

  doLogin(usr, pwd, store) {
    return axios.post(this.useBack + '/login', { login: usr, password: pwd })
      .then(resp => {
        console.log(resp)
        this.tokenPromise = axios.get(this.useBack + '/token')
        store.commit('login', usr)
      })
      .catch(() => {
        store.commit('logout')
      })
  },

  doLogout(store) {
    store.commit('logout')
    axios.get(this.useBack + '/logout')
  },

  readData(bo, store) {
    if (!store.state.isLoggedIn || !this.tokenPromise)
      return Promise.reject(new Error('not loged in'))
    return this.tokenPromise
      .then(resp => {
        console.log(resp)
        axios.get(this.useBack + '/data/' + bo)
      })
  }
}
