"use strict";

const arrowDownBtn = document.querySelector(".intro-wrap .arrow-btn button");

function scrollToAbout() {
  const aboutId = this.parentNode.getAttribute("aria-labelledby");
  const aboutPanel = document.querySelector(`#${aboutId}`);

  const scrollAmount = aboutPanel.getBoundingClientRect().top;

  window.scrollBy({
    top: scrollAmount,
    behavior: "smooth",
  });
}

arrowDownBtn.addEventListener("click", scrollToAbout);
