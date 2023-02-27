const navbar = document.querySelector(".navbar.navbar-expand-lg");
const aboutUs = document.querySelector(".container-fluid.about_us");
// navbar
const scrollNav = () => {
  let aboutTop = aboutUs.getBoundingClientRect().top;
  if (aboutTop <= 0) {
    navbar.style.backgroundColor = "rgb(119, 124, 106)";
  } else navbar.style.backgroundColor = "rgba(119, 124, 106, 0.258)";
};
window.addEventListener("scroll", scrollNav);

// swiper

var TrandingSlider = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  loop: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },
    992: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 2.5,
    },
  },
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 200,
    modifier: 2,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
