<template>
  <div class="post-list">
    <Post v-for="post in posts" :post="post.post" :user="post.user.name" :key="post.user.id" />
  </div>
</template>

<script>
import Post from './Post.vue';
export default {
  components: { Post },
  data() {
    return {
      posts: [
        {
          user: {
            id: '01',
            name: 'Adam Ivanković'
          },
          post: {
            time: '21. September 2022.',
            headline: 'Hello world!',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde repellendus itaque aut repudiandae debitis optio quisquam. Eum non eos odit quod, similique unde soluta magnam adipisci optio fugit? Molestiae, unde a. Officiis, enim! Placeat molestiae tempora quisquam a explicabo minus in neque repellendus? Suscipit libero, ea laudantium numquam temporibus minus.'
          }
        },
        {
          user: {
            id: '02',
            name: 'Netko Treći'
          },
          post: {
            time: '21. September 2022.',
            headline: 'Book',
            text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde repellendus itaque aut repudiandae debitis optio quisquam. Eum non eos odit quod, similique unde soluta magnam.'
          }
        }
      ]
    }
  }
}
</script>
