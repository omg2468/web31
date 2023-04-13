
//call api
const URL_PRODUCT = `https://api-product-g1bk.vercel.app/product`;
var product;

const getProduct = async () => {
  const res = await fetch(URL_PRODUCT);
  const data = await res.json();
  product = data;
};
getProduct();
console.log("ok");
 // search
// search
const result = document.querySelector("#search .sreach_result");
const search = document.querySelector("#search");
const searchInput = document.querySelector("#search input");

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