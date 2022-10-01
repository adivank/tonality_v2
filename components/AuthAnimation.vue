<template>
  <div>
    <AudioPlayer />
    <AudioVisualizer />
  </div>
</template>

<script>
import AudioPlayer from './AudioPlayer.vue';
import AudioVisualizer from './AudioVisualizer.vue';
export default {
  components: { AudioPlayer, AudioVisualizer }
}
</script>
