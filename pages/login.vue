<template>
  <div class="container">
    <h1 class="auth__title" ref="loginTitle">Login</h1>
    <form @submit.prevent="userLogin" class="form--small">
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
            const { name, surname, username, pageLink } = response.data;
            localStorage.setItem('user', JSON.stringify({
              name,
              surname,
              username,
              pageLink
            }))
            window.location.pathname = '/';
          } else {
            const { errorDescription, errorClass } = response.data.error;
            const toast = document.createElement('div');
            toast.classList.add(errorClass);

            const toastText = document.createElement('p');
            toastText.innerText = errorDescription;

            toast.append(toastText);
            document.body.append(toast);

            setTimeout(this.hideToast, 5000);
          }
        } catch (error) {
          // eslint-disable-next-line
          console.error(error)
        }
      },
      hideToast() {
        document.querySelector('.toast-error').remove();
      }
    }
  }

</script>
