<template>
  <div>
    <header>
      <nav>
        <div v-if="$auth.loggedIn">
          <p>User is logged in</p>
        </div>
        <div v-else>
          <p>User logged in: {{ $auth.loggedIn }}</p>
          <nuxtLink to="/login">Log in</nuxtLink>
          <nuxtLink to="/register">Register</nuxtLink>
        </div>
        <div class="search-box__container">
          <label class="search-box__label">
            <input type="search" placeholder="lo_Search" class="search-box">
          </label>
        </div>
        <ul class="nav__list">
          <li v-for="item in menuItems" :key="item.text" :class="['nav__item', {'--active': item.isActive}]">
            <img :src="item.icon" :alt="item.text" class="nav__icon">
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <div class="container">
        <div class="row">
          <div class="post__container col-12">
            <div class="post__header">
              <img src="https://www.place-hold.it/30x30" alt="" class="post__image">
              <h2 class="post__title">Rendering components in vue.js</h2>
            </div>
            <p class="post__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dignissimos unde illo quo quas veniam tempora, aperiam cupiditate soluta sed quos nemo distinctio minus! Ratione molestias id explicabo quos, officiis error officia ad eum quisquam quam quas rem sit, voluptatem alias. Amet unde optio tenetur! Doloremque consectetur modi iste non.</p>
          </div>
        </div>
        <div class="row">
          <div class="post__container col-12">
            <div class="post__header">
              <img src="https://www.place-hold.it/30x30" alt="" class="post__image">
              <h2 class="post__title">Rendering components in vue.js</h2>
            </div>
            <p class="post__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dignissimos unde illo quo quas veniam tempora, aperiam cupiditate soluta sed quos nemo distinctio minus! Ratione molestias id explicabo quos, officiis error officia ad eum quisquam quam quas rem sit, voluptatem alias. Amet unde optio tenetur! Doloremque consectetur modi iste non.</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import '../styles/main.scss';

  export default {
    auth: false,
    name: 'IndexPage',
    data() {
      return {
        menuItems: [
          {
            icon: 'https://www.place-hold.it/40x40',
            text: 'Home',
            isActive: true
          },
          {
            icon: 'https://www.place-hold.it/40x40',
            text: 'About',
            isActive: false
          },
          {
            icon: 'https://www.place-hold.it/40x40',
            text: 'Contact',
            isActive: false
          }
        ]
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
