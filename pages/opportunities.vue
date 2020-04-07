<template>
  <DataPage mainHead="Возможности приложения" :mainData="pageData" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/opportunities'

  export default {

    data() {
      return {
        pageData
      }
    },

    components: { DataPage }
  }
</script>
