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
  // here should everything be built for audio player, so we have info in parent component
  // the information would then be passed to state
  // problem is triggering the audio changes from children component
  // or in other words problem is component communication - need to find a way for them to communicate
  // when user clicks play - the animation function gets triggered
}
</script>
