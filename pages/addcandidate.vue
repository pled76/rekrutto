<template>
  <DataPage mainHead="Добавить резюме" :mainData="pageData" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/addcandidate'

  export default {

    data() {
      return {
        pageData
      }
    },

    components: { DataPage }
  }
</script>
