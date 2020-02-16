<template>
  <div class="main-page">
    <app-main/>
    <Logo/>
  </div>
</template>

<script>
import AppMain from '~/components/AppMain'
import Logo from '~/components/Logo'

export default {
  components: {
    AppMain,
    Logo
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
