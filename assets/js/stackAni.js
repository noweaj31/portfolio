"use strict";

const stackIcons = document.querySelectorAll(".icon-animation .icon-bg");
const lisence = document.querySelector(".lisence h4");
const lisenceList = document.querySelectorAll(".lisence .lisence-item");
const career = document.querySelector(".career h4");
const careerList = document.querySelectorAll(".career .career-item");
const stack = document.querySelector(".stack h4");
const stackList = document.querySelectorAll(".stack .stack-item");

const stackIconsObserver = (stackIcon) => {
  const options = { root: null, threshold: 0.3, rootMargin: "0px 0px" };
  const test = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
      console.log("Intersection ratio: ", entry.intersectionRatio);
      if (entry.intersectionRatio > 0.1) {
        stackIcon.setAttribute("data-ani-fade-in", "play");
      }
    });
  }, options);
  test.observe(stackIcon);
};
stackIcons.forEach((stackIcon) => {
  stackIconsObserver(stackIcon);
});

const lisenceListObserver = (lisence) => {
  const options = { root: null, threshold: 0.3, rootMargin: "0px 0px" };
  const test = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
      console.log("Intersection ratio: ", entry.intersectionRatio);
      if (entry.intersectionRatio > 0.1) {
        lisence.setAttribute("data-ani-fade-in", "play");
      }
    });
  }, options);
  test.observe(lisence);
};
lisenceList.forEach((lisence) => {
  lisenceListObserver(lisence);
});

const lisenceTitle = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.1) {
      lisence.setAttribute("data-ani-fade-in", "play");
    }
  });
}, options);

lisenceTitle.observe(lisence);

const careerListObserver = (career) => {
  const options = { root: null, threshold: 0.3, rootMargin: "0px 0px" };
  const test = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
      console.log("Intersection ratio: ", entry.intersectionRatio);
      if (entry.intersectionRatio > 0.1) {
        career.setAttribute("data-ani-fade-in", "play");
      }
    });
  }, options);
  test.observe(career);
};
careerList.forEach((career) => {
  lisenceListObserver(career);
});

const careerTitle = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.1) {
      career.setAttribute("data-ani-fade-in", "play");
    }
  });
}, options);

careerTitle.observe(career);

const stackListObserver = (stack) => {
  const options = { root: null, threshold: 0.3, rootMargin: "0px 0px" };
  const test = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
      console.log("Intersection ratio: ", entry.intersectionRatio);
      if (entry.intersectionRatio > 0.1) {
        stack.setAttribute("data-ani-fade-in", "play");
      }
    });
  }, options);
  test.observe(stack);
};
stackList.forEach((stack) => {
  lisenceListObserver(stack);
});

const stackTitle = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.1) {
      stack.setAttribute("data-ani-fade-in", "play");
    }
  });
}, options);

stackTitle.observe(stack);
