<template>
  <div class="dark-bg">
    <Header v-if="userPageLink" :user-page-link="userPageLink" />
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
      userPageLink: null
    }
  },
  computed: {
    user() {
      return JSON.parse(localStorage.getItem('user'));
    }
  },
  mounted() {
    this.userPageLink = this.user.pageLink;
    this.$store.dispatch('setUser', this.user);
  },
  methods: {
  }
}
</script>
