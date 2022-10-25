<template>
  <div class="post">
    <form @submit="createPost" class="form">
      <div class="form__group">
        <label for="headline" class="form__label">Headline:</label>
        <input
          type="text"
          class="form__control"
          id="headline"
          name="headline"
          v-model="post.headline"
        >
      </div>
      <div class="form__group">
        <label for="postText" class="form__label">Text:</label>
        <textarea
          name="postText"
          id="postText"
          cols="10"
          rows="4"
          class="form__control resize-none"
          v-model="post.text"
        >
        </textarea>
      </div>
      <div class="button__wrapper">
        <button class="button button--primary">Post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        headline: null,
        text: null
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    createPost() {
      const { headline, text } = this.post;
      const { name, surname } = this.user;
      return this.$axios.$post('http://localhost:8080/create-post', {
        user: {
          name,
          surname
        },
        post: {
          headline,
          text
        }
      })
    }
  }
}
</script>
