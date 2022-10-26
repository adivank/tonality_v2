<template>
  <div class="container">
    <h1 class="auth__title">Register</h1>
    <form @submit.prevent="userRegister" class="form--small">
      <fieldset class="form__fieldset">
        <div class="form__group">
          <label for="name" class="form__label">Name:</label>
          <input
            type="text"
            class="form__control"
            id="name"
            name="name"
            v-model="register.information.name"
          >
        </div>
        <div class="form__group">
          <label for="surname" class="form__label">Surname:</label>
          <input
            type="text"
            class="form__control"
            id="surname"
            name="surname"
            v-model="register.information.surname"
          >
        </div>
      </fieldset>
      <div class="form__group">
        <label for="username" class="form__label">Username:</label>
        <input
          type="text"
          class="form__control"
          id="username"
          name="username"
          v-model="register.login.username"
        >
      </div>
      <div class="form__group">
        <label for="email" class="form__label">Email:</label>
        <input
          type="text"
          class="form__control"
          id="email"
          name="email"
          v-model="register.login.email"
        >
      </div>
      <div class="form__group">
        <label for="password">Password:</label>
        <input
          type="password"
          class="form__control"
          id="password"
          name="password"
          v-model="register.login.password"
        >
      </div>
      <div class="button__wrapper">
        <button type="submit" class="button button--primary">Register</button>
        <nuxtLink to="/login" class="button button--text">Already a member? Login here</nuxtLink>
      </div>
    </form>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid';

export default {
  layout: 'auth',
  auth: false,
  data() {
    return {
      register: {
        information: {
          name: null,
          surname: null
        },
        login: {
          username: null,
          email: null,
          password: null
        }
      }
    }
  },
  methods: {
    async userRegister() {
      const { information, login } = this.register;
      try {
        await this.$axios.$post('http://localhost:8080/register', {
          information,
          login,
          userId: uuid()
        }).then((data) => {
          if (!data.error) {
            const { information, login, userId } = data;
            localStorage.setItem('user', JSON.stringify({
              information,
              login,
              userId
            }))
            // window.location.pathname = '/';
          } else {
            const { errorDescription, errorClass } = data.error;
            const toast = document.createElement('div');
            toast.classList.add(errorClass);

            const toastText = document.createElement('p');
            toastText.innerText = errorDescription;

            toast.append(toastText);
            document.body.append(toast);

            setTimeout(this.hideToast, 5000);
          }
        });
      } catch (error) {
        // eslint-disable-next-line
        console.error(error);
      }
    }
  }
}
</script>
