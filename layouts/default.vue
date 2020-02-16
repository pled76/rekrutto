<template>
  <div class="container">
    <AppBack/>
    <nuxt/>
  </div>
</template>
<script>
  import AppBack from '@/components/AppBack'

  export default {
    components: {
      AppBack
    }
  }
</script>
<style lang="scss">
  @import "assets/scss/main";

  .container {
    background: $black;
  }
</style>
