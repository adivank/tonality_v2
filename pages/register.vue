<template>
  <div class="container">
    <h1>Register</h1>
    <form action="">
        <div class="row">
          <div class="form-group col-12 col-lg-6">
            <label for="email">Enter your email:</label>
            <input type="email" class="form-control" id="email" name="email">
          </div>
          <div class="form-group col-12 col-lg-6">
            <label for="password">Enter your password:</label>
            <input type="password" class="form-control" id="password" name="password">
          </div>
          <div class="button-wrapper col-12">
            <button type="submit" class="btn btn-primary">Register</button>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  auth: false
}
</script>
