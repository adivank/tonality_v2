<template>
  <form class="form">
    <fieldset>
      <legend class="form__legend">Time details</legend>

      <div class="form__group">
        <label class="form__label" for="startDate">From:</label>
        <div class="form__group--half">
          <input
            class="form__control form__control--half"
            type="date"
            id="startDate"
            name="startDate"
          >
          <input
            class="form__control form__control--half"
            type="time"
            id="startTime"
            name="startTime"
            aria-label="from hours and minutes"
          >
        </div>
      </div>

      <div class="form__group">
        <label class="form__label" for="endDate">To:</label>
        <div class="form__group--half">
          <input
            class="form__control"
            type="date"
            id="endDate"
            name="endDate"
          >
          <input
            class="form__control"
            type="time"
            id="endTime"
            name="endTime"
            aria-label="to hours and minutes"
          >
        </div>
      </div>

      <label class="form__label checkbox" for="private">
        <input type="checkbox" name="private" id="private">
        Make the even private
      </label>
    </fieldset>

    <fieldset>
      <legend class="form__legend">Person details</legend>
      <div class="form__group">
        <label class="form__label" for="patientName">Ime pacijenta:</label>
        <input class="form__control" type="text" name="patientName" id="patientName">
      </div>

      <div class="form__group">
        <label class="form__label" for="doctorName">Ime doktora:</label>
        <input class="form__control" type="text" name="doctorName" id="doctorName">
      </div>
    </fieldset>

    <fieldset>
      <legend class="form__legend">Additional Info</legend>
      <label class="form__label" for="additionalMessage">
        <textarea
          class="form__control disable-resize"
          name="additionalMessage"
          id="additionalMessage"
        ></textarea>
      </label>
    </fieldset>
  </form>
</template>

<script></script>
