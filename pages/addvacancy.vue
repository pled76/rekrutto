<template>
  <DataPage mainHead="Добавить вакансию" :mainData="pageData" useSvg="Добавить вакансии" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/addvacancy'

  export default {

    data() {
      return {
        pageData
      }
    },

    components: { DataPage }
  }
</script>
