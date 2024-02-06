"use strict";

let lastScrollY = 0;

const goToTopArrow = document.querySelector(".go-to-top-btn");

window.addEventListener("scroll", () => {
  let currentScrollY = window.scrollY;
  if (currentScrollY === 0) {
    goToTopArrow.style.bottom = "30px";
  }
  if (lastScrollY > currentScrollY) {
    goToTopArrow.style.bottom = "70px";
  }
  if (lastScrollY < currentScrollY) {
    goToTopArrow.style.bottom = "30px";
  }

  lastScrollY = currentScrollY;
});
