<template>
  <FormPage>
    <div class="slogan">
      <p class="golden slogan__text"><a class="golden" href="/startwork">Приступить к работе</a></p>
    </div>
    <div class="slogan">
      <p class="golden slogan__text"><a class="golden" href="/Инструкции.pdf">Инструкции</a></p>
    </div>
    <div v-if="isLoggedIn()" class="slogan">
      <p class="golden slogan__text" @click="logout()"><a class="golden" href="#">Выйти из системы</a></p>
    </div>
    <div v-else class="slogan">
      <p class="golden slogan__text"><a class="golden" href="/login">войти</a></p>
    </div>
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

    mounted () {
      backend.readData('InfoMyRoles?q=EQID:1', this.$store)
      .then(resp => {
        console.log(resp.data)
      })
      .catch(e => {
        console.log(e)
      })
    },

    methods: {
      logout() {
        this.backend.doLogout(this.$store)
      },

      isLoggedIn () {
        return this.$store.state.isLoggedIn
      }
    },

    components: { FormPage }
  }
</script>


<style lang="scss" scoped>

.slogan__text {
  padding-bottom: 2em;
}

</style>
