"use strict";

const about = document.querySelector(".about-wrap .about");
const profile = document.querySelector(".about-wrap .profile");
const aboutText = document.querySelector(".about-wrap .about-text");

const options = { root: null, threshold: 0.3, rootMargin: "0px 0px" };
const test = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.1) {
      about.setAttribute("data-ani-fade-in", "play");
      profile.setAttribute("data-ani-fade-in", "play");
      aboutText.setAttribute("data-ani-fade-in", "play");
    }
  });
}, options);

test.observe(about);
test.observe(profile);
test.observe(aboutText);
