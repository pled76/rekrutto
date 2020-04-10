<template>
  <FormPage>
    <div class="one__col">
      <div class="row">
        <div class="one__col">
          <div class="form__title">РЕГИСТРАЦИЯ</div>
          <div>Введите адрес своей корпоративной почты и придумайте ПАРОЛЬ. Запомните или сохраните его.</div>
          <br>
          <div>Далее необходимо просто пройти по ссылке, которую вы получите на указанную почту и Ваш аккаунт ГОТОВ!</div>
        </div>
        <div class="one__col">
          <div class="form__title">ВХОД В СИСТЕМУ</div>
          <div>Введите адрес своей корпоративной почты</div>
          <br>
          <div>Введите ранее указанный пароль</div>
        </div>
      </div>
      <form>
        <div class="row">
          <input v-model="login" placeholder="Адрес рабочей почты" autocomplete="username" @keyup.enter="doLogin()" />
        </div>
        <div class="row">
          <input v-model="pwd" placeholder="Пароль" autocomplete="current-password" type="password" @keyup.enter="doLogin()" />
        </div>
      </form>
      <button @click="doLogin()" >Войти</button>
      <div class="form__title golden large_text">ВМЕСТЕ МЫ МОЖЕМ БОЛЬШЕ</div>
    </div>
  </FormPage>
</template>

<script>
  import FormPage from '@/components/FormPage'
  import backend from '@/api/backend'

  export default {
    data() {
      return {
        login: '',
        pwd: '',
        backend
      }
    },
    methods: {
      doLogin() {
        backend.doLogin(this.login, this.pwd, this.$store)
          .then(() => {
            if (this.$store.state.isLoggedIn) {
              this.$nextTick(() => {
                this.login = ''
                this.pwd = ''
              })
            }
          })
      }
    },
    components: { FormPage }
  }
</script>


<style lang="scss" scoped>
  form input {
    @include fontExo($white, 1.5vw)
  }

  div button {
    @include fontExo($black, 1.5vw)
  }

  .one__col {
    width: 100%;
    padding-bottom: 2em;
    padding-left: 2em;
    text-align: left;
    @include flexAlign(center, center, column)
    @include fontExo($white, 1.5vw)
  }

  .row {
    width: 100%;
    padding-right: 2em;
    text-align: left;
    @include flexAlign(baseline, center)
  }

  .form__title {
    padding-top: 2em;
    padding-bottom: 1em;
  }

  .large_text {
    @include fontExo($white, 1.5em)
  }

  @media screen and (max-width: 968px) {
    .one__col {
      @include fontExo($white, 1.5vh)
    }

    .row {
      @include flexAlign(baseline, center, column)
    }
  }
</style>
