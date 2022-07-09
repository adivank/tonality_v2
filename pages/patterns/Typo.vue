<template>
  <div class="ptrn-color ptrn-color__container --column">
      <component :is="type" v-for="type in types" :key="type">
        This is {{ type === 'p' ? 'a paragraph' : 'heading' }} {{ type === 'p' ? '' : type }}
      </component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: ['h1', 'h2', 'h3', 'p', 'span']
    }
  }
}
</script>
