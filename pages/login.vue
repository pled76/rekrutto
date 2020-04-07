<template>
  <FormPage>
    <form>
      <input v-model="login" autocomplete="username" @keyup.enter="doLogin()" />
      <input v-model="pwd" autocomplete="current-password" type="password" @keyup.enter="doLogin()" />
    </form>
    <button @click="doLogin()" >Войти</button>
  </FormPage>
</template>

<script>
  import FormPage from '@/components/FormPage'
  import backend from '@/api/backend'

  export default {
    data() {
      return {
        login: '',
        pwd: '',
        backend
      }
    },
    methods: {
      doLogin() {
        backend.doLogin(this.login, this.pwd, this.$store)
          .then(() => {
            if (this.$store.state.isLoggedIn) {
              this.$nextTick(() => {
                this.login = ''
                this.pwd = ''
              })
            }            
          })
      }
    },
    components: { FormPage }
  }
</script>
