<template>
  <fieldset for="calendarLayoutSelector">
    <label v-for="selector in calendarSelectors" :for="selector.id" :key="selector.id">
      <input
        @click="emitChangeCalendarLayout"
        type="radio"
        :checked="selector.default"
        :id="selector.id"
        name="calendarLayoutSelector"
        class="sr-only"
      >
      <span class="calendar-selector__name">{{ selector.name }}</span>
    </label>
  </fieldset>
</template>

<script>
export default {
  data() {
    return {
      calendarSelectors: [
        {
          id: 'selectDay',
          name: 'Day',
          default: false
        },
        {
          id: 'selectWeek',
          name: 'Week',
          default: true
        },
        {
          id: 'selectMonth',
          name: 'Month',
          default: false
        }
      ]
    }
  },
  methods: {
    emitChangeCalendarLayout(event) {
      this.$emit('changeCalendarLayout', event.target.id)
    }
  }
}
</script>
