"use strict";

const goToTopBtn = document.querySelector(".go-to-top-btn");

document.addEventListener("scroll", () => {
  if (window.scrollY === 0) goToTopBtn.style.opacity = "0";
  if (window.scrollY === 0) goToTopBtn.style.display = "none";
  if (window.scrollY > 50) goToTopBtn.style.opacity = "1";
  if (window.scrollY > 50) goToTopBtn.style.display = "flex";
});

function goToTop() {
  window.scrollTo({
    top: "0",
    behavior: "smooth",
  });
}

goToTopBtn.addEventListener("click", goToTop);
