<template>
  <div class="container">
    <div class="video">
      <div class="video__color"></div>
      <video class="video__source" autoplay muted >
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
      // <!-- Yandex.Metrika counter -->
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

      ym(65103928, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
      });
      // <!-- /Yandex.Metrika counter -->

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

  .golden {
    color: $gold;
  }

  .container {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: $brown;
    position: relative;
  }

  .video {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    z-index: 0;

    &__color {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 1, .4);
      background-blend-mode: multiply;
      filter: chroma(10);
    }

    &__source {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
</style>
