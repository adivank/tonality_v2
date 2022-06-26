<template>
  <!-- username, password -->
  <form @submit.prevent="userLogin" class="form">
    <div class="form__content">
      <div class="form__group">
        <label for="email">Enter your email:</label>
        <input type="text" class="form__control" id="email" name="email" v-model="login.username">
      </div>
      <div class="form__group">
        <label for="password">Enter your password:</label>
        <input type="password" class="form__control" id="password" name="password" v-model="login.password">
      </div>
    </div>
    <div class="button-wrapper">
      <button type="submit" class="btn btn-primary">Login</button>
      <nuxtLink to="/register">Not a member? Register here</nuxtLink>
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
