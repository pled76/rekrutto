<template>
  <DataPage mainHead="Подтверждение прошло успешно!" :mainData="pageData" useSvg="Функциональность" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/okactivated'

  export default {

    data() {
      return {
        pageData
      }
    },

    components: { DataPage }
  }
</script>
