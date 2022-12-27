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
let subTotal = document.querySelector(".subtotal");
let vat = document.querySelector(".vat");
let discount = document.querySelector(".discount");
let total = document.querySelector(".total");
console.log(total)

let discount_number = 0;

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
   updateTotalMoney(products);
}

let subTotalEl = document.querySelector(".subtotal span");
let vatEl = document.querySelector(".vat span");
let totalEle = document.querySelector(".total span");
console.log(vatEl);

// Cập nhật tổng tiền
function updateTotalMoney(arr) {
  // Tính tổng tiền cart
  let totalMoney = 0;

  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];
    totalMoney += p.count * p.price;
  }
  // Cập nhật tiền lên trên giao diện
  subTotalEl.innerText = totalMoney.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
  vatEl.innerText = (totalMoney * 0.05).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
  totalEle.innerText = (totalMoney * (1.05- discount_number)).toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });

  
}


let code_discount = document.querySelector(".promotion #promo-code ");
console.log(code_discount)

code_discount.addEventListener('change', function(e){
  console.log(e)
  if(!e.target.value){
    discount.className = "discount hide";
    discount_number = 0;
  }
  renderUI()
})

let button_discount = document.querySelector(".promotion button");
console.log(button_discount);

button_discount.addEventListener("click", function (e) {
  console.log(discount.className);
  if(!code_discount.value){
    discount.className = "discount hide";
    discount_number = 0;
  }
  else for(key in promotionCode) {
    if(key == code_discount.value){
      discount_number = promotionCode[key]/100;
      discount.className = "discount";
      discount.innerHTML = `Discount<span>${promotionCode[key]}%</span>`;
    }
  }
  renderUI()
});



let removeItem = function (id) {
  for (let i = 0; i < products.length; i++) {
    if (i == id) {
      products.splice(i, 1);
    }
  }
  renderUI();
}

let changeNumber = function (id, event) {
  if (Number(event.target.value) % 1 != 0){
    alert('hay nhap lai so')
    event.target.value = 1
  }
    for (let i = 0; i < products.length; i++) {
      if (i == id) {
        console.log(event);
        products[i].count = Number(event.target.value);
      }
    }
  renderUI();
}

let promotionCode = {
  A: 10,
  B: 20,
  C: 30,
  D: 40,
};


renderUI();

