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
import { componentsEB } from '~/components/componentsEB';

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
      ],
      days: null
    }
  },
  methods: {
    emitChangeCalendarLayout(event) {
      if (event.target.id === 'selectWeek') {
        this.days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      } else {
        this.days = ['Mon'];
      }
      componentsEB.$emit('changeCalendarLayout', this.days)
    }
  }
}
</script>
