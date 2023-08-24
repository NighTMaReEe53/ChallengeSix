// theDate
let countDownData = new Date("Dec 31, 2023, 23:59:59").getTime();
let theDuration = 1000;


let theInterval = setInterval(() => {
  // Get Date Now
  let theDate = new Date();
  // Get difference From Date Now And countDownDate
  let theDateDiff = countDownData - theDate;

  let hours = Math.floor(theDateDiff / (1000 * 60 * 60 * 24));
  let days = Math.floor(
    (theDateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((theDateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((theDateDiff % (1000 * 60)) / 1000);

  // Check
  hours = hours < 10 ? `0${hours}` : hours;
  days = days < 10 ? `0${days}` : days;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  document.querySelector(".time-day").innerHTML = days;
  document.querySelector(".time-hour").innerHTML = hours;
  document.querySelector(".time-minute").innerHTML = minutes;
  document.querySelector(".time-second").innerHTML = seconds;
  if (theDateDiff < 0) {
    clearInterval(theInterval);
  }
}, theDuration);