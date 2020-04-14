<template>
  <FormPage>
    <div class="slogan">
      <div class="slogan__word">Система автоматизации</div>
      <div class="slogan__word">подбора персонала</div>
      <p class="golden slogan__text">для тех, кто ценит свое время</p>
    </div>
    <div v-if="isLoggedIn()" class="slogan">
      <p class="golden slogan__text" @click="logout()">выйти из системы</p>
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
