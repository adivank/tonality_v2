<template>
  <div class="full-width-height dark-bg">
    <div class="grid grid--auth">
      <div class="auth__content">
        <Nuxt />
      </div>
      <AuthAnimation />
    </div>
  </div>
</template>

<script>
  import AuthAnimation from '@/components/AuthAnimation.vue';

  export default {
    components: { AuthAnimation }
  }

</script>
