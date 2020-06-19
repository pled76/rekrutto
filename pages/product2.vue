<template>
  <DataPage mainHead="Онлайн<br>платформа<br>для обмена<br>персоналом" :mainData="pageData" disableSvg="true" ></DataPage>
</template>

<script>
  import DataPage from '../components/DataPage'
  import pageData from '../schemes/product2'

  export default {

    data() {
      return {
        pageData
      }
    },

    components: { DataPage }
  }
</script>
