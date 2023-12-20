"use strict";

const contactArrowDownBtn = document.querySelector(
  ".contact-form-btn-wrap .contact-form-btn"
);

function scrollToContact() {
  const contactId = this.parentNode.getAttribute("aria-labelledby");
  const contactPanel = document.querySelector(`#${contactId}`);

  const scrollContactAmount = contactPanel.getBoundingClientRect().top;

  window.scrollBy({
    top: scrollContactAmount,
    behavior: "smooth",
  });
}

contactArrowDownBtn.addEventListener("click", scrollToContact);
