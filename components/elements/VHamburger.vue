<template>
  <svg ref="hamburger" :class="['hamburger', open ? 'js-x': '']" width="60" height="60" viewBox="0 0 100 100">
    <g class="triangle">
      <line :class="['lines', 'line-1', !open ? 'lines-blue' : '']" x1="25" y1="40" x2="75" y2="40" stroke-width="4"/>
      <line :class="['lines', 'line-2', !open ? 'lines-blue' : '']" x1="25" y1="50" x2="75" y2="50" stroke-width="4"/>
      <line :class="['lines', 'line-3', !open ? 'lines-blue' : '']" x1="25" y1="60" x2="75" y2="60" stroke-width="4"/>
    </g>
  </svg>
</template>

<script>
  export default {
    components: {},
    props: {
      isOpen: {
        type: Boolean
      }
    },
    data() {
      return {
        morphTo: false,
        toggleMenu: null,
        tlm: null,
        open: false
      }
    },
    mounted() {
      if (process.browser) {
        const { hamburger } = this.$refs
        this.clickAnimationSet()
        hamburger.addEventListener('click', this.clickHandler)
      }
    },
    methods: {
      clickAnimationSet() {
        const lines = document.querySelectorAll('.lines')
        this.toggleMenu = new TimelineMax({ pause: true, reversed: true })
        this.toggleMenu
          .to(lines[1], .25, { scaleX: 0, ease: Power2.easeInOut, svgOrigin: '50 50' })
          .to(lines[0], .25, { transformOrigin: '50% 50%', y: 10, ease: Power2.easeInOut }, 'slide')
          .to(lines[2], .25, { transformOrigin: '50% 50%', y: -10, ease: Power2.easeInOut }, 'slide')
          .to(this.$refs.hamburger, .5, { rotation: 360, ease: Power4.easeInOut })
          .to(lines[0], .25, { rotation: 45, ease: Power2.easeInOut }, 'x')
          .to(lines[2], .25, { rotation: -45, ease: Power2.easeInOut }, 'x')
      },
      clickHandler() {
        this.open = !this.open
        this.$emit('nav', this.open)
        this.toggleMenu.reversed(!this.toggleMenu.reversed())
      }
    },
    watch: {
      isOpen(to) {
        if (!to && this.open) {
          this.open = !this.open
          this.toggleMenu.reversed(!this.toggleMenu.reversed())
        }
      }
    }
  }
</script>

<style lang="scss">
  .hamburger {
    position: relative;
    z-index: 101;
    cursor: pointer;
  }
  .pathEnd {
    display: none
  }
  .lines {
    stroke: $black;
  }
  .lines-blue {
    stroke: $black;
  }
</style>
