<template>
  <div class="">
    <div class="audio">
      <audio :src="require('~/assets/dubstep.mp3').default" id="audioPlayer"></audio>
      <div class="audio__player">
        <fa-icon icon="backward-step" class="audio__icon" />
        <button data-playing="false" role="switch" aria-checked="false" class="audio__control__button js-play-control">
          <fa-icon v-if="isAudioActive" icon="pause" class="audio__icon" />
          <fa-icon v-else icon="play" class="audio__icon" />
        </button>
        <fa-icon icon="forward-step" class="audio__icon" />
        <div class="audio__volume">
          <input type="range"
            class="audio__volume__control"
            min="-100"
            max="100"
            value="0"
            step="2"
            ref="volumeControl">
          <button data-mute="false" role="swicth" aria-checked="false" class="audio__control__button audio__control__button--align-start">
            <fa-icon v-if="currentVolumeValue > 0" icon="volume-high" class="audio__icon audio__icon--volume" />
            <fa-icon v-else-if="currentVolumeValue <= 0 && currentVolumeValue > -100" icon="volume-low" class="audio__icon audio__icon--volume" />
            <fa-icon v-else-if="currentVolumeValue == -100" icon="volume-off" class="audio__icon audio__icon--volume" />
            <fa-icon v-else-if="isAudioMute" icon="volume-xmark" class="audio__icon audio__icon--volume" />
          </button>
        </div>
        <div class="audio__song-data">
          <fa-icon icon="music" class="audio__icon" />
          <p class="song-info">Song: Unchain my heart | Artist: Joe Cocker | Album: Unchain my heart</p>
        </div>
      </div>
    </div>
    <div class="animation__container">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        audioSrc: null,
        isAudioMute: false,
        isAudioActive: false,
        currentVolumeValue: null
      }
    },
    mounted() {
      this.sliderControl = document.querySelector('.js-volume-control');
      const circles = document.querySelectorAll('.circle');
      circles.forEach((circle) => {
        circle.style.top = `${this.getRandomNumber(100)}%`;
        circle.style.left = `${this.getRandomNumber(100)}%`;

        const circleWidthHeight = `${this.getRandomNumber(300)}px`;
        circle.style.width = circleWidthHeight;
        circle.style.height = circleWidthHeight;
      })

      this.buildAudioPlayer('hello');
    },
    methods: {
      getRandomNumber(topRandomValue) {
        return Math.floor(Math.random() * topRandomValue);
      },
      buildAudioPlayer(audioSrc) {
        /* eslint-disable */
        const Ctx = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();
        const audioElement = document.querySelector('#audioPlayer');

        const track = audioContext.createMediaElementSource(audioElement);
        track.connect(audioContext.destination);

        const playButton = document.querySelector('.js-play-control');
        playButton.addEventListener('click', () => {
          if(audioContext.state === 'suspended') {
            audioContext.resume();
          }

          if(playButton.dataset.playing === 'false') {
            audioElement.play();
            playButton.dataset.playing = 'true';
            this.isAudioActive = !this.isAudioActive;
          } else if (playButton.dataset.playing === 'true') {
            audioElement.pause();
            playButton.dataset.playing = 'false';
            this.isAudioActive = !this.isAudioActive;
          }
        }, false)

        const gainNode = audioContext.createGain();
        track.connect(gainNode).connect(audioContext.destination);

        this.$refs.volumeControl.addEventListener('input', (event) => {
          this.currentVolumeValue = event.target.value;
          gainNode.gain.value = event.target.value / 100;
        }, false)
        /* eslint-enable */
      }
    }
  }
</script>
