<template>
  <FormPage>
    <div class="slogan">
      <div class="slogan__word">Система автоматизации</div>
      <div class="slogan__word">подбора персонала</div>
      <p class="slogan__text golden">для тех, кто ценит свое время</p>
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
        this.$router.push('/login')
      })
    },

    components: { FormPage }
  }
</script>
