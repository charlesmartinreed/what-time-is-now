// clock hand values
const secondHand = document.querySelector("[data-second-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const hourHand = document.querySelector("[data-hour-hand]");

const hours = document.querySelectorAll(".clock-number");
const flavorText = document.querySelector(".daily-text");

const setClock = () => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  flavorText.textContent = setDay(currentDay);

  const secondsRatio = currentDate.getSeconds() / 60;
  //   using seconds to make the minute/hour hand slide gradually

  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;

  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  //   update the UI
  hours.forEach(hour => {
    // console.log(currentDate.getHours());
    if (
      hour.textContent === String(currentDate.getHours()) ||
      hour.textContent === String(currentDate.getHours() - 12)
    ) {
      //   hour.classList.add("currentHour");
      hour.style.setProperty("color", "midnightBlue");
      hour.style.setProperty("font-size", "2rem");
    } else {
      // fix glitch where previously updated hour didn't revert to normal styling
      hour.style.setProperty("color", "black");
    }
  });

  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
};

const setDay = dayValue => {
  switch (dayValue) {
    case 0:
      return "Sunday! Take a nice drive and try not to think about tomorrow!";
    case 1:
      return "Monday is where hope and aspiration goes to die.";
    case 2:
      return "In Latin America, Tuesday is known as the Day of the Dead (Inside)";
    case 3:
      return "They call it hump day, but I do my best under the cover of darkness, actually.";
    case 4:
      return "What even is the point of Thursday, exactly?";
    case 5:
      return "It's Friday and you ain't got shit to do... because your paycheck is already gone.";
    case 6:
      return "It's Saturday... time to shake off that hangover!";
    default:
      return "Oh god, another JavaScript clock...";
  }
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
