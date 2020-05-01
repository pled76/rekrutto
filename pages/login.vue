<template>
  <FormPage>
    <div class="one__col from__top">
      <div class="row">
        <div class="one__col half__width">
          <div class="form__title golden">РЕГИСТРАЦИЯ</div>
          <div>Введите адрес своей корпоративной почты и придумайте ПАРОЛЬ. Запомните и сохраните. Нажмите ссылку Подтвердить, появится кнопка Войти.</div>
          <br>
          <div>Далее необходимо просто пройти по ссылке, которую вы получите на указанную почту, и Ваш аккаунт ГОТОВ!</div>
        </div>
        <div class="one__col half__width">
          <div class="form__title golden">ВХОД В СИСТЕМУ</div>
          <div>Введите адрес своей корпоративной почты.</div>
          <br>
          <div>Введите ранее указанный пароль. Нажмите ссылку Подтвердить, появится кнопка Войти.</div>
        </div>
      </div>
      <form>
        <div class="row">
          <input v-model="login" placeholder="Адрес рабочей почты" autocomplete="username" @keyup.enter="doLogin()" />
        </div>
        <div class="row">
          <input v-model="pwd" placeholder="Пароль" autocomplete="current-password" :type="pwdType" @keyup.enter="doLogin()" />
        </div>
        <div class="row">
          <a href="#" class="little__text" @click="pwdShowHide()">{{showHidePwd}}</a>
        </div>
      </form>
      <div class="one_col">
        <div v-if="loginError" class="row red__text">
          {{loginError}}
        </div>
        <button v-if="confirmed" @click="doLogin()" >Войти</button>
        <div class="row pad__top">
          <a class="golden" href="/policy">Политика использования ПД</a>
        </div>
        <div class="row pad__top">
          <a class="golden" href="#" @click="confirmed = !confirmed">{{ confirmText }}</a>
        </div>
        <div class="row">
          <a href="/confirmation" class="little__text">своё согласие с политикой использования ПД</a>
        </div>
      </div>
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
        backend,
        pwdType: 'password',
        showHidePwd: 'показать пароль',
        loginError: '',
        confirmed: false
      }
    },

    methods: {
      doLogin() {
        if (!this.confirmed) {
          this.loginError = 'Нажмите ссылку Подтвердить'
          return
        }
        this.loginError = ''
        backend.doLogin(this.login, this.pwd, this.$store)
          .then(() => {
            if (this.$store.state.isLoggedIn) {
              this.$nextTick(() => {
                this.login = ''
                this.pwd = ''
                this.$router.push('/')
                this.backend.openAt()
              })
            }
            return this.$store.state.isLoggedIn
          })
          .catch(e => {
            this.loginError = e.response.data
          })
      },

      pwdShowHide() {
        if (this.pwdType) {
          this.pwdType = ''
          this.showHidePwd = 'скрыть пароль'
        } else {
          this.pwdType = 'password'
          this.showHidePwd = 'показать пароль'
        }
      }
    },

    computed: {
      confirmText () {
        return (this.confirmed ? 'Отозвать' : 'Подтвердить')
      }
    },

    components: { FormPage }
  }
</script>


<style lang="scss" scoped>
  form input {
    @include fontExo($black, 1.5vw)
  }

  div button {
    @include fontExo($black, 1.5vw)
  }

  .pad__top {
    padding-top: 1em;
  }

  .little__text {
    @include fontExo($white, 0.7em)
  }

  .red__text {
    color: $red;
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .one__col {
    @include flexAlign(center, center, column)
    @include fontExo($white, 1.5vw)
  }

  .half__width {
    width: 50%;
  }

  .from__top {
    position: relative;
    top: #{$headerHeight};
  }

  .row {
    @include flexAlign(baseline, center)
  }

  .form__title {
    padding-top: 2em;
    padding-bottom: 1em;
  }

  .large_text {
    @include fontExo($gold, 1.5em)
  }

  @media screen and (max-width: 968px) {
    .one__col {
      @include fontExo($white, 1.5vh)
    }

    .row {
      @include flexAlign(center, center, column)
    }
  }

  @media screen and (max-height: 500px) {
    .from__top {
      top: 2em;
    }
  }
</style>
