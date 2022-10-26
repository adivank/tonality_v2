<template>
  <lottie-player :id="lottieId" :src="lottieSrc" ref="lottieAnimation" class="lottie-player"></lottie-player>
</template>

<script>
import * as LottieInteractivity from '@lottiefiles/lottie-interactivity';

export default {
  props: {
    lottieId: {
      type: String,
      required: true
    },
    lottieSrc: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      initialData: null
    }
  },
  mounted() {
    console.log(this.lottieId, 'id');
    console.log(this.lottieSrc, 'src');
    this.$nextTick(() => {
      LottieInteractivity.create({
        player: `#${this.lottieId}`,
        mode: 'cursor',
        actions: [
          {
            type: 'toggle',
            forceFlag: false
          }
        ]
      })
    })
  }
}
</script>

<style scoped>
.lottie-player {
  width: 50px;
  height: 50px;
  position: absolute;
  left: -16px;
  bottom: -10px;
}
</style>
