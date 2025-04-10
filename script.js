let initialTime = 0;
let timeover= 0;
let timerInterval;
const display = document.getElementById("display");
const laps = document.getElementById("laps");

function Time(time) {
  const hrs = String(Math.floor(time / 3600000)).padStart(2, "0");
  const mins = String(Math.floor((time % 3600000) / 60000)).padStart(2, "0");
  const secs = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
  const ms = String(Math.floor((time % 1000) / 10)).padStart(2, "0"); 
  return `${hrs}:${mins}:${secs}:${ms}`;
}
function startwatch() {
  initialTime = Date.now() - timeover;
    timerInterval = setInterval(() => {
      timeover = Date.now() - initialTime;
      display.textContent = Time(timeover);
    }, 10); 
  }
  
  function pausewatch() {
    clearInterval(timerInterval);
  }
  
  function resetwatch() {
    clearInterval(timerInterval);
    display.textContent = "00:00:00:00";
    timeover = 0;
    laps.innerHTML = "";
  }

  function Lap() {
    if (timeover === 0) return;
    const lapTime = Time(timeover);
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${laps.children.length + 1}: ${lapTime}`;
    laps.appendChild(lapItem);
  }
  
  document.getElementById("start").addEventListener("click", startwatch);
  document.getElementById("pause").addEventListener("click", pausewatch);
  document.getElementById("reset").addEventListener("click", resetwatch);
  document.getElementById("lap").addEventListener("click", Lap);
  