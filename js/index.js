const minutes = document.querySelector(".min");
const dots = document.querySelector(".dots");
const seconds = document.querySelector(".sec");
const dots2 = document.querySelector(".dots2");
const milliSeconds = document.querySelector(".m-sec");

const btnStart = document.querySelector(".buttons__start");
const btnStop = document.querySelector(".buttons__stop");
const btnReset = document.querySelector(".buttons__reset");
const btnNewLap = document.querySelector(".buttons__new-lap");
const lap = document.querySelector(".lap");
const lapBlock = document.querySelector(".lap__block");

let min = 0;
let sec = 0;
let dot = " : ";
let mSec = 0;
let interval;
let counter = 1;

function start() {
  mSec++;

  minutes.innerHTML = min;
  dots.innerHTML = dot;
  seconds.innerHTML = sec;
  dots2.innerHTML = dot;
  milliSeconds.innerHTML = mSec;

  if (mSec > 99) {
    mSec = 0;
    sec += 1;
  }

  if (mSec < 10) {
    milliSeconds.innerHTML = "0" + mSec;
  }

  if (sec > 59) {
    sec = 0;
    min += 1;
  }

  if (sec < 10) {
    seconds.innerHTML = "0" + sec;
  }

  if (min < 10) {
    minutes.innerHTML = "0" + min;
  }
}

btnStop.style.display = "none";
btnNewLap.style.display = "none";

btnStart.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(start, 10);
  btnStart.style.display = "none";
  btnStop.style.display = "flex";
  btnNewLap.style.display = "flex";
  btnReset.style.display = "none";
});

btnStop.addEventListener("click", () => {
  clearInterval(interval);
  btnStart.style.display = "flex";
  btnStop.style.display = "none";
  btnNewLap.style.display = "none";
  btnReset.style.display = "flex";
});

btnReset.addEventListener("click", () => {
  clearInterval(interval);
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
  milliSeconds.innerHTML = "00";
  min = 0;
  sec = 0;
  mSec = 0;
  lapBlock.innerHTML = "";
  counter = 1;
});

btnNewLap.addEventListener("click", () => {
  clearInterval(interval);
  const lapResults = document.createElement("div");
  const result = document.createElement("div");
  const line = document.createElement("div");

  line.classList.add("line");
  lapResults.classList.add("lap-results");

  if (mSec < 10) {
    mSec = "0" + mSec;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }

  lapResults.innerHTML = `Lap ${counter++}`;
  result.innerHTML = `${min}:${sec}:${mSec}`;

  lapBlock.append(line);
  lapBlock.append(lapResults);
  lapResults.append(result);
  min = 0;
  sec = 0;
  mSec = 0;
  interval = setInterval(start, 10);
});
