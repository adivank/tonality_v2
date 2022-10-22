<template>
  <div class="container">
    <h1 class="auth__title" ref="loginTitle">Login</h1>
    <form @submit.prevent="userLogin">
      <div class="row">
        <div class="form__group col-12 col-lg-6">
          <label for="email" class="form__label">Enter your email:</label>
          <input
            type="text"
            class="form__control"
            id="email"
            name="email"
            v-model="login.username"
          >
        </div>
        <div class="form__group col-12 col-lg-6">
          <label for="password">Enter your password:</label>
          <input
            type="password"
            class="form__control"
            id="password"
            name="password"
            v-model="login.password"
          >
        </div>
        <div class="button__wrapper col-12">
          <button type="submit" class="button button--primary">Login</button>
          <nuxtLink to="/register" class="button button--text">Not a member? Register here</nuxtLink>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    layout: 'auth',
    data() {
      return {
        login: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      async userLogin() {
        try {
          const response = await this.$auth.loginWith('cookie', {
            data: this.login
          })
          if (!response.data.error) {
            window.location.pathname = '/';
          } else {
            const errorString = response.data.error;
            const para = document.createElement('p');
            para.innerText = errorString;
            this.$refs.loginTitle.append(para);
          }

          this.$auth.setUser(response);
        } catch (error) {
          // eslint-disable-next-line
          console.error(error)
        }
      }
    }
  }

</script>
