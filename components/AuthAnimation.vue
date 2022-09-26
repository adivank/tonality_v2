<template>
  <div class="animation__container">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="audio">
      <audio :src="require('~/assets/dubstep.mp3').default"></audio>
      <div class="audio__player">
        <fa-icon icon="backward-step" class="audio__icon" />
        <fa-icon icon="play" class="audio__icon" />
        <fa-icon icon="forward-step" class="audio__icon" />
        <fa-icon icon="volume-high" class="audio__icon" />
        <div class="audio__song-desc">
          <fa-icon icon="music" class="audio__icon" />
          <p>Song description</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        audioSrc: null
      }
    },
    mounted() {
      const circles = document.querySelectorAll('.circle');
      circles.forEach((circle) => {
        circle.style.top = `${this.getRandomNumber(100)}%`;
        circle.style.left = `${this.getRandomNumber(100)}%`;

        const circleWidthHeight = `${this.getRandomNumber(300)}px`;
        circle.style.width = circleWidthHeight;
        circle.style.height = circleWidthHeight;
      })

      this.createAudioPlayer('hello');
    },
    methods: {
      getRandomNumber(topRandomValue) {
        return Math.floor(Math.random() * topRandomValue);
      },
      createAudioPlayer(audioSrc) {
        console.log(audioSrc);
      }
    }
  }
</script>
