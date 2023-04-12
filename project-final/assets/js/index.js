const navbar = document.querySelector(".navbar_container");
const navBarToogle = document.querySelector(".navbar-toggler");
const navBarToogleIcon = document.querySelector(".navbar-toggler-icon");
const aboutUs = document.querySelector(".container-fluid.about_us");
const navBarLink = document.querySelectorAll(".nav-item a");
const btnNav = document.querySelector(".navbar .container-fluid button span");
const cart = document.querySelector(".bi-cart4");

const URL_PRODUCT = `https://api-product-g1bk.vercel.app/product`;
var product;

const getProduct = async () => {
  const res = await fetch(URL_PRODUCT);
  const data = await res.json();
  product = data;
};

// navbar
const scrollNav = () => {
  let aboutTop = aboutUs.getBoundingClientRect().top;
  if (aboutTop <= 0) {
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

// swiper best seller

var TrandingSlider = new Swiper(".swiper1", {
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
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 2,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});

TrandingSlider.on("click", function () {
  // Get the clicked slide index
  const clickedIndex = TrandingSlider.clickedIndex;

  // Animate the slide to the center
  TrandingSlider.slideTo(clickedIndex);
});

getProduct();

// search
const result = document.querySelector("#search .sreach_result");
const search = document.querySelector("#search input");

let countStar = (star) => {
  let resultStart = "";
  let full;
  let half;
  let nostar;
  if (star % 1 == 0) {
    full = star;
    nostar = 5 - star;
    half = 0;
  } else {
    full = star - 0.5;
    nostar = 5 - star - 0.5;
    half = 1;
  }
  for (let i = 0; i < full; i++) {
    resultStart += `<i class="bi bi-star-fill"></i>`;
  }
  resultStart += half ? `<i class="bi bi-star-half"></i>` : "";
  for (let i = 0; i < nostar; i++) {
    resultStart += `<i class="bi bi-star"></i>`;
  }
  return resultStart;
};

let closesearch = () => {
  result.innerHTML = "";
};

let searchProgress = () => {
  result.innerHTML = "";
  for (let i = 0; i < product.length; i++) {
    if (product[i].name.toLowerCase().includes(search.value) && search.value) {
      result.innerHTML += `<a href="https://omg2468.github.io/web31/project-final/detail_item.html?id=${
        product[i].id
      }" class = "no-decoration"><div class="box_result d-flex">
      <div class="result_img">
                <img src="./assets${product[i].image}" alt="${
        product[i].name
      }"/>
              </div>
              <div class="result_text">
                <div class="name_result"><h4>${product[i].name}</h4></div>
                <div class="price_result">${product[i].price.toLocaleString(
                  "it-IT",
                  { style: "currency", currency: "VND" }
                )} </div>
                <div class="description_result">
                  ${countStar(product[i].star)}
                </div>
              </div>
            </div>
          </div></a>`;
    }
  }
};

  search.addEventListener("focusout", closesearch);
  search.addEventListener("focusin", searchProgress);
  search.addEventListener("keyup", searchProgress);

