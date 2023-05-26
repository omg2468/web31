const product = [
  {
    name: "Muffin Vanila",
    price: 8000,
    image: "./assets/images/banhngot1.jpg",
    description:
      "Muffin Vanilla là loại bánh ngọt hình trụ, được làm từ bột mì, đường, trứng, sữa, bơ và hương vani. Muffin Vanilla có hương vị thơm ngon của vani, vị ngọt và vị giòn của bánh mì, tạo nên một món ăn vô cùng hấp dẫn.",
    sort: "Bánh ngọt",
    star: 5,
    id: 1,
    display: true,
    count: 1,
  },
  {
    name: "Bông Lan Trứng Muối",
    price: 29000,
    image: "./assets/images/banhman3.png",
    description:
      "Bông Lan Trứng Muối Gà Cay Vuông thường được làm từ thịt gà, bò hoặc cả hai, và được ướp gia vị trước khi được nướng trên lửa hoặc áp chảo. Chiếc bánh mì cho Hot Dog Đức thường dài khoảng 20 đến 30 cm, được làm từ bột mì, men nở, sữa, trứng và bơ, với vỏ bánh mềm mịn và giòn.",
    sort: "Bánh mặn",
    star: 4.5,
    id: 2,
    display: true,
    count: 1,
  },
  {
    name: "Pateso",
    price: 9000,
    image: "./assets/images/banhman5.jpg",
    description:
      "Pa tê sô là một loại bánh có nguồn gốc từ Pháp có vỏ bằng bột mì và bơ nướng lò, bên trong có nhân thịt heo, nấm mèo và hành khô. Nếu muốn thay đổi vị, có thể thay thế thịt heo bằng thịt bò, gà hoặc bất kỳ loại thịt nào tuỳ thích. Tất cả được trộn đều với gia vị và băm nhỏ rồi viên lại",
    sort: "Bánh mặn",
    star: 5,
    id: 3,
    display: true,
    count: 2,
  },
];

const items = document.querySelector(".container-cart tbody");
const boxTotal = document.querySelector(".box-item-money");
const totalCheck = document.querySelector(".total-check");
const items2 = document.querySelector(".container-item-2");
const cartNumber = document.querySelector(".cart_number");
const containerCart = document.querySelector(".container-cart");
const rendercart = () => {
  cartNumber.innerHTML = "";
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    if (product[i].display) {
      total += product[i].count;
    }
  }
  cartNumber.innerHTML = total;
};

const renderUI = () => {
  items.innerHTML = "";
  boxTotal.innerHTML = "";
  totalCheck.innerHTML = "";
  items2.innerHTML = "";
  let a = 0;
  for (let i = 0; i < product.length; i++) {
    if (product[i].display) {
      a += product[i].price * product[i].count;
    }
  }
  totalCheck.innerHTML = a.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
  product.map((item) => {
    items.innerHTML += `<tr style="display:${!item.display && "none"}">
                  <th scope="row">
                    <div class="item">
                      <div class="title_item">${item.name}</div>
                      <div class="img_item">
                        <img src="${item.image}" alt="${item.name}" />
                      </div>
                    </div>
                  </th>
                  <td>${item.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}</td>
                  <td class="number_items"><div class="box-number d-flex align-items-center">
                      <span class="subtract" onclick="subtract(${
                        item.id
                      })"><i class="bi bi-dash-circle"></i></span>
                      <input type="tel" class="${item.id}" value="${
      item.count
    }" onchange="changevalue(${item.id})"/>
                      <span class="add" onclick="add(${
                        item.id
                      })"><i class="bi bi-plus-circle"></i></span>
                    </div>
                  </td></td>
                  <td>${(item.price * item.count).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}</td>
                  <td class="close_item" onclick="close1(${
                    item.id
                  })"><i class="bi bi-x text-bg-danger1"></i></td>
                </tr>`;
    boxTotal.innerHTML += `<div class="item-total-money" style="display:${
      item.display && item.count !== 0 ? "" : "none"
    }">
                    <div class="name-item-check">${item.name} x (${
      item.count
    })</div>
                    <div class="money-item-check">${(
                      item.price * item.count
                    ).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}</div>
                  </div>`;
    items2.innerHTML += `<div class="box-items-2" style="display:${
      !item.display && "none"
    }">
                  <div class="box-img">
                <img src="${item.image}" alt="${item.name}" />
              </div>
              <div class="description-item-2">
                <div class="name-item-2"><h5>${item.name}</h5></div>
                <div class="price-item-2 d-flex">
                  <p>${item.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })} x</p>
                                        <input type="tel" value="${
                                          item.count
                                        }" class="${
      item.id
    }" onchange="changevalue(${item.id})"/>

                </div>
                <div class="total-price-item">
                  <b>Tổng: ${(item.count * item.price).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })}</b>
                </div>
              </div>
              <div class="close_item cart-2" onclick="close1(${
                item.id
              })"><i class="bi bi-x"></i></div>
              </div>`;
  });
  for (let a = 0, i = 0; i < product.length; i++) {
    if (!product[i].display) {
      a++;
    }
    if (a == product.length) {
      containerCart.innerHTML = `<h2>GIỎ HÀNG</h2>
      <p class="noitem text-center">Không có sản phẩm nào trong giỏ hàng</p>
      `;
    }
  }
};

let add = (id) => {
  for (let i = 0; i < product.length; i++) {
    if (product[i].id == id) {
      product[i].count++;
    }
  }
  renderUI();
  rendercart();
};

let subtract = (id) => {
  for (let i = 0; i < product.length; i++) {
    if (product[i].id == id && product[i].count > 0) {
      product[i].count--;
    }
  }
  renderUI();
  rendercart();
};

let changevalue = (id) => {
  let a;
  if (screen.width > 576) {
    a = document.getElementsByClassName(id)[0];
  } else a = document.getElementsByClassName(id)[1];
  for (let i = 0; i < product.length; i++) {
    if (product[i].id == id) {
      product[i].count = Number(a.value);
    }
  }
  renderUI();
  rendercart();
};

let close1 = (id) => {
  for (let i = 0; i < product.length; i++) {
    if (product[i].id == id) {
      product[i].display = false;
    }
  }
  renderUI();
  rendercart();
};
renderUI();
rendercart();

//call api
const URL_PRODUCT = `https://api-product-rskq-44r04fk6p-omg2468.vercel.app/product`;
var product1;

const getProduct = async () => {
  const res = await fetch(URL_PRODUCT);
  const data = await res.json();
  product1 = data;
};
getProduct();
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
