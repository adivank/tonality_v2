<template>
  <div @click="hideModal" class="dark-bg">
    <Header @showModal="showModal" />
    <Sidebar />
    <PostList />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import PostList from '~/components/PostList/PostList.vue';
import '../styles/main.scss';

export default {
  name: 'IndexPage',
  components: { Header, Sidebar, PostList },
  data() {
    return {
      modalOpened: false
    }
  },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem('user'));
    }
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.$store.dispatch('setUser', user);
  },
  methods: {
    showModal() {
      this.modalOpened = true;
    },
    hideModal(event) {
      if ((this.modalOpened && !event.target.closest('.modal')) && !event.target.closest('.button')) {
        this.modalOpened = false;
      }
    }
  }
}
</script>
