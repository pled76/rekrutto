<template>
  <FormPage>
    <form>
      <input ref="login" @keyup.enter="doLogin()" />
      <input ref="pwd" type="password" @keyup.enter="doLogin()" />
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
        backend
      }
    },
    methods: {
      doLogin() {
        backend.doLogin(this.$refs.login.value, this.$refs.pwd.value, this.$store)
        if (this.$store.state.isLoggedIn) {
          this.$refs.login.value = ''
          this.$refs.pwd.value = ''
        }
      }
    },
    components: { FormPage }
  }
</script>
