const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const dateConverter = (timestamp) => {
  timestamp = timestamp * 1000;
  const date = new Date(timestamp);
  let day = weekday[date.getDay()];
  let dayMonth = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let time = hour + ":" + minute;
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (hour > 12) {
    hour = hour - 12;
    time = hour + ":" + minute + " pm";
  } else if (hour === 12) {
    time = hour + ":" + minute + " pm";
  } else if (hour === 0) {
    hour = hour + 12;
    time = hour + ":" + minute + " am";
  } else {
    time = hour + ":" + minute + " am";
  }
  return [time, day, dayMonth];
};
