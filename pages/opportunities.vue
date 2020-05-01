<template>
  <DataPage mainHead="Наши возможности" :mainData="pageData" ></DataPage>
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
