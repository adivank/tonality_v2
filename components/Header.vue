<template>
  <header class="header">
    <nuxtLink to="/">
      <img src="http://www.place-hold.it/170x150" alt="logo" class="logo logo--big">
    </nuxtLink>
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
          <nuxtLink :to="`/${userPageLink}`">
            <fa-icon icon="user" class="navigation__icon" />
          </nuxtLink>
        </li>
        <li title="Settings" class="dropdown__trigger position-relative">
          <fa-icon icon="gear" class="navigation__icon" />
          <ul class="dropdown">
            <li>
              <button class="dropdown__item">Settings</button>
            </li>
            <li>
              <button class="dropdown__item" ref="logoutButton">Logout</button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import SearchBox from '@/components/SearchBox.vue';

export default {
  components: { SearchBox },
  props: {
    userPageLink: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    }
  },
  mounted() {
    document.querySelector('.dropdown__trigger').addEventListener('mouseup', () => {
      document.querySelector('.dropdown').classList.add('show');
    })
    this.$refs.logoutButton.addEventListener('click', async () => {
      localStorage.removeItem('user');
      await this.$auth.logout();
    })
  },
  methods: {
    showModal() {
      this.$emit('showModal');
    },
    handleDropdownClose($event) {
    }
  }
}

</script>
