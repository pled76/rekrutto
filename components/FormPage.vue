<template>
  <div class="main-page">
    <div class="main-wrap">
      <div class="brand">
        <div class="logo" ref="logo">
          <svg class="logo-svg" id="one" viewBox="0 0 117.1 171.3">
            <path class="st0" d="M99,161.8H18.5c-2.4,0-4.4-2-4.4-4.4v-15.4c0-2.4,2-4.4,4.4-4.4H99c2.4,0,4.4,2,4.4,4.4v15.4
          C103.4,159.9,101.4,161.8,99,161.8z"/>
            <path class="st1" d="M102.9,119.3L84,81.7c-0.3-0.4-0.4-1-0.4-1.8c0-0.8,0.5-1.4,1.3-2c5.3-3.3,9.3-7.6,12-12.8
          c2.7-5.3,4-11.2,4-17.8c0-6.9-1.1-12.8-3.4-17.5c-2.3-4.8-5.4-8.6-9.2-11.6c-3.8-3-8.3-5.1-13.3-6.4c-5.1-1.3-10.4-2-16-2H27.2
          c-3.5,0-6.5,1.3-9.2,4c-2.6,2.7-3.9,6.1-3.9,10.1v96.5c0,1,0.4,1.9,1.1,2.7s1.6,1.2,2.6,1.2h20.6c1.1,0,2-0.4,2.7-1.1
          c0.7-0.7,1.1-1.6,1.1-2.8v-0.6V93.3v-8.7h11.5c1.8,0,3.1,0.9,4,2.6l15.3,32.9c1.2,2.9,3.2,4.3,6,4.3h21.2c0.8,0,1.5-0.3,2.2-1
          c0.7-0.7,1-1.4,1-2.3C103.4,120.5,103.2,119.9,102.9,119.3z M59,65.9c-0.4,0-8.8,0-13.7,0c-2,0-3.6-1.6-3.6-3.6V30.4
          c0-2,1.6-3.6,3.6-3.6c5,0,13.6,0,14,0c12,0,14.9,9,14.8,19.6C74.1,57.2,70.1,65.9,59,65.9z"/>
          </svg>
        </div>
        <h1 class="brand__head">Rekrutto</h1>
      </div>
      <div class="slogan-block">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head: {},
    transition: {
      mode: 'out-in',
      css: false,
      leave(el, done) {
        const tl = new TimelineMax({})
        tl.to('.st0, .st1', 1, { drawSVG: '0% 0%', fill: 'transparent' })
        tl.to('.logo', 1, { opacity: 0, y: -20 })
        tl.to('.brand__head', 1, { y: 20, opacity: 0, }, '-=1')
        tl.staggerTo('.slogan__word', .5, { opacity: 0 }, .2, '-=1')
        tl.to('.slogan__text', .5, { opacity: 0, onComplete: done }, '-=.5')
      }
    },
    data() {
      return {
        tl: null
      }
    },
    mounted() {
      this.tl = new TimelineMax({})
      this.tl.set('.st0, .st1', { drawSVG: '0% 0%', fill: 'transparent' })
      this.tl.set('.logo', { y: -20 })
      this.tl.set('.brand__head', { y: 20 })
      this.tl.add('start')
      this.tl.to('.brand__head', 1, { y: 0, opacity: 1, ease: 'circ.out' }, 'start')
      this.tl.to('.st0, .st1', 1, { drawSVG: '0% 100%' }, 'start')
      this.tl.to('.logo', 1, { opacity: 1, y: 0, ease: 'circ.out' }, 'start')
      this.tl.to('.st0, .st1', 1, { fill: '#ffffff' })
      this.tl.staggerTo('.slogan__word', .5, { opacity: 1 }, .2, 'start+=1')
      this.tl.to('.slogan__text', .5, { opacity: 1 }, 'start+=2')
    }
  }
</script>

<style lang="scss">
  form {
    @include flexAlign(center, center, column)
    @include fontExo($black, 2vw)
  }

  form input, button {
    margin-top: 10px;
    padding: 5px;
    border-radius: 7px;
  }

  .main-page {
    width: 100%;
    height: calc(100vh - #{$headerHeight});
    position: absolute;
    top: $headerHeight;
    text-align: center;
    overflow-y: auto;
  }

  .main-wrap {
    width: 100%;
    @include flexAlign(center, center);
  }

  .brand {
    width: 50%;
    height: calc(100vh - #{$headerHeight});
    position: relative;
    z-index: 10;
    @include flexAlign(center, center, column);

    &__head {
      font-family: 'Cunia', sans-serif;
      color: $white;
      font-size: 2.5vw;
      margin: 0 20px;
      opacity: 0;
    }
  }

  .slogan-block {
    width: 50%;
    height: calc(100vh - #{$headerHeight});
    @include flexAlign(center, center, column);
  }

  .slogan {
    width: 80%;

    &__word {
      position: relative;
      width: 100%;
      text-align: left;
      opacity: 0;
      @include fontRusso($white, 2.5vw)
    }

    &__text {
      width: 100%;
      text-align: left;
      opacity: 0;
      padding: 10px 0;
      @include fontExo($white, 1.5vw)
    }
  }

  .logo {
    position: relative;
    width: 18vw;
    opacity: 0;
    z-index: 10;

    &-svg {
      width: 100%;
    }
  }

  .st0, .st1 {
    fill: #ffffff;
    stroke: #ffffff;
    stroke-width: 1;
    stroke-dasharray: 1300;
    stroke-dashoffset: 1300;
  }

  @media screen and(orientation: landscape) and(max-width: 968px) {
    .brand{
      min-height: 350px;
    }
  }

  @media screen and (max-width: 968px) {
    .main-wrap {
      width: 100%;
      @include flexAlign(center, flex-start, column);
    }
    .brand, .slogan-block {
      width: 100%;
      height: calc(50vh - (#{$headerHeight} / 2));

      &__head {
        font-family: 'Cunia', sans-serif;
        color: $white;
        font-size: 30px;
        margin: 0 20px;
        opacity: 0;
      }
    }

    .logo {
      width: 200px;
    }

    .slogan-block {
      @include flexAlign(center, flex-start, column);
    }

    .slogan {
      width: 80%;

      &__word {
        text-align: center;
        @include fontRusso($white, 36px)
      }

      &__text {
        text-align: center;
        @include fontExo($white, 24px)
      }
    }
  }

  @media screen and (max-height: 700px) {
    .brand {
      display: none
    }

    .slogan-block {
      height: calc(100vh - #{$headerHeight})
    }
  }

  @media screen and (max-width: 440px) {
    .logo {
      width: 120px;
    }

    .brand {
      height: 220px;
      &__head {
        font-size: 20px;
      }
    }
    .slogan-block {
      height: 220px;
      @include flexAlign(center, center, column);
    }
    .slogan {
      &__word {
        @include fontRusso($white, 18px)
      }

      &__text {
        text-align: center;
        @include fontExo($white, 12px)
      }
    }
  }
</style>
