<template>
  <DataPage mainHead="Открыть вакансию" :mainData="[]" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import backend from '../api/backend'

  export default {

    data() {
      return {
        backend
      }
    },

    mounted () {
      this.backend.checkLogin(this.$store).then(() => {
        if (!this.$store.state.isLoggedIn) {
          this.$router.push('/login')
        } else {
          this.backend.openAt('Vacancy', 'Вакансия', 'EQID:0')
            .then(() => this.$router.push('/addvacancy'))
            .catch(() => this.$router.push('/login'))
        }
      })
    },

    components: { DataPage }
  }
</script>
