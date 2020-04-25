<template>
  <DataPage mainHead="Согласие" :mainData="pageData" useSvg="Закон" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/confirmation'

  export default {

    data() {
      return {
        pageData
      }
    },

    components: { DataPage }
  }
</script>
