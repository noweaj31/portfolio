"use strict";

const introAnis = document.querySelectorAll(".intro-bottom-wrap h4");

const introObserver = (introAni) => {
  const options = { root: null, threshold: 0.3, rootMargin: "0px 0px" };
  const test = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
      console.log("Intersection ratio: ", entry.intersectionRatio);
      if (entry.intersectionRatio > 0.1) {
        introAni.setAttribute("data-ani-fade-in", "play");
      }
    });
  }, options);
  test.observe(introAni);
};
introAnis.forEach((introAni) => {
  introObserver(introAni);
});
