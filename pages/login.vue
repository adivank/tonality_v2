<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="userLogin">
      <div class="row">
        <div class="form-group col-12 col-lg-6">
          <label for="email">Enter your email:</label>
          <input type="text" class="form-control" id="email" name="email" v-model="login.username">
        </div>
        <div class="form-group col-12 col-lg-6">
          <label for="password">Enter your password:</label>
          <input type="password" class="form-control" id="password" name="password" v-model="login.password">
        </div>
        <div class="button-wrapper col-12">
          <button type="submit" class="btn btn-primary">Login</button>
          <nuxtLink to="/register">Not a member? Register here</nuxtLink>
        </div>
      </div>
    </form>
  </div>
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
      }
    }
  }

</script>
