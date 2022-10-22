<template>
  <header class="header dark-bg">
    <div>
      <img src="http://www.place-hold.it/170x150" alt="logo" class="logo logo--big">
    </div>
    <SearchBox />
    <nav class="navigation">
      <ul class="navigation__list">
        <li title="Messages">
          <fa-icon icon="message" class="navigation__icon" />
        </li>
        <li title="Calendar">
          <fa-icon icon="calendar" class="navigation__icon" />
        </li>
        <li title="Account">
          <fa-icon icon="user" class="navigation__icon" />
        </li>
        <li title="Settings">
          <fa-icon icon="gear" class="navigation__icon" ref="logoutButton" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';

export default {
  components: { SearchBox },
  methods: {
    showModal() {
      this.$emit('showModal');
    }
  },
  mounted() {
    this.$refs.logoutButton.addEventListener('click', async () => {
      localStorage.removeItem('user');
      await this.$auth.logout();
      window.location.pathname = '/login';
    })
  }
}

</script>
