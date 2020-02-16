<template>
  <header class="header">
    <div class="inner">
      <div class="header-logo">
        <img :src="require('assets/images/logo.svg')"/>
      </div>
      <nav class="nav">
        <ul class="nav__menu">
          <li class="nav__item">
            <nuxt-link class="nav__item-link" exact to="/">Главная</nuxt-link>
          </li>
          <li class="nav__item">
            <nuxt-link class="nav__item-link" exact to="/about">О нас</nuxt-link>
          </li>
          <li class="nav__item">
            <nuxt-link class="nav__item-link" exact to="/">Почему мы</nuxt-link>
          </li>
          <li class="nav__item">
            <nuxt-link class="nav__item-link" exact to="/">Контакты</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>

  .header {
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    background: $black;
    border-bottom: 1px solid #39393b;
  }

  .inner {
    margin: auto;
    width: 90%;
    max-width: 1440px;
    height: 100%;
    @include flexAlign(center, space-between);
  }

  .header-logo {
    width: 40px;
    cursor: pointer;
  }

  .nav {
    &__menu {
      @include flexAlign(center, center)
    }

    &__item {
      margin: 0 20px;

      &-link {
        @include fontNun($white, 16px);
        font-weight: bold;
        opacity: .2;
        text-decoration: none;
        text-transform: uppercase;
        transition: opacity .2s;

        &:hover {
          opacity: .4;
        }
      }
    }
  }
</style>
