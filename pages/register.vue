<template>
  <div class="container">
    <h1 class="auth__title">Register</h1>
    <form @submit.prevent="userRegister">
      <div class="row">
        <div class="form__group col-12 col-lg-6">
          <label for="email" class="form__label">Enter your email:</label>
          <input
            type="text"
            class="form__control"
            id="email"
            name="email"
            v-model="register.username"
          >
        </div>
        <div class="form__group col-12 col-lg-6">
          <label for="password">Enter your password:</label>
          <input
            type="password"
            class="form__control"
            id="password"
            name="password"
            v-model="register.password"
          >
        </div>
        <div class="button__wrapper col-12">
          <button type="submit" class="button button--primary">Register</button>
          <nuxtLink to="/login" class="button button--text">Already a member? Login here</nuxtLink>
        </div>
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
        password: null
      }
    }
  },
  methods: {
    async userRegister() {
        try {
          await this.$axios.$post('http://localhost:8080/register', {
            username: this.register.username,
            password: this.register.password
          }).then((user) => {
            if (user) {
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
