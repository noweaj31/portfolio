"use strict";

const hello = document.querySelector(".contact-header h1");
const contactBtn = document.querySelector(".contact-form-btn-wrap");
const greeting = document.querySelector(".greeting-text");
const mail = document.querySelector(".contact-main-wrap a");
const lastText = document.querySelector(".contact-main-wrap .last-text");

const helloWrap = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.1) {
      hello.setAttribute("data-ani-fade-in", "play");
    }
  });
}, options);

helloWrap.observe(hello);

const contactBtnWrap = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.1) {
      contactBtn.setAttribute("data-ani-fade-in", "play");
    }
  });
}, options);

contactBtnWrap.observe(contactBtn);

const greetingWrap = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.1) {
      greeting.setAttribute("data-ani-fade-in", "play");
    }
  });
}, options);

greetingWrap.observe(greeting);

const mailWrap = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.1) {
      mail.setAttribute("data-ani-fade-in", "play");
    }
  });
}, options);

mailWrap.observe(mail);

const lastTextWrap = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting); //화면에 보이면 true, 아니면 false
    console.log("Intersection ratio: ", entry.intersectionRatio);
    if (entry.intersectionRatio > 0.1) {
      lastText.setAttribute("data-ani-fade-in", "play");
    }
  });
}, options);

lastTextWrap.observe(lastText);
