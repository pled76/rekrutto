<template>
  <DataPage mainHead="Функциональность" :mainData="pageData" useSvg="Функциональность" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/functionality'

  export default {

    data() {
      return {
        pageData
      }
    },

    components: { DataPage }
  }
</script>
