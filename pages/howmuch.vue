<template>
  <DataPage mainHead="Сколько это стоит?" :mainData="pageData" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/howmuch'

  export default {

    data() {
      return {
        pageData
      }
    },

    components: { DataPage }
  }
</script>
