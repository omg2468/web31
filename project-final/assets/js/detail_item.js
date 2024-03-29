// get API
const URL_DATA = `https://api-product-rskq-44r04fk6p-omg2468.vercel.app/product`;
const containeritem = document.querySelector(".detail-item-container");
const spin = document.querySelector(".spin-loading");

const getdetail = async (id) => {
  const res = await fetch(
    `https://api-product-rskq-44r04fk6p-omg2468.vercel.app/product?id=${id}`
  );
  const data = await res.json();
  spin.style.display = 'none'
  return data;
};
window.onload = () => {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  getdetail(id).then((data) => {
    containeritem.innerHTML = `<div class="container">
        <h2>Chi tiết sản phẩm</h2>
        <div class="row">
          <div class="col-lg-4 col-md-6 offset-lg-2 offset-0 col-12">
            <div class="box-img">
              <img src="./assets${data[0].image}" alt="${data[0].name}" />
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <div class="box-description">
              <h3>${data[0].name}</h3>
              <div class="detail-price d-flex">
                <b>Giá bán:</b>
                <del style="display:${
                  data[0].discount ? "block" : "none"
                }"><i>${data[0].price.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    })}</i></del>
                <div class="real-price">${(data[0].discount
                  ? (data[0].price * (100 - data[0].discount)) / 100
                  : data[0].price
                ).toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}</div>
              </div>
              <div class="detail-star">
                <b>Đánh giá:</b> ${countStar(data[0].star)}
              </div>
              <div class="detail-description">
                <b>Mô tả sản phẩm:</b> ${data[0].description}
              </div>
              <div
                class="button-item d-flex align-items-center"
              >
                <div class="add-item" onclick="orderbox()">
                  <button>Thêm vào giỏ</button>
                </div>
                <div class="add-number-item">
                  <i class="bi bi-dash-circle" onclick="dash()"></i><span>1</span
                  ><i class="bi bi-plus-circle" onclick="plus()"></i>
                </div>
                <div class="buy-now">
                        <a href="https://omg2468.github.io/web31/project-final/cart.html#">
<button>Mua ngay</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  });
};

let dash = () => {
  const number = document.querySelector(".add-number-item span");
  if (number.innerHTML > 0) {
    number.innerHTML--;
  }
};

let plus = () => {
  const number = document.querySelector(".add-number-item span");
  number.innerHTML++;
};

// count star
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

// when click order
let orderbox = () => {
  const number = document.querySelector(".add-number-item span");
  let box = document.createElement("div");
  box.innerHTML = `Thêm vào giỏ hàng thành công <i class="bi bi-check-square-fill"></i>`;
  box.classList.add("order_box");
  if (number.innerHTML > 0) {
    document.body.append(box);
  }
  let cartNumber = document.querySelector(".cart_number");
  cartNumber.innerHTML =
    Number(number.innerHTML) + Number(cartNumber.innerHTML);
};

//call api
const URL_PRODUCT = `https://api-product-g1bk.vercel.app/product`;
var product;

const getProduct = async () => {
  const res = await fetch(URL_PRODUCT);
  const data = await res.json();
  product = data;
};
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