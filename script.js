"use strict";

//VARIABLES (SOME NOT USED)
const clickersList = document.querySelectorAll(".clicker");
const changersList = document.querySelectorAll(".changer");
const therapyLink = document.querySelector(".therapy--link");
const therapyLinks = document.querySelectorAll(".therapy--link");
const topHead = document.querySelector(".top--head");
const acChanger = document.querySelector(".active--changer");
const clickerTwo = document.querySelector(".clicker--two");
const justTherapy = document.querySelector(".therapy");
const therapyTitle = document.querySelector(".ter--title");
const aboutTherapy = document.querySelector(".abt--therapy");
const abtTherapyLink = document.querySelector(".abt__therapy--link");
const abtTherapyLinks = document.querySelectorAll(".abt__therapy--link");
const topLink = document.querySelectorAll(".scroller--link");
const contact = document.querySelector(".contact");
const closeModal = document.getElementById("closeModal");
const main = document.querySelector("#main");
const welcomePic = document.querySelector(".welcome--pic");
const starter = document.querySelector(".starter");
const menuButton = document.querySelector(".container");
const menu = document.querySelector(".top--section__right");
const arrow = document.querySelector(".arrow");
const aboutTarget = document.querySelector(".abtMe");
const aboutBtn = document.querySelector(".aboutMe");
const galeria = document.querySelector(".gallery");
const slider = document.querySelector(".splide");
const facts = document.querySelector(".Interesting--facts");
const factsTarget = document.querySelector(".facts--div");
const factsCloser = document.querySelector(".bars--container");

window.addEventListener("load", function () {
  document.querySelector("body").style.opacity = "1";
});

//TABBED
clickersList.forEach((clicker) => {
  clicker.addEventListener("click", function (event) {
    event.preventDefault();
    clickersList.forEach((clicker) =>
      clicker.classList.remove("active--clicker")
    );
    changersList.forEach((changer) => {
      changer.classList.remove("active--changer");
      if (
        Number(changer.dataset.number) ===
        [...clickersList].indexOf(event.target) + 1
      ) {
        changer.classList.add("active--changer");
        clicker.classList.add("active--clicker");
      }
    });
  });
});

//INITIALIZE SLIDER (I USED SPLIDE.JS BECAUSE I NEEDED IT QUICKLY, SO I DIDN'T WANT TO WASTE TIME ON MAKING MY SLIDER REPOSNSIVE)
document.addEventListener("DOMContentLoaded", function () {
  var splide = new Splide(".splide");
  splide.mount();
});

//SCROLLING FUNCTION(ONLY ESTHETIC PURPOSES)
const scrolling = function (target) {
  target.scrollIntoView({ behavior: "smooth" });
  console.log(event.target);
};

//YEAR AUTO UPDATE
function autoUpdateYear() {
  const year = document.querySelector(".year");
  const rok = new Date();
  year.textContent = ` ${rok.getFullYear()}`;
}
autoUpdateYear();

//STICKY NAV
let observer = new IntersectionObserver(
  function (entries) {
    const [entry] = [...entries];
    console.log(entry);
    if (!entry.isIntersecting) topHead.classList.add("sticky");
    else topHead.classList.remove("sticky");
  },
  { rootMargin: "-30px" }
);
observer.observe(starter);

//SCROLLING
therapyLink.addEventListener("click", function (event) {
  event.preventDefault();
  scrolling(aboutTherapy);
});

therapyTitle.addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

galeria.addEventListener("click", function (event) {
  event.preventDefault();
  scrolling(slider);
});

aboutBtn.addEventListener("click", function (event) {
  event.preventDefault();
  scrolling(aboutTarget);
});

//MODAL WINDOW (FOR CONTACT)
contact.addEventListener("click", function (event) {
  document
    .getElementById("myModal")
    .classList.remove("is-hidden", "is-visuallyHidden");
  main.classList.add("is-blurred");
});
closeModal.addEventListener("click", function (event) {
  event.preventDefault();
  document
    .querySelector(".Modal")
    .classList.add("is-hidden", "is-visuallyHidden");
  main.classList.remove("is-blurred");
});
arrow.addEventListener("click", function (event) {
  event.preventDefault();
  scrolling(justTherapy);
});

//HIDDEN MENU
function myFunction(x) {
  x.classList.toggle("change");
}

menuButton.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.toggle("hidden--menu");
});

//FACTS DIV
facts.addEventListener("click", function (event) {
  event.preventDefault();
  factsTarget.classList.remove("hidden--left");
});

factsCloser.addEventListener("click", function (event) {
  factsTarget.classList.add("hidden--left");
});

//inserting images programmatically
// const sliderComps = document.querySelectorAll('.slider--comp');
// let i = 1;
// sliderComps.forEach(function(comp){
//     let img = document.createElement('img');
//     img.src = `templates/template${i}.jpg`;
//     comp.appendChild(img);
//     i++;
// })

// let currentSliderNumber = 1;
// const maxSliderNumber = sliderComps.length - 1;
// console.log(maxSliderNumber);

// const goToSlide = function(s) {
//     sliderComps.forEach((slide, index) => slide.style.transform = `translateX(${(index - s) * 100}%)`);
// }

// const nextSlide = function(){
//     if(currentSliderNumber == maxSliderNumber) currentSliderNumber = 0
//     else currentSliderNumber++;
//     goToSlide(currentSliderNumber)
// };
// const prevSlide = function(){
//     if (currentSliderNumber == 0) currentSliderNumber = maxSliderNumber
//     else currentSliderNumber--;
//     goToSlide(currentSliderNumber);
// };

// sliderBtnRight.addEventListener('click', nextSlide);
// sliderBtnLeft.addEventListener('click', prevSlide);
