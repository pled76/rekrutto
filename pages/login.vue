<template>
  <FormPage skipLogo="true" useHeader="Добро пожаловать в REKRUTTO!">
    <div class="one__col from__top">
      <div class="row">
        <div class="one__col half__width input__wrap">
          <div class="row form__title golden">РЕГИСТРАЦИЯ</div>
          <div class="row">Введите адрес своей корпоративной почты и придумайте ПАРОЛЬ.</div>
          <br>
          <div class="row">Нажмите Отправить.</div>
          <form>
            <div class="row">
              <input v-model="login0" placeholder="Адрес рабочей почты" autocomplete="username" @keyup.enter="doLogin(0)" />
            </div>
            <div class="row">
              <input v-model="pwd0" placeholder="Пароль" autocomplete="current-password" :type="pwdType0" @keyup.enter="doLogin(0)" />
            </div>
            <div class="row">
              <a href="#" class="little__text" @click="pwdShowHide(0)">{{ showHidePwd0 }}</a>
            </div>
          </form>
          <div v-if="loginError0" class="row red__text">
            {{loginError0}}
          </div>
          <button v-if="confirmed0" @click="doLogin(0)" >Отправить</button>
        </div>
        <div class="one__col half__width input__wrap">
          <div class="row form__title golden">ВХОД В СИСТЕМУ</div>
          <div class="row">Введите свою почту и пароль.</div>
          <br>
          <div class="row">Нажмите Подтвердить, далее нажмите Войти.</div>
          <form>
            <div class="row">
              <input v-model="login1" placeholder="Адрес рабочей почты" autocomplete="username" @keyup.enter="doLogin(1)" />
            </div>
            <div class="row">
              <input v-model="pwd1" placeholder="Пароль" autocomplete="current-password" :type="pwdType1" @keyup.enter="doLogin(1)" />
            </div>
            <div class="row">
              <a href="#" class="little__text" @click="pwdShowHide(1)">{{ showHidePwd1 }}</a>
            </div>
          </form>
          <div v-if="loginError1" class="row red__text">
            {{loginError1}}
          </div>
          <button v-if="confirmed1" @click="doLogin(1)" >Войти</button>
          <div class="row pad__top">
            <a class="golden" href="#" @click="confirmed1 = !confirmed1">{{ confirmText(1) }}</a>
          </div>
        </div>
      </div>
      <div class="one_col">
        <div class="row">
          <a href="/confirmation" class="little__text pad__top">Согласие с политикой использования ПД</a>
        </div>
      </div>
    </div>
  </FormPage>
</template>

<script>
  import FormPage from '../components/FormPage'
  import backend from '../api/backend'

  export default {
    data() {
      return {
        login0: '',
        login1: '',
        pwd0: '',
        pwd1: '',
        backend,
        pwdType0: 'password',
        pwdType1: 'password',
        showHidePwd0: 'показать пароль',
        showHidePwd1: 'показать пароль',
        loginError0: '',
        loginError1: '',
        confirmed0: true,
        confirmed1: false
      }
    },

    methods: {
      doLogin(i) {
        const cfmd = 'confirmed' + i;
        const lerr = 'loginError' + i;
        if (!this[cfmd]) {
          this.$set(this, lerr, 'Нажмите ссылку Подтвердить')
          return
        }
        this.$set(this, lerr, '')
        backend.doLogin(this['login' + i], this['pwd' + i], this.$store)
          .then(() => {
            if (this.$store.state.isLoggedIn) {
              this.$nextTick(() => {
                this.$set(this, 'login' + i, '')
                this.$set(this, 'pwd' + i, '')
                this.$router.push('/')
                this.backend.openAt()
              })
            }
            return this.$store.state.isLoggedIn
          })
          .catch(e => {
            this.$set(this, lerr, e.response.data)
          })
      },

      pwdShowHide(i) {
        if (this['pwdType' + i]) {
          this.$set(this, 'pwdType' + i, '')
          this.$set(this, 'showHidePwd' + i, 'скрыть пароль')
        } else {
          this.$set(this, 'pwdType' + i, 'password')
          this.$set(this, 'showHidePwd' + i, 'показать пароль')
        }
      },

      confirmText (i) {
        return (this['confirmed' + i] ? 'Отозвать' : 'Подтвердить')
      }
    },

    components: { FormPage }
  }
</script>


<style lang="scss" scoped>
  form input {
    @include fontExo($black, 2vw)
    text-align: left;
    width: 100%;
  }

  .input__wrap {
    padding-left: 1vh;
    padding-right: 1vh;
  }

  div button {
    @include fontExo($black, 2vw)
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
    @include fontExo($white, 2vw)
    text-align: left;
    width: 100%;
  }

  .half__width {
    text-align: left;
    width: 50%;
  }

  .from__top {
    position: relative;
    top: #{$headerHeight};
  }

  .row {
    @include flexAlign(baseline, left)
    text-align: left;
    width: 100%;
  }

  .form__title {
    padding-top: 2em;
    padding-bottom: 1em;
  }

  .large_text {
    @include fontExo($gold, 2em)
  }

  @media screen and (max-width: 968px) {
    form input {
      @include fontExo($black, 4vw)
    }

    div button {
      @include fontExo($black, 4vw)
    }

    .one__col {
      @include fontExo($white, 2vh)
    }

    .half__width {
      width: 100%;
    }

    .row {
      @include flexAlign(baseline, left, column)
    }

    .from__top {
      top: 20vh;
    }
  }

  @media screen and (max-height: 500px) {
    form input {
      @include fontExo($black, 4vw)
    }

    div button {
      @include fontExo($black, 4vw)
    }

  }
</style>
