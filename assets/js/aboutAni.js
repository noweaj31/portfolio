"use strict";

const about = document.querySelector(".about-wrap .about");
const profile = document.querySelector(".about-wrap .profile");
const aboutText = document.querySelector(".about-wrap .about-text");
const carousel = document.querySelector(".img-slider-carousel");

const options = { root: null, threshold: 0.3, rootMargin: "0px 0px" };
const aboutWrap = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.1) {
      about.setAttribute("data-ani-fade-in", "play");
    }
  });
}, options);

aboutWrap.observe(about);

const profileWrap = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.1) {
      profile.setAttribute("data-ani-fade-in", "play");
    }
  });
}, options);

profileWrap.observe(profile);

const aboutTextWrap = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.1) {
      aboutText.setAttribute("data-ani-fade-in", "play");
    }
  });
}, options);

aboutTextWrap.observe(aboutText);

const carouselWrap = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.1) {
      carousel.setAttribute("data-ani-fade-in", "play");
    }
  });
}, options);

carouselWrap.observe(carousel);
