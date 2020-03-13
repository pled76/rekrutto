<template>
  <div class="opportunities-page">
    <div class="left-block">
      <h1 class="main-head">Возможности приложения</h1>
    </div>
    <div class="right-block">
      <ul class="opportunities">
        <li class="opportunities__item" v-for="it in opportunities" :key="it.title">
          <h2 class="opportunities__item-head">{{it.title}}</h2>
          <p class="opportunities__item-text" v-for="t in it.values" :key="t">- {{t}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { Power1 } from '../plugins/gsap/esm'
  import opportunities from '../schemes/opportunities'

  export default {
    transition: {
      css: false,
      mode: 'out-in',
      leave(el, done) {
        const tl = new TimelineMax({})
        tl.to('.main-head', .5, { x: -40, opacity: 0, ease: Power1.easeInOut })
        tl.staggerTo('.opportunities__item', .5, { opacity: 0, y: -50 }, .125, '-=.3')
        setTimeout(done, 1500)
      }
    },

    data() {
      return {
        opportunities,
        tl: null
      }
    },

    mounted() {
      this.tl = new TimelineMax({})
      this.show = true
      this.tl.set('.main-head', { x: -50 })
      this.tl.set('.opportunities__item', { y: -50 })
        .to('.main-head', .5, { opacity: 1, x: 0 })
        .staggerTo('.opportunities__item', .5, { opacity: 1, y: 0 }, .125, '-=.3')
    }
  }
</script>

<style lang="scss" scoped>
  .opportunities-page {
    width: 100%;
    height: calc(100vh - #{$headerHeight});
    position: relative;
    top: $headerHeight;
    @include flexAlign(center, center)
    overflow-y: auto;
  }

  .left-block, .right-block {
    width: 50vw;
    height: 100%;
    @include flexAlign(center, center)
  }

  .main-head {
    width: 100%;
    text-align: center;
    opacity: 0;
    @include fontRusso($white, 4.5vw);
  }

  .opportunities {
    width: 100%;
    @include flexAlign(flex-start, center);
    flex-wrap: wrap;

    &__item {
      @include flexAlign(flex-start, center, column);
      flex: 0 0 50%;
      width: 50%;
      margin: 10px 0;
      opacity: 0;
      padding: 0 10px 0 0;

      &-head {
        @include fontRusso($white, 1.5vw);
        text-transform: uppercase;
        margin: 10px 0;
      }

      &-text {
        @include fontExo($white, .8vw);
        text-transform: lowercase;
      }
    }
  }

  @media screen and (max-width: 968px) {
    .opportunities-page {
      position: relative;
      height: auto;
      @include flexAlign(center, center, column);
    }

    .left-block, .right-block {
      width: 100vw;
      height: calc(50vh - (#{$headerHeight} / 2));
    }

    .right-block {
      @include flexAlign(center, flex-start, column);
    }

    .main-head {
      @include fontRusso($white, 36px);
    }

    .opportunities {
      width: 100%;
      @include flexAlign(flex-start, center);

      &__item {
        @include flexAlign(center, center, column);
        flex: 0 0 100%;
        padding: 0 20px;

        &-head {
          @include fontRusso($white, 24px);
          text-transform: uppercase;
          margin: 10px 0;
        }

        &-text {
          @include fontExo($white, 16px);
          text-transform: lowercase;
          text-align: center;
        }
      }
    }
  }
</style>
