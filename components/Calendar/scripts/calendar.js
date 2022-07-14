const calendar = document.querySelector('#calendar');

/* eslint-disable */
// get a day
const today = new Date();

// set the hours in a day
// it's always 24

// set the divider line where you are in the day
const calendarHeight = calendar.clientHeight;
console.log(calendarHeight);
let currentHour = today.getHours();
let currentMinutes = today.getMinutes();
let minutesPercentage = currentMinutes / 60;

let dividerLine = calendar.querySelector('.calendar__divider-line');

dividerLine.style.bottom = `${calendarHeight - currentHour * 30 - minutesPercentage * 30}px`;
/* eslint-enable */
