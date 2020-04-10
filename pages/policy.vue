<template>
  <DataPage mainHead="Соответствие 152-ФЗ" :mainData="pageData" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/policy'

  export default {

    data() {
      return {
        pageData
      }
    },

    mounted () {
      document.getElementById('policyref').click();
    },

    components: { DataPage }
  }
</script>
