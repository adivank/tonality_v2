<template>
  <div class="sidebar">
    <div class="user-image__container">
      <img class="user-image" src="https://source.unsplash.com/random/200x200" alt="lo_The image of the user">
    </div>
    <ul class="sidebar__list">
      <li class="sidebar__list__item">
        <fa-icon icon="user" class="list__icon" />
        <p class="list__text">lo_Events</p>
      </li>
      <li class="sidebar__list__item">
        <fa-icon icon="paper-plane" class="list__icon" />
        <p class="list__text">lo_Invites</p>
      </li>
      <li class="sidebar__list__item">
        <fa-icon icon="star" class="list__icon" />
        <p class="list__text">lo_Favorites</p>
      </li>
      <li class="sidebar__list__item">
        <fa-icon icon="location-pin" class="list__icon" />
        <p class="list__text">lo_Places</p>
      </li>
      <li class="sidebar__list__item">
        <fa-icon icon="newspaper" class="list__icon" />
        <p class="list__text">lo_News</p>
      </li>
    </ul>
    <footer class="sidebar__footer">
      <p>Brain on a stick studios <strong>&copy; 2022</strong></p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initialString: 'Hello world!'
    }
  }
}
</script>
