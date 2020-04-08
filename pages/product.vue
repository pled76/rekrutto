<template>
  <DataPage mainHead="Продукт" :mainData="pageData" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/product'

  export default {

    data() {
      return {
        pageData
      }
    },

    components: { DataPage }
  }
</script>
