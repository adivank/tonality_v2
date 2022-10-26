<template>
  <div class="post">
    <div class="post__header">
      <div class="post__image">
        <img src="http://www.place-hold.it/100x100" alt="">
      </div>
      <div class="post__info">
        <nuxtLink :to="`/${user.name}.${user.surname}`">
          <p class="post__author">{{ `${user.name} ${user.surname}` }}</p>
        </nuxtLink>
        <p class="post__time">21. september 2021.</p>
      </div>
    </div>
    <div class="post__body">
      <h2 class="post__headline">{{ post.headline }}</h2>
      <p class="post__text">{{ post.text }}</p>
    </div>
    <div class="post__footer">
      <client-only>
        <fa-icon icon="heart" class="post__animated__icon" />
        <LottieAnimation :lottieId="'heartAnimation'" :lottieSrc="'/animations/like-animation.json'" />
      </client-only>
    </div>
  </div>
</template>

<script>
import LottieAnimation from '../LottieAnimation.vue';

export default {
    props: {
        user: {
            type: Object,
            required: true
        },
        post: {
            type: Object,
            required: true
        }
    },
    components: { LottieAnimation }
}
</script>
