<template>
  <div class="ptrn-color__container">
    <div v-for="color in colors" class="ptrn-color" :key="color">
      <p class="ptrn-color__description">{{ color }}</p>
      <ul class="ptrn-color__color">
        <li v-for="tone, index in tones" :class="`color--${color}-${tone}`" :key="index">
          Text
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: ['primary', 'secondary', 'accent', 'success', 'error', 'info', 'warning'],
      tones: ['lighter', 'light', 'normal', 'dark', 'darker']
    }
  }
}
</script>
