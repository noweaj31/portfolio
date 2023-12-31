"use strict";

let lastScrollY = 0;
const bottomMenu = document.querySelector(".bottom-wrap");

window.addEventListener("scroll", () => {
  let currentScrollY = window.scrollY;
  if (currentScrollY === 0) {
    bottomMenu.style.bottom = "-70px";
  }
  if (lastScrollY > currentScrollY) {
    bottomMenu.style.bottom = "0";
  }
  if (lastScrollY < currentScrollY) {
    bottomMenu.style.bottom = "-70px";
  }

  lastScrollY = currentScrollY;
});
