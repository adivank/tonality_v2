<template>
  <div class="calendar__container">
    <div>
      <h1>Calendar</h1>
      <div class="calendar-selector__container">
        <CalendarLayoutSelector />
      </div>
      <div class="grid grid--calendar grid--day" id="calendar">
        <div class="calendar__divider-line"></div>
        <button
          v-for="day in fullDayList"
          class="date__container"
          :style="`gridColumn: ${day.dayOfTheWeek}`"
          :key="day.number"
        >
          <p class="date__header">
            <time class="date__time">
              <span class="date__day-number">{{ day.dayNumber }}.{{ day.month }}.</span>
              <span class="date__day-name">{{ day.dayName }}</span>
            </time>
          </p>
        </button>
        <button
          v-for="hour in hours"
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
    <div class="modal__overlay">
      <div class="modal">
        <h2>Hello world</h2>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarLayoutSelector from '@/components/Calendar/components/CalendarLayoutSelector.vue';

export default {
  components: { CalendarLayoutSelector },
  props: {
  },
  data() {
    return {
      currentDate: null,
      fullDayList: null,
      isDayModalOpen: false,
      calendarLayout: '',
      hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    }
  },
  mounted() {
    const today = new Date();
    this.currentDate = {
      today,
      day: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear()
    }
  },
  methods: {
  }
}
</script>
