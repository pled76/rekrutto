<template>
  <header class="header">
    <div class="inner">
      <div class="header-logo" @click="$router.push('/')">
        <img class="header-logo__image" :src="require('assets/images/logo.svg')"/>
      </div>
      <transition>
        <nav :class="['nav', {'show-nav': show}]">
          <ul class="nav__menu">
            <li class="nav__item" v-for="it in nav" :key="it.name">
              <nuxt-link @click.native="closeNav" class="nav__item-link" exact :to="it.link">{{it.name}}</nuxt-link>
            </li>
          </ul>
        </nav>
      </transition>
      <div class="btn-wrap">
        <v-hamburger :is-open="show" @nav="showNav"/>
      </div>
    </div>
  </header>
</template>

<script>
  import VHamburger from '@/components/elements/VHamburger'

  export default {
    components: {
      VHamburger
    },
    data() {
      return {
        nav: [
          { name: 'Возможности', link: '/opportunities' },
          { name: 'Почему мы', link: '/why' },
          { name: 'Контакты', link: '/contacts' },
        ],
        show: false
      }
    },

    methods: {
      showNav() {
        this.show = !this.show
      },

      closeNav() {
        if (this.show) {
          this.show = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

  .header {
    @include flexAlign(center, center);
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background: $white;
    border-bottom: 3px solid $white;
    box-shadow: $boxShadow;
  }

  .inner {
    margin: auto;
    width: 90%;
    max-width: 1440px;
    height: 100%;
    position: absolute;
    @include flexAlign(center, space-between);
  }

  .header-logo {
    position: absolute;
    z-index: 9999;
    flex: 0 0 60px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    border-radius: 50px;
    background: $black;
    @include flexAlign(center, center);

    &__image {
      width: 30px;
    }

  }

  .nav {
    transition: all .3s ease-in-out;
    position: absolute;
    right: 20px;

    &__menu {
      @include flexAlign(center, center)
    }

    &__item {
      margin: 0 20px;

      &-link {
        @include fontExo($black, 16px);
        opacity: .7;
        text-decoration: none;
        text-transform: lowercase;
        transition: opacity .2s;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .show-nav {
    visibility: visible !important;
    transform: translateY(0) !important;
    transition: all .3s ease-in-out;
  }

  .btn-wrap {
    width: 60px;
    height: 60px;
    visibility: hidden;
    position: absolute;
    right: 0;
  }

  @media screen and (max-width: 968px) {
    .btn-wrap {
      visibility: visible;
      width: 60px;
      height: 60px;
      margin-right: 20px;
    }

    .inner {
      width: 100%;
      padding: 0 20px;
    }

    .nav {
      @include flexAlign(center, center);
      visibility: hidden;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      transform: translateY(-100%);
      background: $white;

      &__menu {
        @include flexAlign(center, center, column);
        width: 320px;
      }

      &__item {
        margin: 5vh 0;
      }
    }
  }
</style>
