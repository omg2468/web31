let products = [
  {
    name: "Áo kiểu nữ cam đất phối cổ trắng dập ly",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.",
    price: 250000,
    image:
      "https://cdn.gumac.vn//image/mau-cam-nen-ket-hop-voi-mau-gi140820202032026739.jpg",
    count: 1,
  },
  {
    name: "Áo trắng bèo lé đen tay loe dễ thương",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, velit.",
    price: 350000,
    image:
      "https://i-ngoisao.vnecdn.net/2019/06/11/70db831f2e02c0166f6522cd9302cd-7071-7220-1560218687.jpg",
    count: 2,
  },
];

let count = document.querySelector(".count");

let list = document.querySelector(".products");
console.log(list);

function VND(x) {
  return x.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}

function renderUI() {
  list.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    list.innerHTML += `<li class="row" id='${i}' >
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src="${products[i].image}" alt="${
      products[i].name
    }" />
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${
                              products[i].name
                            }</a></div>
                            <div class="description">
                                ${products[i].description}
                            </div>
                            <div class="price">${VND(products[i].price)}</div>
                        </div>
                    </div>

                    <div class="col right">
                        <div class="quantity">
                            <input type="number" class="quantity" step="1" value="${
                              products[i].count
                            }" onchange='changeNumber(${i}, event)'/>
                        </div>

                        <div class="remove">
                            <span class="close" onclick='removeItem(${i})' ><i class="fa fa-times" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </li>`;
  }
  let total = 0;
  if (products.length == 0) {
    count.textContent = "No item";
  } else
    for (let i = 0; i < products.length; i++) {
      total += products[i].count;
    }
  count.textContent = total + " items in the bag";
}

let removeItem = function (id) {
  for (let i = 0; i < products.length; i++) {
    if (i == id) {
      products.splice(i, 1);
    }
  }
  renderUI();
};

let changeNumber = function (id, event) {
  for (let i = 0; i < products.length; i++) {
    if (i == id) {
      console.log(event);
    products[i].count = Number(event.target.value);
    }
  }
  renderUI();
};

let subTotal = document.querySelector('.subtotal')
let vat = document.querySelector('.vat')
let discount = document.querySelector('.discount')
let total = document.querySelector('.total')
console.log(subTotal, vat, discount, total)

renderUI();
