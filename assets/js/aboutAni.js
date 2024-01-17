"use strict";

const about = document.querySelector(".about-wrap .about");
const profile = document.querySelector(".about-wrap .profile");
const aboutText = document.querySelector(".about-wrap .about-text");
const carousel = document.querySelector(".img-slider-carousel");

const options = { root: null, threshold: 0.3, rootMargin: "0px -100px" };
// const aboutWrap = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
//     console.log("Intersection ratio: ", entry.intersectionRatio);
//     if (entry.intersectionRatio > 0.1) {
//       about.setAttribute("data-ani-fade-in", "play");
//     }
//   });
// }, options);

// aboutWrap.observe(about);

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

aboutObserver.observe(about);

// const profileWrap = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
//     console.log("Intersection ratio: ", entry.intersectionRatio);
//     if (entry.intersectionRatio > 0.1) {
//       profile.setAttribute("data-ani-fade-in", "play");
//     }
//   });
// }, options);

// profileWrap.observe(profile);

const aboutTextObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

aboutTextObserver.observe(aboutText);

// const aboutTextWrap = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
//     console.log("Intersection ratio: ", entry.intersectionRatio);
//     if (entry.intersectionRatio > 0.1) {
//       aboutText.setAttribute("data-ani-fade-in", "play");
//     }
//   });
// }, options);

// aboutTextWrap.observe(aboutText);
const profileObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

profileObserver.observe(profile);
// const carouselWrap = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
//     console.log("Intersection ratio: ", entry.intersectionRatio);
//     if (entry.intersectionRatio > 0.1) {
//       carousel.setAttribute("data-ani-fade-in", "play");
//     }
//   });
// }, options);

// carouselWrap.observe(carousel);

const carouselObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

carouselObserver.observe(carousel);
