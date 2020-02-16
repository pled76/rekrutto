<template>
  <div class="main-page">
    <app-main/>
  </div>
</template>

<script>
import AppMain from '~/components/AppMain.vue'

export default {
  components: {
    AppMain
  }
}
</script>

<style lang="scss">
.main-page {
  margin: 0 auto;
  min-height: 100vh;
  @include flexAlign(center, center);
  text-align: center;
}
</style>
