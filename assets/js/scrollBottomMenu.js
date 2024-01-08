"use strict";

let lastScrollY = 0;
const bottomMenu = document.querySelector(".bottom-wrap");
console.log(bottomMenu);

window.addEventListener("scroll", () => {
  let currentScrollY = window.scrollY;
  if (lastScrollY >= currentScrollY) {
    bottomMenu.style.bottom = "0";
  }
  if (lastScrollY < currentScrollY) {
    bottomMenu.style.bottom = "-70px";
  }

  lastScrollY = currentScrollY;
});
