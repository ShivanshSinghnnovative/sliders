let currentSlideIndex = 0,dotsIndex = 0,valueChecker = 0;
let sliders, dots, slideInterval;
sliders = document.querySelectorAll(".images");
dots = document.querySelectorAll(".ek");
console.log(dots);
console.log(sliders);
sliders.forEach((images, index) => {
  images.style.left = `${index * 100}%`;
});
// console.log(currentSlideIndex);

startSlideInterval();
function startSlideInterval() {
  slideInterval = setInterval(goToNextSlide, 5000);
  if (currentSlideIndex === 6) {
    valueChecker = 1;
    currentSlideIndex = -1;
  }
}

function stopSlideInterval() {
  clearInterval(slideInterval);
}

if (currentSlideIndex === 0) {
  document.getElementById("0").style.backgroundColor = "white";
  document.getElementById("prev").setAttribute("disabled", "");
}

function slideImages() {
  sliders.forEach((slide) => {
    slide.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  });

  for (let i = 0; i < 7; i++) {
    if (i === currentSlideIndex) {
      document.getElementById(`${i}`).style.backgroundColor = "white";
    } else {
      document.getElementById(`${i}`).style.backgroundColor = "grey";
    }
  }
}

function currentSlide(value, id) {
  currentSlideIndex = value;
  let x = id;
  document.getElementById("prev").removeAttribute("disabled", "");
  if (currentSlideIndex === 0) {
    document.getElementById("0").style.backgroundColor = "white";
    document.getElementById("prev").setAttribute("disabled", "");
  }
  slideImages();
  if (currentSlideIndex === 6) {
    document.getElementById("next").setAttribute("disabled", "");
  } else {
    document.getElementById("next").removeAttribute("disabled", "");
  }
  // document.getElementById(`${x}`).style.backgroundColor = "white";

  stopSlideInterval();
  startSlideInterval();
}

function goToPreviousSlide() {
  stopSlideInterval();
  if (currentSlideIndex === -1 && valueChecker === 1) {
    currentSlideIndex = 6;
  }
  if (currentSlideIndex >= 0) {
    currentSlideIndex--;
    document.getElementById("next").removeAttribute("disabled", "");
    console.log(currentSlideIndex);
    if (currentSlideIndex === 0) {
      document.getElementById("prev").setAttribute("disabled", "");
    }
    valueChecker = 0;
    slideImages();
    startSlideInterval();
  }
}

function  goToNextSlide() {
  stopSlideInterval();
  document.getElementById("prev").removeAttribute("disabled", "");
  if (currentSlideIndex < 6) {
    currentSlideIndex++;

    if (currentSlideIndex === 6 && valueChecker == 0) {
      document.getElementById("next").setAttribute("disabled", "");
      valueChecker = 0;
      console.log("ndf");
    } else if (currentSlideIndex === 0 && valueChecker == 1) {
      document.getElementById("next").removeAttribute("disabled", "");
      valueChecker = 0;
      document.getElementById("prev").setAttribute("disabled", "");
      console.log("ndfk");
    }
    slideImages();
    startSlideInterval();
  }
}
