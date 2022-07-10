<template>
  <fieldset for="calendarLayoutSelector">
    <label for="selectDay">
      <input type="radio" id="selectDay" name="calendarLayoutSelector" class="sr-only">
      <span class="calendar-selector__name">Dan</span>
    </label>
    <label for="selectWeek">
      <input type="radio" id="selectWeek" name="calendarLayoutSelector" class="sr-only">
      <span class="calendar-selector__name">Tjedan</span>
    </label>
    <label for="selectMonth">
      <input type="radio" id="selectMonth" name="calendarLayoutSelector" class="sr-only">
      <span class="calendar-selector__name">Mjesec</span>
    </label>
  </fieldset>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>
