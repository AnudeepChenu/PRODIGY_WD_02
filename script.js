let startTime = 0;
let elapsedTime = 0;
let timerInterval;
const display = document.getElementById("display");
const laps = document.getElementById("laps");

function timeToString(time) {
  const hrs = String(Math.floor(time / 3600000)).padStart(2, "0");
  const mins = String(Math.floor((time % 3600000) / 60000)).padStart(2, "0");
  const secs = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
  const ms = String(Math.floor((time % 1000) / 10)).padStart(2, "0"); // get hundredths
  return `${hrs}:${mins}:${secs}:${ms}`;
}
function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      display.textContent = timeToString(elapsedTime);
    }, 10); 
  }
  
  function pauseTimer() {
    clearInterval(timerInterval);
  }
  
  function resetTimer() {
    clearInterval(timerInterval);
    display.textContent = "00:00:00:00";
    elapsedTime = 0;
    laps.innerHTML = "";
  }