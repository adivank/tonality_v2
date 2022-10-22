<template>
  <div class="post-list">
    <PostCreation />
    <Post v-for="post in posts" :post="post.post" :user="post.user" :key="post.user.id" />
  </div>
</template>

<script>
import Post from './Post.vue';
import PostCreation from './PostCreation.vue';
export default {
  components: { Post, PostCreation },
  data() {
    return {
      posts: []
    }
  },
  mounted() {
    this.generatePosts();
  },
  methods: {
    async generatePosts() {
      const postList = await this.$axios.$get('http://localhost:8080/get-posts');
      this.posts = postList;
    }
  }
}
</script>
