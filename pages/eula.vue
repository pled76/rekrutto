<template>
  <DataPage mainHead="Пользовательское соглашение" :mainData="pageData" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/eula'

  export default {

    data() {
      return {
        pageData
      }
    },

    mounted () {
      document.getElementById('eularef').click();
    },

    components: { DataPage }
  }
</script>
