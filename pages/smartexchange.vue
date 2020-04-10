<template>
  <DataPage mainHead="Умный обмен" :mainData="pageData" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/smartexchange'

  export default {

    data() {
      return {
        pageData
      }
    },

    components: { DataPage }
  }
</script>
