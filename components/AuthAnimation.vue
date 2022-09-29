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
            :value="currentVolumeValue"
            step="2"
            ref="volumeControl">
          <button data-mute="false" role="swicth" aria-checked="false" class="audio__control__button audio__control__button--align-start" ref="volumeMute">
            <fa-icon v-if="currentVolumeValue > 0" icon="volume-high" class="audio__icon" />
            <fa-icon v-else-if="currentVolumeValue <= 0 && currentVolumeValue > -100" icon="volume-low" class="audio__icon" />
            <fa-icon v-else-if="currentVolumeValue == -100 && !isAudioMute" icon="volume-off" class="audio__icon" />
            <fa-icon v-else-if="isAudioMute" icon="volume-xmark" class="audio__icon" />
          </button>
        </div>
        <div class="audio__song-data">
          <fa-icon icon="music" class="audio__icon" />
          <p class="song-info">Song: Unchain my heart | Artist: Joe Cocker | Album: Unchain my heart</p>
        </div>
      </div>
    </div>
    <div class="animation__container">
      <canvas id="audioVisualizer" :width="`${visualizerWidth}px`" :height="`${visualizerHeight}px`"></canvas>
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
        prevVolumeValue: null,
        currentVolumeValue: 0,
        gainNode: null,
        visualizerHeight: null,
        visualizerWidth: null,
        i: 0,
        COLOR_PRIMARY: null,
        COLOR_SECONDARY: null,
        canvasCircles: []
      }
    },
    mounted() {
      const animationContainer = document.querySelector('.animation__container');
      this.visualizerHeight = animationContainer.clientHeight;
      this.visualizerWidth = animationContainer.clientWidth;
      this.COLOR_PRIMARY = 'rgba(151, 114, 251, 0.8)';
      this.COLOR_SECONDARY = 'rgba(247, 206, 166, 0.7)';

      this.generateCanvasCircles(6);
      this.buildAudioPlayer();
      window.addEventListener('load', this.startAnimation);
    },
    methods: {
      getRandomNumber(minValue = 0, maxValue = 1, divider = 1, isNegativeIncluded = false) {
        let randomNumber = (Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue) / divider;
        if (isNegativeIncluded) {
          randomNumber *= (Math.round(Math.random()) ? 1 : -1);
        }
        return randomNumber;
      },
      startAnimation() {
        window.requestAnimationFrame(this.buildAudioVisualizer);
      },
      buildAudioPlayer() {
        /* eslint-disable */
        const AudioContext = window.AudioContext || window.webkitAudioContext;
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

        this.gainNode = audioContext.createGain();
        track.connect(this.gainNode).connect(audioContext.destination);

        this.$refs.volumeControl.addEventListener('input', (event) => {
          this.currentVolumeValue = parseInt(event.target.value);
          this.gainNode.gain.value = this.currentVolumeValue / 100;

          if(this.currentVolumeValue !== -100 && this.$refs.volumeMute.dataset.mute === 'true') {
            this.$refs.volumeMute.dataset.mute === 'false'
            this.isAudioMute = false;
          }
        }, false)

        this.$refs.volumeMute.addEventListener('click', (event) => {
          const volumeButton = event.target.closest('.audio__control__button');
          if (volumeButton.dataset.mute === 'false') {
            this.prevVolumeValue = this.currentVolumeValue;
            volumeButton.dataset.mute = 'true';
            this.setAudioVolume(-100);
            this.isAudioMute = true;
          } else if (volumeButton.dataset.mute === 'true') {
            volumeButton.dataset.mute = 'false';
            this.isAudioMute = false;
            this.setAudioVolume(this.prevVolumeValue);
          }
        })
        /* eslint-enable */
      },
      setAudioVolume(value) {
        this.currentVolumeValue = value;
        this.gainNode.gain.value = value / 100;
      },
      buildAudioVisualizer() {
        const canvas = document.getElementById('audioVisualizer');
        let canvasCtx = null;
        if (canvas.getContext) {
          canvasCtx = canvas.getContext('2d');
        } else {
          return 0;
        }

        canvasCtx.globalCompositeOperation = 'destination-over';
        canvasCtx.clearRect(0, 0, this.visualizerWidth, this.visualizerHeight);

        this.canvasCircles.forEach((c) => {
          canvasCtx.fillStyle = c.fillColor;
          canvasCtx.save();
          canvasCtx.beginPath();
          canvasCtx.arc(c.objX, c.objY, c.radius, c.start, c.end);
          c = this.calculateCanvasObjectPosition(c);
          canvasCtx.fill();
          canvasCtx.restore();
        })

        window.requestAnimationFrame(this.buildAudioVisualizer);
      },
      generateCanvasCircles(numOfObjects) {
        let canvasObject = null;
        const BASE_RADIUS = 100;
        const speedTo = 80;
        const speedFrom = 10;
        const divider = 100;

        for (let i = 0; i < numOfObjects; i++) {
          const speedX = this.getRandomNumber(speedTo, speedFrom, divider, true);
          const speedY = this.getRandomNumber(speedTo, speedFrom, divider, true);
          const radius = BASE_RADIUS + i * 20;

          canvasObject = {
            objX: this.getRandomNumber(0, this.visualizerWidth),
            objY: this.getRandomNumber(0, this.visualizerHeight),
            radius,
            speedX,
            speedY,
            start: 0,
            end: Math.PI * 2,
            fillColor: i % 2 === 0 ? this.COLOR_PRIMARY : this.COLOR_SECONDARY
          }

          this.canvasCircles.push(canvasObject)
        }
      },
      calculateCanvasObjectPosition(c) {
        if (c.objX >= this.visualizerWidth) {
          c.speedX *= -1;
        }

        if (c.objX <= 0) {
          c.speedX *= -1;
        }

        if (c.objY >= this.visualizerHeight) {
          c.speedY *= -1;
        }

        if (c.objY <= 0) {
          c.speedY *= -1;
        }

        c.objX += c.speedX;
        c.objY += c.speedY;
        return c;
      }
    }
  }
</script>
