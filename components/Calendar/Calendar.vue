<template>
  <div class="calendar__container">
    <div>
      <h1>Calendar</h1>
      <div class="calendar-selector__container">
        <CalendarLayoutSelector />
      </div>
      <div class="grid grid--calendar grid--day" id="calendar">
        <div class="calendar__divider-line js-divider-line"></div>
        <button
          v-for="hour in hours"
          @click="handleClickHour(hour)"
          class="date__container"
          :key="hour"
        >
          <p class="date__header">
            <time class="date__time">
              <span class="date__day-number">{{ hour }}</span>
            </time>
          </p>
        </button>
      </div>
    </div>
    <Modal :label="'Schedule a meeting'" :modalType="'calendar'" />
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import CalendarLayoutSelector from '@/components/Calendar/components/CalendarLayoutSelector.vue';
import { componentsEB } from '@/components/componentsEB';

export default {
  components: { CalendarLayoutSelector, Modal },
  props: {
  },
  data() {
    return {
      isDayModalOpen: false,
      calendarLayout: '',
      calendar: null,
      today: null,
      currentTime: null,
      debouncedPositionDividerLine: null,
      hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    }
  },
  created() {
    this.today = new Date();
    this.currentTime = {
      day: this.today.getDate(),
      dayName: this.today.toLocaleDateString('hr-hr', { weekday: 'short' }),
      dayInWeek: this.today.getDay(),
      hours: this.today.getHours(),
      minutes: this.today.getMinutes(),
      month: this.today.getMonth() + 1,
      year: this.today.getFullYear()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.positionDividerLine();
      setInterval(this.positionDividerLine, 60000);
    })
  },
  methods: {
    handleClickHour(hour) {
      componentsEB.$emit('openModal', true);
    },
    positionDividerLine() {
      const calendar = document.querySelector('#calendar');
      const dividerLine = calendar.querySelector('.js-divider-line');
      const dateContainer = calendar.querySelector('button');

      const calendarHeight = calendar.clientHeight;
      const dateTimeHeight = dateContainer.clientHeight;

      const currentTime = new Date()

      const hoursInPixels = dateTimeHeight * currentTime.getHours();
      const minutesInPixels = dateTimeHeight * currentTime.getMinutes() / 60;

      dividerLine.style.bottom = `${calendarHeight - hoursInPixels - minutesInPixels - dividerLine.clientHeight}px`
    }
  }
}
</script>
