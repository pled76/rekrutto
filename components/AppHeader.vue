<template>
  <header class="header">
    <div class="inner">
      <div class="header-logo" @click="$router.push('/')">
        <img class="header-logo__image" :src="require('assets/images/logo.svg')"/>
      </div>
      <nav class="nav">
        <ul class="nav__menu">
          <li class="nav__item" v-for="it in nav" :key="it.name">
            <nuxt-link class="nav__item-link" exact :to="it.link">{{it.name}}</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        nav: [
          { name: 'Возможности', link: '/opportunities' },
          { name: 'Почему мы', link: '/why' },
          { name: 'Контакты', link: '/contacts' },
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

  .header {
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
    @include flexAlign(center, space-between);
  }

  .header-logo {
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
</style>
