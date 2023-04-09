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
console.log(items2);

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
