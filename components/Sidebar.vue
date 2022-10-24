<template>
  <div class="sidebar">
    <div class="user__container">
      <div class="user-image__container">
        <img class="user-image" src="http://www.place-hold.it/200x200" alt="lo_The image of the user">
      </div>
      <h2>{{ `${user.name} ${user.surname}` }}</h2>
    </div>
    <ul class="sidebar__list">
      <li v-for="item in sidebarListItems" class="sidebar__list__item" :key="item.icon">
        <fa-icon :icon="item.icon" class="list__icon" />
        <p class="list__text">{{ item.text }}</p>
      </li>
    </ul>
    <footer class="sidebar__footer">
      <p>Demo page - playground <strong>&copy; 2022</strong></p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarListItems: [
        {
          icon: 'user',
          text: 'Events'
        },
        {
          icon: 'paper-plane',
          text: 'Invites'
        },
        {
          icon: 'star',
          text: 'Favorites'
        },
        {
          icon: 'location-pin',
          text: 'Places'
        },
        {
          icon: 'newspaper',
          text: 'News'
        }
      ]
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
}
</script>
