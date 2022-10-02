<template>
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
        <input
          type="range"
          class="audio__volume__control"
          min="-100"
          max="100"
          :value="currentVolumeValue"
          step="2"
          ref="volumeControl"
        >
        <button
          data-mute="false"
          role="swicth"
          aria-checked="false"
          class="audio__control__button audio__control__button--align-start"
          ref="volumeMute"
        >
          <fa-icon v-if="currentVolumeValue > 0" icon="volume-high" class="audio__icon" />
          <fa-icon
            v-else-if="currentVolumeValue <= 0 && currentVolumeValue > -100"
            icon="volume-low"
            class="audio__icon"
          />
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
      gainNode: null
    }
  },
  mounted() {
    this.buildAudioPlayer();
  },
  methods: {
    buildAudioPlayer() {
      /* eslint-disable */
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();
      const analyzer = audioContext.createAnalyser();
      const audioElement = document.querySelector('#audioPlayer');
      const track = audioContext.createMediaElementSource(audioElement);

      analyzer.fftSize = 2048;
      const bufferLength = analyzer.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyzer.getByteTimeDomainData(dataArray);
      track.connect(analyzer);
      track.connect(audioContext.destination);

      // setInterval(() => {
      //   analyzer.getByteTimeDomainData(dataArray);
      //   console.log(dataArray);
      // }, 1000);

      const playButton = document.querySelector('.js-play-control');
      playButton.addEventListener('click', () => {
        if (audioContext.state === 'suspended') {
          audioContext.resume();
        }
        if (playButton.dataset.playing === 'false') {
          audioElement.play();
          playButton.dataset.playing = 'true';
          this.isAudioActive = !this.isAudioActive;
        }
        else if (playButton.dataset.playing === 'true') {
          audioElement.pause();
          playButton.dataset.playing = 'false';
          this.isAudioActive = !this.isAudioActive;
        }
      }, false);
      this.gainNode = audioContext.createGain();
      track.connect(this.gainNode).connect(audioContext.destination);
      this.$refs.volumeControl.addEventListener('input', (event) => {
        this.currentVolumeValue = parseInt(event.target.value);
        this.gainNode.gain.value = this.currentVolumeValue / 100;
        if (this.currentVolumeValue !== -100 && this.$refs.volumeMute.dataset.mute === 'true') {
          this.$refs.volumeMute.dataset.mute === 'false';
          this.isAudioMute = false;
        }
      }, false);
      this.$refs.volumeMute.addEventListener('click', (event) => {
        const volumeButton = event.target.closest('.audio__control__button');
        if (volumeButton.dataset.mute === 'false') {
          this.prevVolumeValue = this.currentVolumeValue;
          volumeButton.dataset.mute = 'true';
          this.setAudioVolume(-100);
          this.isAudioMute = true;
        }
        else if (volumeButton.dataset.mute === 'true') {
          volumeButton.dataset.mute = 'false';
          this.isAudioMute = false;
          this.setAudioVolume(this.prevVolumeValue);
        }
      });
      /* eslint-enable */
    },
    setAudioVolume(value) {
      this.currentVolumeValue = value;
      this.gainNode.gain.value = value / 100;
    }
  }
}
</script>
