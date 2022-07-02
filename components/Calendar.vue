<template>
  <div class="calendar__container">
    <div>
      <h1>Calendar</h1>
      <div class="grid grid--calendar">
        <div v-for="day in fullDayList" @click="openDateModal" :key="day.number" class="date__container">
          <p class="date__header">
            <time class="date__time">
              <span class="date__day-number">{{ day.dayNumber }}.{{ day.month }}.</span>
              <span class="date__day-name">{{ day.dayName }}</span>
            </time>
          </p>
        </div>
      </div>
    </div>
    <DateModal v-show="isDayModalOpen"/>
  </div>
</template>

<script>
import DateModal from '@/components/DateModal.vue';

export default {
  components: { DateModal },
  data() {
    return {
      currentDate: null,
      fullDayList: null,
      isDayModalOpen: false
    }
  },
  methods: {
    listDaysInMonth(month, year) {
      const date = new Date(year, month, 1);
      const days = [];
      let dayNumber = 1;
      while (date.getMonth() === month) {
        const day = new Date(date);
        const dayObject = {
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
  },
  mounted() {
    const today = new Date();
    this.currentDate = {
      currentDay: today.getDate(),
      month: today.getMonth(),
      year: today.getFullYear()
    }

    this.fullDayList = this.listDaysInMonth(this.currentDate.month, this.currentDate.year);
  }
}
</script>
