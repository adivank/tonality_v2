<template>
  <div class="calendar">
    <div class="calendar__container">
      <h1>Calendar</h1>
      <div class="calendar-selector__container">
        <CalendarLayoutSelector />
      </div>
      <div :class="['js-calendar', 'position-relative', 'calendar__container--layout', {'grid grid--calendar-layout': days.length === 1}, {'grid grid--calendar': days.length > 1}]">
        <div class="date__container">
          <p v-for="hour in hours" class="date__header" :key="`time-${hour}`">
            <time class="date__time">
              <span class="date__day-number">{{ hour }}</span>
            </time>
          </p>
        </div>

        <div v-for="day in days" class="grid__border" :key="day">
          <div class="day__header">
            <h3 class="day__title">{{ day }}</h3>
            <div class="day__time">
              <p>10</p>
              <span>July</span>
            </div>
          </div>
          <div class="grid grid--day" id="calendar">
            <button
              v-for="hour in hours"
              @click="handleClickHour(day, hour)"
              class="calendar__container--day"
              :key="hour"
            >
            </button>
          </div>
        </div>
        <div class="calendar__divider-line js-divider-line"></div>
      </div>
    </div>
    <Modal :label="'Schedule a meeting'" :modal-type="'calendar'" />
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue';
import CalendarLayoutSelector from '@/components/Calendar/components/CalendarLayoutSelector.vue';
import { componentsEB } from '~/plugins/componentsEB';

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
      hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    }
  },
  watch: {
    days() {
      this.positionDividerLine();
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

    componentsEB.$on('changeCalendarLayout', this.changeCalendarLayout)
  },
  methods: {
    handleClickHour(day, hour) {
      componentsEB.$emit('openModal', true);

      /* eslint-disable */
      console.log(day);
      console.log(hour);
      /* eslint-enable */
    },
    changeCalendarLayout(days) {
      this.days = days;
    },
    positionDividerLine() {
      const calendar = document.querySelector('.js-calendar');
      const dividerLine = calendar.querySelector('.js-divider-line');
      const dateContainer = calendar.querySelector('button');

      const calendarHeight = calendar.clientHeight;
      const dateTimeHeight = dateContainer.clientHeight;

      const currentTime = new Date()

      const hoursInPixels = dateTimeHeight * currentTime.getHours();
      const minutesInPixels = dateTimeHeight * currentTime.getMinutes() / 60;

      dividerLine.style.bottom = `${calendarHeight - hoursInPixels - minutesInPixels - dividerLine.clientHeight - 16}px`
    }
  }
}
</script>
