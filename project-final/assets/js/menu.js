const URL = `https://api-product-g1bk.vercel.app/product`;
var product;
var filterArr;
const spin = document.querySelector(".spin-loading");

const getProduct = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  product = data;
  filterArr = product.slice();
  spin.style.display = "none";
  renderUI(0, 12);
};

// pagination
const pageOne = document.querySelector("#one");
const pageTwo = document.querySelector("#two");
const nextBtn = document.querySelector("#next");
const previousBtn = document.querySelector("#previous");
const allLink = document.querySelectorAll(".pagination li a");

// filter Icon
const filterIcon = document.querySelector(".header_filter");
const accordion = document.querySelector(".accordion");
filterIcon.addEventListener("click", function () {
  cancel.style.display = cancel.style.display == "none" ? "block" : "none";
  accordion.style.display =
    accordion.style.display == "none" ? "block" : "none";
});

//filter status
const apply = document.querySelector(".filter_button button");
const cancel = document.querySelector(".filter_icon button");
window.onload = () => {
  if (screen.width < 980) {
    cancel.style.display = "none";
    accordion.style.display = "none";
  }
};

//when click input , 2 button can click
const allCheckbox = document.querySelectorAll(".accordion-body input");
for (let i = 0; i < allCheckbox.length; i++) {
  allCheckbox[i].addEventListener("click", function () {
    cancel.className = "btn btn-danger";
    apply.className = "btn btn-danger";
  });
}
//event when click cancel
cancel.addEventListener("click", function () {
  cancel.className = "btn btn-danger disabled";
  apply.className = "btn btn-danger disabled";
  for (let i = 0; i < allCheckbox.length; i++) {
    allCheckbox[i].checked = false;
  }
  for (let i = 0; i < product.length; i++) {
    product[i].display = true;
  }
  filterArr = product.slice();
  filterOption.value = "default";
  pageTwo.style.display = "block";
  nextBtn.className = "page-link";
  if (pageOne.className == "page-link active") renderUI(0, 12);
  else renderUI(13, 20);
});

// main array product will render

/* event when click apply

 */
// event apply

const filterOption = document.querySelector("#price");

let filterChange = () => {
  let inputsort = [...document.querySelectorAll("#sort input:checked")].map(
    (n) => n.value
  );

  let inputdiscount = document.querySelector("#discount").checked;
  let inputnodiscount = document.querySelector("#nodiscount").checked;
  filterArr = product.filter(
    (n) =>
      (!inputsort.length || inputsort.includes(n.sort)) &&
      ((inputdiscount && inputnodiscount) ||
        ((!inputdiscount || n.discount) && (!inputnodiscount || !n.discount)))
  );
  if (filterArr.length <= 12) {
    pageOne.className = "page-link active";
    pageTwo.style.display = "none";
    nextBtn.className = "page-link disabled";
    previousBtn.className = "page-link disabled";
  }
  if (pageOne.className == "page-link active") renderUI(0, 12);
  else renderUI(13, 20);
};

apply.addEventListener("click", filterChange);

// arrange
let arrangeOption = () => {
  filterArr = filterArr.sort((a, b) => {
    // if(filterOption.value == "increase"){return a.price - b.price > 0}
    if (
      (a.price > b.price && filterOption.value == "increase") ||
      (a.price < b.price && filterOption.value == "decrease") ||
      (a.id > b.id && filterOption.value == "default") ||
      (a.star < b.star && filterOption.value == "starup") ||
      (a.star > b.star && filterOption.value == "stardown")
    )
      return 1;
    if (
      (a.price < b.price && filterOption.value == "increase") ||
      (a.price > b.price && filterOption.value == "decrease") ||
      (a.id < b.id && filterOption.value == "default") ||
      (a.star > b.star && filterOption.value == "starup") ||
      (a.star < b.star && filterOption.value == "stardown")
    )
      return -1;
    return 0;
  });
  console.log(filterArr);
  if (pageOne.className == "page-link active") renderUI(0, 12);
  else renderUI(13, 20);
};

filterOption.addEventListener("input", arrangeOption);

// function renderUI
const containerItem = document.querySelector(
  ".container_menu_items .menu_item"
);

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

let renderUI = (first, last) => {
  containerItem.innerHTML = "";
  for (let i = first; i < last; i++) {
    if (!filterArr[i]) return;
    let priceItem = filterArr[i].price.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
    let disountItem = (
      (filterArr[i].price * (100 - filterArr[i].discount)) /
      100
    ).toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
    if (filterArr[i].display) {
      containerItem.innerHTML += `<div class="box_items position-relative">
            ${
              filterArr[i].discount
                ? `<div class="discount position-absolute">${filterArr[i].discount}%</div>`
                : ""
            }
              <div class="img_item">
                      <a href="detail_item.html?id=${
                        filterArr[i].id ? filterArr[i].id : "0"
                      }">
<img src="./assets${filterArr[i].image}" alt="${filterArr[i].name}"></a>
              </div>
              <div class="name_item">
                ${filterArr[i].name}
              </div>
              <div class="price_item d-flex justify-content-center">
                ${
                  filterArr[i].discount
                    ? `<div class="real_price">${priceItem}</div>
                <div class="discount_price">${disountItem}</div>`
                    : `<div>${priceItem}</div>`
                }
              </div>
              <div class="star_item">
              ${countStar(filterArr[i].star)}
              </div>
              <div class="button_oder">
                <button type="button" class="btn btn-danger" onclick='orderbox()'>Đặt hàng ngay</button>
              </div>
            </div>`;
    }
  }
};
// when click order
let orderbox = () => {
  let box = document.createElement("div");
  box.innerHTML = `Thêm vào giỏ hàng thành công <i class="bi bi-check-square-fill"></i>`;
  box.classList.add("order_box");
  document.body.append(box);
  let cartNumber = document.querySelector(".cart_number");
  cartNumber.innerHTML++;
};

// render UI firt time when loading page

// pagination

for (let i = 0; i < allLink.length; i++) {
  allLink[i].addEventListener("click", function () {
    if (
      allLink[i].getAttribute("aria-label") == "Next" ||
      allLink[i].innerHTML == 2
    ) {
      pageOne.className = "page-link";
      pageTwo.className = "page-link active";
      nextBtn.className = "page-link disabled";
      previousBtn.className = "page-link";
      renderUI(13, 20);
    } else if (
      allLink[i].getAttribute("aria-label") == "Previous" ||
      allLink[i].innerHTML == 1
    ) {
      pageTwo.className = "page-link";
      pageOne.className = "page-link active";
      nextBtn.className = "page-link ";
      previousBtn.className = "page-link disabled";
      renderUI(0, 12);
    }
  });
}
getProduct();
// search
const result = document.querySelector("#search .sreach_result");
const search = document.querySelector("#search");
const searchInput = document.querySelector("#search input");

let searchProgress = () => {
  result.innerHTML = "";
  for (let i = 0; i < (product && product.length); i++) {
    if (
      product[i].name.toLowerCase().includes(searchInput.value) &&
      searchInput.value
    ) {
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

let closesearch = () => {
  result.innerHTML = "";
};
window.document.addEventListener("click", closesearch);
searchInput.addEventListener("focusin", searchProgress);
searchInput.addEventListener("keyup", searchProgress);
searchInput.addEventListener("click", (e) => {
  e.stopPropagation();
});
