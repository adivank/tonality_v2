<template>
  <div class="post">
    <div class="post__header">
      <div class="post__image">
        <img src="http://www.place-hold.it/100x100" alt="">
      </div>
      <div class="post__info">
        <p class="post__author">{{ user }}</p>
        <p class="post__time">{{ post.time }}</p>
      </div>
    </div>
    <div class="post__body">
      <h2 class="post__headline">{{ post.headline }}</h2>
      <p class="post__text">{{ post.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      required: true
    },
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
