const product = [
  {
    name: "Bánh mì thịt nướng",
    price: 20000,
    image: "./image/banhmi1.jpg",
    description:
      "Bánh mì thịt nướng là món ăn đường phố đặc trưng của Việt Nam, được nhiều người yêu thích và tìm kiếm. Khi nhắc đến bánh mì thịt nướng, người ta thường nghĩ đến một chiếc bánh mì giòn tan bên ngoài, mềm mịn bên trong, cùng với lớp thịt nướng thơm phức và nhiều rau sống xanh tươi.",
    sort: "cake3",
    star: 5,
    discount: 0,
    display: true,
  },
  {
    name: "Bánh Mì Chả Thịt",
    price: 15000,
    image: "./image/banhmi2.jpg",
    description:
      "Bánh mì chả thịt là một món ăn đặc trưng của Việt Nam, có hương vị đặc biệt và được yêu thích rộng rãi. Món ăn này được làm từ các nguyên liệu đơn giản và phổ biến như bánh mì, chả lụa và trứng.",
    sort: "cake3",
    star: 4.5,
    discount: 10,
    display: true,
    id: 1,
  },
  {
    name: "Bánh Mì Ốp La 2 Trứng",
    price: 15000,
    image: "./image/banhmi3.jpg",
    description:
      "Bánh mì ốp la 2 trứng là một món ăn đường phố phổ biến ở Việt Nam, được ưa chuộng bởi hương vị đặc biệt và sự tiện lợi của nó. Món ăn này gồm một chiếc bánh mì giòn tan, được xé thành hai nửa và chứa hai quả trứng ốp la chiên giòn.",
    sort: "cake3",
    star: 5,
    discount: 5,
    display: true,
    id: 2,
  },
  {
    name: "Bánh Mì Hotdog",
    price: 17000,
    image: "./image/banhmi4.png",
    description:
      "Bánh Mì Hotdog là một món ăn đường phố phổ biến ở Việt Nam, được ưa chuộng bởi hương vị đặc biệt và sự tiện lợi của nó. Món ăn này gồm một chiếc bánh mì giòn tan, được xé thành hai nửa và chứa hai quả trứng ốp la chiên giòn.",
    sort: "cake3",
    star: 3.5,
    discount: 0,
    display: true,
    id: 3,
  },
  {
    name: "Hamburger Chả Lát",
    price: 19000,
    image: "./image/banhmi5.jpg",
    description:
      "Hamburger là một món ăn phổ biến trên toàn thế giới, được biết đến với hương vị đậm đà và thịt bò xay giòn tan. Món ăn này bao gồm một chiếc bánh mì giòn, thịt bò xay, rau xanh và sốt.",
    sort: "cake3",
    star: 4,
    discount: 0,
    display: true,
    id: 4,
  },
  {
    name: "Muffin Vanila",
    price: 8000,
    image: "./image/banhngot1.jpg",
    description:
      "Muffin Vanilla là loại bánh ngọt hình trụ, được làm từ bột mì, đường, trứng, sữa, bơ và hương vani. Muffin Vanilla có hương vị thơm ngon của vani, vị ngọt và vị giòn của bánh mì, tạo nên một món ăn vô cùng hấp dẫn.",
    sort: "cake1",
    star: 5,
    discount: 0,
    display: true,
    id: 5,
  },
  {
    name: "Bánh Mì Sấy Đường",
    price: 10000,
    image: "./image/banhngot2.jpg",
    description:
      "Bánh Mì Sấy Đường là loại bánh ngọt hình trụ, được làm từ bột mì, đường, trứng, sữa, bơ và hương vani. Muffin Vanilla có hương vị thơm ngon của vani, vị ngọt và vị giòn của bánh mì, tạo nên một món ăn vô cùng hấp dẫn.",
    sort: "cake1",
    star: 4.5,
    discount: 0,
    display: true,
    id: 6,
  },
  {
    name: "Muffin Nhí Nhảnh",
    price: 23000,
    image: "./image/banhngot3.jpg",
    description:
      "Muffin Nhí Nhảnh là loại bánh ngọt hình trụ, được làm từ bột mì, đường, trứng, sữa, bơ và hương vani. Muffin Vanilla có hương vị thơm ngon của vani, vị ngọt và vị giòn của bánh mì, tạo nên một món ăn vô cùng hấp dẫn.",
    sort: "cake1",
    star: 5,
    discount: 5,
    display: true,
    id: 7,
  },
  {
    name: "Bánh Đỏ",
    price: 12000,
    image: "./image/banhngot4.jpg",
    description:
      "Bánh Đỏ là loại bánh ngọt hình trụ, được làm từ bột mì, đường, trứng, sữa, bơ và hương vani. Muffin Vanilla có hương vị thơm ngon của vani, vị ngọt và vị giòn của bánh mì, tạo nên một món ăn vô cùng hấp dẫn.",
    sort: "cake1",
    star: 4,
    discount: 10,
    display: true,
    id: 8,
  },
  {
    name: "Su Kem",
    price: 18000,
    image: "./image/banhngot5.jpg",
    description:
      "Bánh su kem (tiếng Pháp: chou à la crème) là món bánh ngọt ở dạng kem sữa được làm từ các nguyên liệu như bột mì, trứng, sữa, bơ... đánh đều tạo thành một hỗn hợp và sau đó bằng thao tác ép và phun qua một cái túi để định hình thành những bánh nhỏ và cuối cùng được nướng chín. Bánh có xuất xứ từ nước Pháp.",
    sort: "cake1",
    star: 4,
    discount: 0,
    display: true,
    id: 9,
  },
  {
    name: "Hot Dog Đức",
    price: 16000,
    image: "./image/banhman1.jpg",
    description:
      "Hot Dog Đức là một loại bánh mì kẹp xúc xích, được phổ biến trong ẩm thực Đức và được coi là món ăn nhanh phổ biến trên thế giới. Hot Dog Đức bao gồm một miếng xúc xích được nướng trên lửa và được xếp lên một chiếc bánh mì mềm dài và giòn, sau đó thêm các loại sốt như ketchup, mustard, hoặc sốt chua ngọt.",
    sort: "cake2",
    star: 3.5,
    discount: 0,
    display: true,
    id: 10,
  },
  {
    name: "Bánh Đùi Gà",
    price: 16000,
    image: "./image/banhman2.jpg",
    description:
      "Bánh Đùi Gà thường được làm từ thịt gà, bò hoặc cả hai, và được ướp gia vị trước khi được nướng trên lửa hoặc áp chảo. Chiếc bánh mì cho Hot Dog Đức thường dài khoảng 20 đến 30 cm, được làm từ bột mì, men nở, sữa, trứng và bơ, với vỏ bánh mềm mịn và giòn.",
    sort: "cake2",
    star: 5,
    discount: 0,
    display: true,
    id: 11,
  },
  {
    name: "Bông Lan Trứng Muối Gà Cay Vuông",
    price: 29000,
    image: "./image/banhman3.png",
    description:
      "Bông Lan Trứng Muối Gà Cay Vuông thường được làm từ thịt gà, bò hoặc cả hai, và được ướp gia vị trước khi được nướng trên lửa hoặc áp chảo. Chiếc bánh mì cho Hot Dog Đức thường dài khoảng 20 đến 30 cm, được làm từ bột mì, men nở, sữa, trứng và bơ, với vỏ bánh mềm mịn và giòn.",
    sort: "cake2",
    star: 4.5,
    discount: 10,
    display: true,
    id: 12,
  },
  {
    name: "Bông Lan Trứng Muối Gà Cay",
    price: 55000,
    image: "./image/banhman4.jpg",
    description:
      "Bông Lan Trứng Muối Gà Cay thường được làm từ thịt gà, bò hoặc cả hai, và được ướp gia vị trước khi được nướng trên lửa hoặc áp chảo. Chiếc bánh mì cho Hot Dog Đức thường dài khoảng 20 đến 30 cm, được làm từ bột mì, men nở, sữa, trứng và bơ, với vỏ bánh mềm mịn và giòn.",
    sort: "cake2",
    star: 4,
    discount: 20,
    display: true,
    id: 13,
  },
  {
    name: "Pateso",
    price: 9000,
    image: "./image/banhman5.jpg",
    description:
      "Pa tê sô là một loại bánh có nguồn gốc từ Pháp có vỏ bằng bột mì và bơ nướng lò, bên trong có nhân thịt heo, nấm mèo và hành khô. Nếu muốn thay đổi vị, có thể thay thế thịt heo bằng thịt bò, gà hoặc bất kỳ loại thịt nào tuỳ thích. Tất cả được trộn đều với gia vị và băm nhỏ rồi viên lại",
    sort: "cake2",
    star: 5,
    discount: 10,
    display: true,
    id: 14,
  },
  {
    name: "Bánh kem socola",
    price: 200000,
    image: "./image/banhkem1.jpg",
    description:
      "Bánh kem socola được làm bằng cách pha trộn bột mì, đường và trứng với nhau, sau đó đưa vào lò nướng để nướng cho đến khi chín và vàng. Sau đó, bánh được cắt thành nhiều lớp mỏng và phết kem socola giữa các lớp bánh. Bề mặt bánh thường được trang trí bằng kem socola, hạt cacao hoặc socola nướng.",
    sort: "cake4",
    star: 4.5,
    discount: 15,
    display: true,
    id: 15,
  },
  {
    name: "Bánh kem chanh",
    price: 220000,
    image: "./image/banhkem2.jpg",
    description:
      "Bánh kem chanh được làm bằng cách pha trộn bột mì, đường và trứng với nhau, sau đó đưa vào lò nướng để nướng cho đến khi chín và vàng. Sau đó, bánh được cắt thành nhiều lớp mỏng và phết kem socola giữa các lớp bánh. Bề mặt bánh thường được trang trí bằng kem socola, hạt cacao hoặc socola nướng.",
    sort: "cake4",
    star: 3.5,
    discount: 0,
    display: true,
    id: 16,
  },
  {
    name: "Bánh kem trứng muối",
    price: 180000,
    image: "./image/banhkem3.jpg",
    description:
      "Bánh kem trứng muối được làm bằng cách pha trộn bột mì, đường và trứng với nhau, sau đó đưa vào lò nướng để nướng cho đến khi chín và vàng. Sau đó, bánh được cắt thành nhiều lớp mỏng và phết kem socola giữa các lớp bánh. Bề mặt bánh thường được trang trí bằng kem socola, hạt cacao hoặc socola nướng.",
    sort: "cake4",
    star: 4.5,
    discount: 10,
    display: true,
    id: 17,
  },
  {
    name: "Bánh kem trứng socola",
    price: 250000,
    image: "./image/banhkem4.jpg",
    description:
      "Bánh kem trứng muối được làm bằng cách pha trộn bột mì, đường và trứng với nhau, sau đó đưa vào lò nướng để nướng cho đến khi chín và vàng. Sau đó, bánh được cắt thành nhiều lớp mỏng và phết kem socola giữa các lớp bánh. Bề mặt bánh thường được trang trí bằng kem socola, hạt cacao hoặc socola nướng.",
    sort: "cake4",
    star: 4,
    discount: 0,
    display: true,
    id: 18,
  },
  {
    name: "Bánh kem dâu",
    price: 200000,
    image: "./image/banhkem5.jpg",
    description:
      "Bánh kem dâu là một loại bánh tráng miệng được pha chế từ bột mì, đường, trứng, bơ, sữa, dâu tây và kem tươi. Bánh kem dâu có vị ngọt nhẹ, hương vị dâu thơm ngon, độ giòn của bánh và độ mềm mịn của kem, tạo nên một món tráng miệng tuyệt vời.",
    sort: "cake4",
    star: 5,
    discount: 10,
    display: true,
    id: 19,
  },
];

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
  if (accordion.style.display == "none") {
    accordion.style.display = "block";
  } else accordion.style.display = "none";
});
//filter status
const apply = document.querySelector(".filter_button button");
const cancel = document.querySelector(".filter_icon button");

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
  if (pageOne.className == "page-link active") renderUI(0, 12);
  else renderUI(13, 20);
});

// main array product will render
let filterArr = product.slice();
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
  console.log(inputsort);
  console.log(filterArr);
  if (pageOne.className == "page-link active") renderUI(0, 12);
  else renderUI(13, 20);
};

apply.addEventListener("click", filterChange);

// arrange
let arrangeOption = () => {
  filterArr = filterArr.sort((a, b) => {
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
                <img src=".${filterArr[i].image}" alt="${filterArr[i].name}">
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
                <button type="button" class="btn btn-danger">Đặt hàng ngay</button>
              </div>
            </div>`;
    }
  }
};

// render UI firt time when loading page
window.onload = renderUI(0, 12);

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
