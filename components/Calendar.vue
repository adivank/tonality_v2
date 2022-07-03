<template>
  <div class="calendar__container">
    <div>
      <h1>Calendar</h1>
      <div class="grid grid--calendar">
        <button
          v-for="day in fullDayList"
          @click="openDateModal"
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

export default {
  components: {},
  props: {
    modalOpened: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      currentDate: null,
      fullDayList: null,
      isDayModalOpen: false
    }
  },
  mounted() {
    const today = new Date();
    this.currentDate = {
      currentDay: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear()
    }

    this.fullDayList = this.listDaysInMonth(this.currentDate.month, this.currentDate.year);
  },
  methods: {
    listDaysInMonth(month, year) {
      const date = new Date(year, month, 1);
      const days = [];
      let dayNumber = 1;
      while (date.getMonth() === month) {
        const day = new Date(date);
        const dayObject = {
          dayOfTheWeek: day.getDay(),
          dayName: day.toLocaleDateString('hr-hr', { weekday: 'long' }).slice(0, 3),
          dayNumber: dayNumber++,
          month: month + 1
        }
        days.push(dayObject);
        date.setDate(date.getDate() + 1);
      }
      return days;
    },
    openDateModal() {
      this.isDayModalOpen = true;
    }
  }
}
</script>
