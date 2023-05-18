let sliderInner = document.querySelector(".slider--inner");
let images = document.querySelectorAll(".slider--image");
let sliderButtons = document.querySelectorAll(".slider--button");
let index = 0;

setInterval(function () {
  if (index >= images.length) {
    index = 0;
    sliderInner.style.transform = "translateX('0%')";
  }

  const persentage = index * 100;

  sliderInner.style.transform = "translateX(-" + persentage + "%)";
  index++;

  sliderButtons.forEach((button) => {
    button.className = "slider--button";
  });
  sliderButtons[index -1].classList = "slider--button slider--button__active";
}, 2000);
