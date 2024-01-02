"use strict";
// const Target = document.getElementById("clock");
// const now = new Date();

// const year = now.getFullYear(".year");
// const month = now.getMonth(".month") + 1;
// const date = now.getDate(".date");
// const hours = now.getHours(".hours");
// const minutes = now.getMinutes(".minutes");
// const seconds = now.getSeconds(".seconds");

// console.log(`${year}년 ${month}월 ${date}일 ${hours}:${minutes}`);

const Target = document.getElementById("clock");
function clock() {
  const time = new Date();

  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  Target.innerText =
    `${month + 1}월 ${date}일 ${week[day]}요일 ` +
    `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
}
clock();
setInterval(clock, 1000); // 1초마다 실행
