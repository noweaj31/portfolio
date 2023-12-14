"use strict";

const gnbBtn = document.querySelector(".gnb-btn");
const sideMenuWrap = document.querySelector(".side-menu-wrap");
const closeBtn = document.querySelector(".side-menu-wrap .close-btn");

gnbBtn.addEventListener("click", () => {
  sideMenuWrap.classList.add("is-active");
});

closeBtn.addEventListener("click", () => {
  sideMenuWrap.classList.remove("is-active");
});
