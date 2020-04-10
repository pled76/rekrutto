<template>
  <DataPage mainHead="Безопасность" :mainData="pageData" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/compliance'

  export default {

    data() {
      return {
        pageData
      }
    },

    components: { DataPage }
  }
</script>
