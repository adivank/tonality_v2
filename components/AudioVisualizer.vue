<template>
  <div class="animation__container">
    <canvas id="audioVisualizer" :width="`${visualizerWidth}px`" :height="`${visualizerHeight}px`"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visualizerHeight: null,
      visualizerWidth: null,
      i: 0,
      COLOR_PRIMARY: null,
      COLOR_SECONDARY: null,
      canvasCircles: []
    };
  },
  mounted() {
    const animationContainer = document.querySelector('.animation__container');
    this.visualizerHeight = animationContainer.clientHeight;
    this.visualizerWidth = animationContainer.clientWidth;
    this.COLOR_PRIMARY = 'rgba(151, 114, 251, 0.8)';
    this.COLOR_SECONDARY = 'rgba(247, 206, 166, 0.7)';
    this.generateCanvasCircles(6);
    this.$nextTick(() => {
      this.startAnimation();
    });
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
      });
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
        };
        this.canvasCircles.push(canvasObject);
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
