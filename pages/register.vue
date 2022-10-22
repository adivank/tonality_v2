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
            v-model="register.name"
          >
        </div>
        <div class="form__group">
          <label for="surname" class="form__label">Surname:</label>
          <input
            type="text"
            class="form__control"
            id="surname"
            name="surname"
            v-model="register.surname"
          >
        </div>
      </fieldset>
      <div class="form__group">
        <label for="email" class="form__label">Enter your email:</label>
        <input
          type="text"
          class="form__control"
          id="email"
          name="email"
          v-model="register.username"
        >
      </div>
      <div class="form__group">
        <label for="password">Enter your password:</label>
        <input
          type="password"
          class="form__control"
          id="password"
          name="password"
          v-model="register.password"
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
export default {
  layout: 'auth',
  auth: false,
  data() {
    return {
      register: {
        username: null,
        password: null,
        name: null,
        surname: null
      }
    }
  },
  methods: {
    async userRegister() {
        try {
          await this.$axios.$post('http://localhost:8080/register', {
            username: this.register.username,
            password: this.register.password,
            name: this.register.name,
            surname: this.register.surname
          }).then((user) => {
            if (user) {
              console.log(user);
              const { name, surname, username } = user;
              localStorage.setItem('user', JSON.stringify({
                name,
                surname,
                username
              }))
              window.location.pathname = '/';
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
