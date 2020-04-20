<template>
  <DataPage mainHead="Приступить к работе" :mainData="[]" ></DataPage>
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
          this.backend.openAt()
            .then(() => this.$router.push('/addcandidate'))
            .catch(() => this.$router.push('/login'))
        }
      })
    },

    components: { DataPage }
  }
</script>
