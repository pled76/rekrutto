<template>
  <div class="container">
    <AppHeader/>
    <AppBack/>
    <nuxt/>
  </div>
</template>
<script>
  import AppBack from '@/components/AppBack'
  import AppHeader from '@/components/AppHeader'

  export default {
    components: {
      AppBack,
      AppHeader
    }
  }
</script>
<style lang="scss">
  @import "assets/scss/main";

  .container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: $black;
    position: relative;
  }
</style>
