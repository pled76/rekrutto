<template>
  <DataPage mainHead="Как это работает" :mainData="pageData" useSvg="Как это работает" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/howitworks'

  export default {

    data() {
      return {
        pageData
      }
    },

    components: { DataPage }
  }
</script>
