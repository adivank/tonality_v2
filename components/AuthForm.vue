<template>
  <!-- username, password -->
  <form @submit.prevent="userLogin" class="form">
    <div class="form__content">
      <div class="form__group">
        <label for="email">
          <input
            type="text"
            class="form__control"
            id="email"
            name="email"
            placeholder="Email"
            v-model="login.username"
          >
        </label>
      </div>
      <div class="form__group">
        <label for="password">
          <input
            type="password"
            class="form__control"
            id="password"
            name="password"
            placeholder="Password"
            v-model="login.password"
          >
        </label>
      </div>
    </div>
    <div class="button__wrapper">
      <button type="submit" class="button button--primary">Login</button>
      <nuxtLink to="/register" class="button--link">Not a member? Register here</nuxtLink>
    </div>
    <!-- Personal Information -->
  </form>
</template>

<script>
export default {
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
        console.log(response);
      } catch (error) {
        console.error(error)
      }
    },
    submitAuthForm() {
      // TODO: Connect to state depending on which form you're at
    }
  }
}
</script>
