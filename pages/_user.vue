<template>
  <div class="profile body-container">
    <h1>{{ user.name }} {{ user.surname }}</h1>
  </div>
</template>

<script>
export default {
  layout: 'common-page',
  data() {
    return {
      user: null
    }
  },
  async asyncData({ params, redirect }) {
    const response = await fetch('http://localhost:8080/get-user', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username: JSON.parse(localStorage.getItem('user')).username })
    });

    const user = await response.json();

    return {
      user
    }
  },
  mounted() {
    this.$store.dispatch('setUser', this.user);
  }
}
</script>
