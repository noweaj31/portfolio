"use strict";

const introBottomWrap = document.querySelector(".intro-bottom-wrap");

const options = { root: null, threshold: 0.3, rootMargin: "0px 0px" };

const test = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.2) {
      introBottomWrap.setAttribute("data-ani-fade-in", "play");
    }
  });
}, options);

test.observe(introBottomWrap);
