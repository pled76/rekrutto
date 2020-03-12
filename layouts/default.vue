<template>
  <div class="container">
    <div class="video">
      <div class="video__color"></div>
      <video class="video__source" autoplay muted>
        <source src="../assets/video/rekrutto.mp4">
      </video>
    </div>
    <transition name="slideIn">
      <AppHeader v-show="showHeader"/>
    </transition>
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
    },
    mounted() {
      this.showHeader = true
    },
    data() {
      return {
        showHeader: false,
      }
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
  .video{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    z-index: 0;

    &__color{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 1, .4);
      background-blend-mode: multiply;
      filter: chroma(10);
    }
    &__source{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
