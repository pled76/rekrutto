<template>
  <div class="data-page">
    <img class="logo-svg" src="../static/Как это работает.svg"></img>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    height: 100%;
  }

  .data-page {
    width: 100%;
    height: calc(100vh - #{$headerHeight});
    position: relative;
    top: $headerHeight;
    @include flexAlign(center, center)
    overflow-y: auto;
  }
</style>
