// app.js

// Function to parse time in HH:MM format to minutes
function parseTime(time) {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

// Function to calculate the difference in minutes
function calculateTimeDifference(clockTimes, grandClockTime) {
  const grandClockMinutes = parseTime(grandClockTime);
  return clockTimes.map(
    (clockTime) => parseTime(clockTime) - grandClockMinutes
  );
}

// Clock times around town
const clockTimes = ["14:45", "15:05", "15:00", "14:40"];
const grandClockTime = "15:00";

// Calculate the time differences
const timeDifferences = calculateTimeDifference(clockTimes, grandClockTime);

// Output the time differences
console.log(timeDifferences);
