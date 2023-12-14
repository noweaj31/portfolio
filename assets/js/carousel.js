"use strict";

const slider = tns({
  container: ".about-wrap .img-list",
  controls: false,
  navContainer: ".img-slider-nav .nav-list",
  navAsThumbnails: true,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: true,
  mode: "gallery",
  speed: 500,
});
