<template>
  <DataPage mainHead="Безопасность" :mainData="pageData" useSvg="Закон" ></DataPage>
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
