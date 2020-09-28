import axios from 'axios'

axios.defaults.withCredentials = true

export default {

  useBack: 'https://beta-app.rekrutto.ru',
  tokenPromise: null,

  doLogin(usr, pwd, store) {
    return axios.post(this.useBack + '/login', { login: usr, password: pwd })
      .then(resp => {
        console.log(resp)
        this.tokenPromise = axios.get(this.useBack + '/token')
        store.commit('login', usr)
      })
      .catch(e => {
        store.commit('logout')
        return Promise.reject(e)
      })
  },

  doLogout(store) {
    store.commit('logout')
    axios.get(this.useBack + '/logout')
  },

  readToken() {
    if (!this.tokenPromise)
      this.tokenPromise = axios.get(this.useBack + '/token')
    return this.tokenPromise
  },

  whoami() {
    return axios.get(this.useBack + '/whoami')
  },

  checkLogin(vx) {
    return this.readToken()
      .then(() => this.whoami())
      .then(resp => vx.commit('login', resp.data))
      .catch(() => vx.commit('logout'))
  },

  readData(bo, store) {
    if (!store.state.isLoggedIn || !this.tokenPromise)
      return Promise.reject(new Error('not loged in'))
    return this.tokenPromise
      .then(resp => {
        console.log(resp)
        axios.get(this.useBack + '/data/' + bo)
      })
  },

  openAt(bo, title, qry) {
    const typ = '_self'
    if (!bo) {
      window.open(this.useBack, typ)
      return Promise.resolve(true);
    }
    let t = title ? '?t=' + title : ''
    let q = qry ? (t ? '&q=' + qry : '?q=' + qry) : ''
    return axios.get(this.useBack + '/assets/spa2/webapp/' + bo + t + q)
      .then(() => {
        window.open(this.useBack, typ)
      })
  }
}
