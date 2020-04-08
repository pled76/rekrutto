<template>
  <DataPage mainHead="Мобильность" :mainData="pageData" useSvg="Мобильность" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/mobility'

  export default {

    data() {
      return {
        pageData
      }
    },

    components: { DataPage }
  }
</script>
