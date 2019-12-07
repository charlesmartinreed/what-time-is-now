// clock hand values
const secondHand = document.querySelector("[data-second-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const hourHand = document.querySelector("[data-hour-hand]");
const hours = document.querySelectorAll(".clock-number");

const setClock = () => {
  const currentDate = new Date();

  const secondsRatio = currentDate.getSeconds() / 60;
  //   using seconds to make the minute/hour hand slide gradually

  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;

  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  //   update the UI
  hours.forEach(hour => {
    if (hour.textContent === String(currentDate.getHours() - 12)) {
      //   hour.classList.add("currentHour");
      hour.style.setProperty("color", "midnightBlue");
      hour.style.setProperty("font-size", "2rem");
    }
  });

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
};

const setRotation = (element, rotationRatio) => {
  element.style.setProperty("--rotation", rotationRatio * 360);
};

const main = () => {
  setClock();
  setInterval(setClock, 1000);
};

window.addEventListener("DOMContentLoaded", () => {
  main();
});
