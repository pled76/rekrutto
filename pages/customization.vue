<template>
  <DataPage mainHead="Кастомизация" :mainData="pageData" useSvg="Кастомизация" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/customization'

  export default {

    data() {
      return {
        pageData
      }
    },

    components: { DataPage }
  }
</script>
