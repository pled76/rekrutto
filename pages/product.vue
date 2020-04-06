<template>
  <DataPage mainHead="" :mainData="pageData" ></DataPage>
</template>

<script>
  import DataPage from '../components/elements/DataPage'
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
