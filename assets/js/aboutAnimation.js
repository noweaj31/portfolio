"use strict";

const about = document.querySelector(".about-area");

const aboutOptions = { root: null, threshold: 0.3, rootMargin: "0px 0px" };

const aboutTest = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.2) {
      about.setAttribute("data-ani-fade-in", "play");
    }
  });
}, aboutOptions);

aboutTest.observe(about);
