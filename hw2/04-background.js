const bg = document.getElementById("background");
const btn = document.getElementById("btn");
const userInput = document.getElementById("intervalInput");

let on = true;
let interval = 3;
let intervalID;

const startColorChange = function startColorChangeOnWindowLoad() {
  intervalID = setInterval(changeColor, interval * 1000);
};

const changeColor = function changeBackgroundColorAtInterval() {
  // get a random hexadecimal number
  color = `background-color:#${Math.floor(Math.random() * 16777216).toString(
    16
  )}`;
  bg.setAttribute("style", color);
};

const handleClick = function startStopButtonEventHandler() {
  // swap the state of the button
  if (on) on = false;
  else on = true;
  // start or stop based on the new state of the button
  if (on) {
    btn.setAttribute("class", "btn btn-danger");
    btn.textContent = "Stop";

    interval = userInput.value;
    intervalID = setInterval(changeColor, interval * 1000);
  } else {
    btn.setAttribute("class", "btn btn-primary");
    btn.textContent = "Start";

    clearInterval(intervalID);
  }
};

btn.addEventListener("click", handleClick);
addEventListener("load", startColorChange);
