<template>
  <div class="background">
    <svg v-if="sizes.width" class="svg" :viewBox="`0 0 ${sizes.width} ${sizes.height}`">
      <path
        ref="lines"
        class="line"
        v-for="it in 12"
        :d="`M${(sizes.width/12) * (it)} 0 ${(sizes.width/12) * (it)} ${sizes.height}`"
      />
    </svg>
    <img
      class="back-logo"
      :style="{position: 'absolute', left: 0, top: '-40px', opacity: '.1', zIndex: 100, width: '1200px'}"
      :src="require('assets/images/logo.svg')"
    />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sizes: {
          width: '',
          height: ''
        },
        tl: null
      }
    },

    mounted() {
      this.screenSize()
      window.addEventListener('resize', this.screenSize)

      setTimeout(() => {
        this.tl = new TimelineMax({})
        this.tl.set('.line', { drawSVG: '0% 0%'})
        this.tl.set('.back-logo', { opacity: 0, x: 30})
        this.drawLines()
        this.tl.to('.back-logo', 1, { opacity: .1, x: 0}, '-=1')
      }, 0)

    },

    methods: {
      screenSize() {
        this.sizes = { width: window.innerWidth, height: window.innerHeight }
      },

      drawLines() {
        this.tl.staggerTo('.line', .2, {drawSVG: '0% 100%'}, .125)
      }
    }
  }
</script>

<style lang="scss">
  .background {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 0;
  }

  .svg {
    width: 100%;
    height: 100vh;
  }

  .line {
    stroke: #39393b;
    stroke-width: 1;
  }
</style>
