console.log(product);
const navbar = document.querySelector(".navbar_container");
const navBarToogle = document.querySelector(".navbar-toggler");
const navBarToogleIcon = document.querySelector(".navbar-toggler-icon");
const background = document.querySelector(".logo_header");
const navBarLink = document.querySelectorAll(".nav-item a");
const btnNav = document.querySelector(".navbar .container-fluid button span");
const cart = document.querySelector(".bi-cart4");
// navbar
const scrollNav = () => {
  let aboutBottom = background.getBoundingClientRect().bottom;
  if (aboutBottom <= 0) {
    navbar.style.backgroundColor = "white";
    navbar.style.color = "black";
    navBarLink.forEach((link) => {
      link.style.color = "black";
    });
    btnNav.style.color = "black";
    cart.style.color = "black";
    navBarToogle.style.borderColor = "black";
    navBarToogleIcon.className = "navbar-toggler-icon black";
  } else {
    navbar.style.backgroundColor = "rgba(119, 124, 106, 0.258)";
    navbar.style.color = "white";
    navBarLink.forEach((link) => {
      link.style.color = "white";
    });
    btnNav.style.color = "white";
    cart.style.color = "white";
    navBarToogle.style.borderColor = "white";
    navBarToogleIcon.className = "navbar-toggler-icon white";
  }
};
window.addEventListener("scroll", scrollNav);
