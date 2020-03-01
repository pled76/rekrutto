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
        this.drawLines()
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

  .back-logo{
    position: absolute;
    left: 0;
    opacity: .1;
    z-index: 100;
    height: 150vh;
    object-fit: cover;
  }

  .line {
    stroke: rgba(255,255,255,.3);
    stroke-width: 1;
  }
</style>
