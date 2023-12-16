"use strict";

const gnbBtn = document.querySelector(".gnb-btn");
const sideMenuWrap = document.querySelector(".side-menu-wrap");
const closeBtn = document.querySelector(".side-menu-wrap .close-btn");
const sideMenuBtns = document.querySelectorAll(".side-menu-area span");

gnbBtn.addEventListener("click", () => {
  sideMenuWrap.classList.add("is-active");
});

closeBtn.addEventListener("click", () => {
  sideMenuWrap.classList.remove("is-active");
});

sideMenuBtns.forEach((button) => {
  button.addEventListener("click", () => {
    sideMenuWrap.classList.remove("is-active");
  });
});
