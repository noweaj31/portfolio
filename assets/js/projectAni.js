"use strict";

// const participation = document.querySelector(".project-wrap .info-area h3");
const participationText = document.querySelector(".project-wrap .info-area p");
const netflix = document.querySelector(".netflix");
const ohouse = document.querySelector(".ohouse");
const millet = document.querySelector(".millet");
const iqos = document.querySelector(".iqos");
const tamburins = document.querySelector(".tamburins");

// const participationWrap = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
//     console.log("Intersection ratio: ", entry.intersectionRatio);
//     if (entry.intersectionRatio > 0.1) {
//       participation.setAttribute("data-ani-fade-in", "play");
//     }
//   });
// }, options);

// participationWrap.observe(participation);

const participationTextWrap = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.1) {
      participationText.setAttribute("data-ani-fade-in", "play");
    }
  });
}, options);

participationTextWrap.observe(participationText);

// const netflixWrap = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
//     console.log("Intersection ratio: ", entry.intersectionRatio);
//     if (entry.intersectionRatio > 0.1) {
//       netflix.setAttribute("data-ani-fade-in", "play");
//     }
//   });
// }, options);

// netflixWrap.observe(netflix);
const netflixObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

netflixObserver.observe(netflix);

const ohouseObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

ohouseObserver.observe(ohouse);

// const ohouseWrap = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
//     console.log("Intersection ratio: ", entry.intersectionRatio);
//     if (entry.intersectionRatio > 0.1) {
//       ohouse.setAttribute("data-ani-fade-in", "play");
//     }
//   });
// }, options);

// ohouseWrap.observe(ohouse);

// const milletWrap = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
//     console.log("Intersection ratio: ", entry.intersectionRatio);
//     if (entry.intersectionRatio > 0.1) {
//       millet.setAttribute("data-ani-fade-in", "play");
//     }
//   });
// }, options);

// milletWrap.observe(millet);

const milletObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

milletObserver.observe(millet);

// const iqosWrap = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
//     console.log("Intersection ratio: ", entry.intersectionRatio);
//     if (entry.intersectionRatio > 0.1) {
//       iqos.setAttribute("data-ani-fade-in", "play");
//     }
//   });
// }, options);

// iqosWrap.observe(iqos);

const iqosObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

iqosObserver.observe(iqos);

// const tamburinsWrap = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
//     console.log("Intersection ratio: ", entry.intersectionRatio);
//     if (entry.intersectionRatio > 0.1) {
//       tamburins.setAttribute("data-ani-fade-in", "play");
//     }
//   });
// }, options);

// tamburinsWrap.observe(tamburins);

const tamburinsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  {
    threshold: 0.3,
  }
);

tamburinsObserver.observe(tamburins);
