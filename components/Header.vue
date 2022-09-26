<template>
  <header class="header">
    <nav class="navigation">
      <img src="http://www.place-hold.it/170x150" alt="logo" class="logo logo--big">
        <ul v-if="!$auth.loggedIn" class="auth">
          <li>
            <button @click="showModal" class="button button--primary">lo_Login</button>
          </li>
          <li>
            <button @click="showModal" class="button button--primary button--border">lo_Register</button>
          </li>
        </ul>
        <ul v-else class="auth">
          <li>
            <button class="button button--primary button--border" @click="$auth.logout()">Logout</button>
          </li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$emit('showModal');
    }
  }
}

</script>
