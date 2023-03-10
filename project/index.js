const navbar = document.querySelector(".navbar_container");
const navBarToogle = document.querySelector(".navbar-toggler");
const navBarToogleIcon = document.querySelector(".navbar-toggler-icon");
const aboutUs = document.querySelector(".container-fluid.about_us");
const navBarLink = document.querySelectorAll(".nav-item a");
const btnNav = document.querySelector(".navbar .container-fluid button span");
const cart = document.querySelector(".bi-cart4");
console.log(navBarLink);
// product
const product = [
  {
    name: "Bánh mì thịt nướng",
    price: 20000,
    image: "./image/banhmi1.jpg",
    description:
      "Bánh mì thịt nướng là món ăn đường phố đặc trưng của Việt Nam, được nhiều người yêu thích và tìm kiếm. Khi nhắc đến bánh mì thịt nướng, người ta thường nghĩ đến một chiếc bánh mì giòn tan bên ngoài, mềm mịn bên trong, cùng với lớp thịt nướng thơm phức và nhiều rau sống xanh tươi.",
    sort: "Bánh mì",
  },
  {
    name: "Bánh Mì Chả Thịt",
    price: 15000,
    image: "./image/banhmi2.jpg",
    description:
      "Bánh mì chả thịt là một món ăn đặc trưng của Việt Nam, có hương vị đặc biệt và được yêu thích rộng rãi. Món ăn này được làm từ các nguyên liệu đơn giản và phổ biến như bánh mì, chả lụa và trứng.",
    sort: "Bánh mì",
  },
  {
    name: "Bánh Mì Ốp La 2 Trứng",
    price: 15000,
    image: "./image/banhmi3.jpg",
    description:
      "Bánh mì ốp la 2 trứng là một món ăn đường phố phổ biến ở Việt Nam, được ưa chuộng bởi hương vị đặc biệt và sự tiện lợi của nó. Món ăn này gồm một chiếc bánh mì giòn tan, được xé thành hai nửa và chứa hai quả trứng ốp la chiên giòn.",
    sort: "Bánh mì",
  },
  {
    name: "Bánh Mì Hotdog",
    price: 17000,
    image: "./image/banhmi4.png",
    description:
      "Bánh Mì Hotdog là một món ăn đường phố phổ biến ở Việt Nam, được ưa chuộng bởi hương vị đặc biệt và sự tiện lợi của nó. Món ăn này gồm một chiếc bánh mì giòn tan, được xé thành hai nửa và chứa hai quả trứng ốp la chiên giòn.",
    sort: "Bánh mì",
  },
  {
    name: "Hamburger Chả Lát",
    price: 19000,
    image: "./image/banhmi5.jpg",
    description:
      "Hamburger là một món ăn phổ biến trên toàn thế giới, được biết đến với hương vị đậm đà và thịt bò xay giòn tan. Món ăn này bao gồm một chiếc bánh mì giòn, thịt bò xay, rau xanh và sốt.",
    sort: "Bánh mì",
  },
  {
    name: "Muffin Vanila",
    price: 8000,
    image: "./image/banhngot1.jpg",
    description:
      "Muffin Vanilla là loại bánh ngọt hình trụ, được làm từ bột mì, đường, trứng, sữa, bơ và hương vani. Muffin Vanilla có hương vị thơm ngon của vani, vị ngọt và vị giòn của bánh mì, tạo nên một món ăn vô cùng hấp dẫn.",
    sort: "Bánh ngọt",
  },
  {
    name: "Bánh Mì Sấy Đường",
    price:10000,
    image: "./image/banhngot2.jpg",
    description:
      "Bánh Mì Sấy Đường là loại bánh ngọt hình trụ, được làm từ bột mì, đường, trứng, sữa, bơ và hương vani. Muffin Vanilla có hương vị thơm ngon của vani, vị ngọt và vị giòn của bánh mì, tạo nên một món ăn vô cùng hấp dẫn.",
    sort: "Bánh ngọt",
  },
  {
    name: "Muffin Nhí Nhảnh",
    price: 23000,
    image: "./image/banhngot3.jpg",
    description:
      "Muffin Nhí Nhảnh là loại bánh ngọt hình trụ, được làm từ bột mì, đường, trứng, sữa, bơ và hương vani. Muffin Vanilla có hương vị thơm ngon của vani, vị ngọt và vị giòn của bánh mì, tạo nên một món ăn vô cùng hấp dẫn.",
    sort: "Bánh ngọt",
  },
  {
    name: "Bánh Đỏ",
    price: 12000,
    image: "./image/banhngot4.jpg",
    description:
      "Bánh Đỏ là loại bánh ngọt hình trụ, được làm từ bột mì, đường, trứng, sữa, bơ và hương vani. Muffin Vanilla có hương vị thơm ngon của vani, vị ngọt và vị giòn của bánh mì, tạo nên một món ăn vô cùng hấp dẫn.",
    sort: "Bánh ngọt",
  },
  {
    name: "Su Kem",
    price: 18000,
    image: "./image/banhngot5.jpg",
    description:
      "Bánh su kem (tiếng Pháp: chou à la crème) là món bánh ngọt ở dạng kem sữa được làm từ các nguyên liệu như bột mì, trứng, sữa, bơ... đánh đều tạo thành một hỗn hợp và sau đó bằng thao tác ép và phun qua một cái túi để định hình thành những bánh nhỏ và cuối cùng được nướng chín. Bánh có xuất xứ từ nước Pháp.",
    sort: "Bánh ngọt",
  },
  {
    name: "Hot Dog Đức",
    price: 16000,
    image: "./image/banhman1.jpg",
    description:
      "Hot Dog Đức là một loại bánh mì kẹp xúc xích, được phổ biến trong ẩm thực Đức và được coi là món ăn nhanh phổ biến trên thế giới. Hot Dog Đức bao gồm một miếng xúc xích được nướng trên lửa và được xếp lên một chiếc bánh mì mềm dài và giòn, sau đó thêm các loại sốt như ketchup, mustard, hoặc sốt chua ngọt.",
    sort: "Bánh mặn",
  },
  {
    name: "Bánh Đùi Gà",
    price: 16000,
    image: "./image/banhman2.jpg",
    description:
      "Bánh Đùi Gà thường được làm từ thịt gà, bò hoặc cả hai, và được ướp gia vị trước khi được nướng trên lửa hoặc áp chảo. Chiếc bánh mì cho Hot Dog Đức thường dài khoảng 20 đến 30 cm, được làm từ bột mì, men nở, sữa, trứng và bơ, với vỏ bánh mềm mịn và giòn.",
    sort: "Bánh mặn",
  },
  {
    name: "Bông Lan Trứng Muối Gà Cay Vuông",
    price: 29000,
    image: "./image/banhman3.png",
    description:
      "Bông Lan Trứng Muối Gà Cay Vuông thường được làm từ thịt gà, bò hoặc cả hai, và được ướp gia vị trước khi được nướng trên lửa hoặc áp chảo. Chiếc bánh mì cho Hot Dog Đức thường dài khoảng 20 đến 30 cm, được làm từ bột mì, men nở, sữa, trứng và bơ, với vỏ bánh mềm mịn và giòn.",
    sort: "Bánh mặn",
  },
  {
    name: "Bông Lan Trứng Muối Gà Cay",
    price: 55000,
    image: "./image/banhman4.jpg",
    description:
      "Bông Lan Trứng Muối Gà Cay thường được làm từ thịt gà, bò hoặc cả hai, và được ướp gia vị trước khi được nướng trên lửa hoặc áp chảo. Chiếc bánh mì cho Hot Dog Đức thường dài khoảng 20 đến 30 cm, được làm từ bột mì, men nở, sữa, trứng và bơ, với vỏ bánh mềm mịn và giòn.",
    sort: "Bánh mặn",
  },
  {
    name: "Pateso",
    price: 9000,
    image: "./image/banhman5.jpg",
    description:
      "Pa tê sô là một loại bánh có nguồn gốc từ Pháp có vỏ bằng bột mì và bơ nướng lò, bên trong có nhân thịt heo, nấm mèo và hành khô. Nếu muốn thay đổi vị, có thể thay thế thịt heo bằng thịt bò, gà hoặc bất kỳ loại thịt nào tuỳ thích. Tất cả được trộn đều với gia vị và băm nhỏ rồi viên lại",
    sort: "Bánh mặn",
  },
  {
    name: "Bánh kem socola",
    price: 200000,
    image: "./image/banhkem1.jpg",
    description:
      "Bánh kem socola được làm bằng cách pha trộn bột mì, đường và trứng với nhau, sau đó đưa vào lò nướng để nướng cho đến khi chín và vàng. Sau đó, bánh được cắt thành nhiều lớp mỏng và phết kem socola giữa các lớp bánh. Bề mặt bánh thường được trang trí bằng kem socola, hạt cacao hoặc socola nướng.",
    sort: "Bánh kem",
  },
  {
    name: "Bánh kem chanh",
    price: 220000,
    image: "./image/banhkem2.jpg",
    description:
      "Bánh kem chanh được làm bằng cách pha trộn bột mì, đường và trứng với nhau, sau đó đưa vào lò nướng để nướng cho đến khi chín và vàng. Sau đó, bánh được cắt thành nhiều lớp mỏng và phết kem socola giữa các lớp bánh. Bề mặt bánh thường được trang trí bằng kem socola, hạt cacao hoặc socola nướng.",
    sort: "Bánh kem",
  },
  {
    name: "Bánh kem trứng muối",
    price: 180000,
    image: "./image/banhkem3.jpg",
    description:
      "Bánh kem trứng muối được làm bằng cách pha trộn bột mì, đường và trứng với nhau, sau đó đưa vào lò nướng để nướng cho đến khi chín và vàng. Sau đó, bánh được cắt thành nhiều lớp mỏng và phết kem socola giữa các lớp bánh. Bề mặt bánh thường được trang trí bằng kem socola, hạt cacao hoặc socola nướng.",
    sort: "Bánh kem",
  },
  {
    name: "Bánh kem trứng socola",
    price: 250000,
    image: "./image/banhkem4.jpg",
    description:
      "Bánh kem trứng muối được làm bằng cách pha trộn bột mì, đường và trứng với nhau, sau đó đưa vào lò nướng để nướng cho đến khi chín và vàng. Sau đó, bánh được cắt thành nhiều lớp mỏng và phết kem socola giữa các lớp bánh. Bề mặt bánh thường được trang trí bằng kem socola, hạt cacao hoặc socola nướng.",
    sort: "Bánh kem",
  },
  {
    name: "Bánh kem dâu",
    price: 200000,
    image: "./image/banhkem5.jpg",
    description:
      "Bánh kem dâu là một loại bánh tráng miệng được pha chế từ bột mì, đường, trứng, bơ, sữa, dâu tây và kem tươi. Bánh kem dâu có vị ngọt nhẹ, hương vị dâu thơm ngon, độ giòn của bánh và độ mềm mịn của kem, tạo nên một món tráng miệng tuyệt vời.",
    sort: "Bánh kem",
  },
];

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
    delay: 3000,
  },
});

// search
const result = document.querySelector("#search .sreach_result");
const search = document.querySelector("#search input");
console.log(result);

let searchProgress = () => {
  result.innerHTML = ""
  for (let i = 0; i < product.length; i++) {
    if (product[i].name.toLowerCase().includes(search.value) && search.value) {
      result.innerHTML += `<div class="box_result d-flex">
      <div class="result_img">
                <img src="${product[i].image}" alt="" />
              </div>
              <div class="result_text">
                <div class="name_result"><h4>${product[i].name}</h4></div>
                <div class="price_result">${product[i].price.toLocaleString(
                  "it-IT",
                  { style: "currency", currency: "VND" }
                )} </div>
                <div class="description_result">
                  ${product[i].description}
                </div>
              </div>
            </div>
          </div>`;
    }
  }
};

search.addEventListener("keyup", searchProgress);

var x = 1000;
x = x.toLocaleString("it-IT", { style: "currency", currency: "VND" });
console.log(x);

