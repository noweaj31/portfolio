"use strict";

const header = document.querySelector(".head-wrap");
const scrollY = window.scrollY;

document.addEventListener("scroll", () => {
  if (window.scrollY === 0) header.style.top = "0";
  if (window.scrollY > 50) header.style.top = "-120px";
});
