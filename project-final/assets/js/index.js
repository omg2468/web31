const navbar = document.querySelector(".navbar_container");
const navBarToogle = document.querySelector(".navbar-toggler");
const navBarToogleIcon = document.querySelector(".navbar-toggler-icon");
const aboutUs = document.querySelector(".container-fluid.about_us");
const navBarLink = document.querySelectorAll(".nav-item a");
const btnNav = document.querySelector(".navbar .container-fluid button span");
const cart = document.querySelector(".bi-cart4");
console.log(navBarLink);

// product
// const product = [
//   {
//     name: "Bánh mì thịt nướng",
//     price: 20000,
//     image: "./assets/images/banhmi1.jpg",
//     description:
//       "Bánh mì thịt nướng là món ăn đường phố đặc trưng của Việt Nam, được nhiều người yêu thích và tìm kiếm. Khi nhắc đến bánh mì thịt nướng, người ta thường nghĩ đến một chiếc bánh mì giòn tan bên ngoài, mềm mịn bên trong, cùng với lớp thịt nướng thơm phức và nhiều rau sống xanh tươi.",
//     sort: "Bánh mì",
//     star: 4,
//   },
//   {
//     name: "Bánh Mì Chả Thịt",
//     price: 15000,
//     image: "./assets/images/banhmi2.jpg",
//     description:
//       "Bánh mì chả thịt là một món ăn đặc trưng của Việt Nam, có hương vị đặc biệt và được yêu thích rộng rãi. Món ăn này được làm từ các nguyên liệu đơn giản và phổ biến như bánh mì, chả lụa và trứng.",
//     sort: "Bánh mì",
//     star: 4.5,
//   },
//   {
//     name: "Bánh Mì Ốp La 2 Trứng",
//     price: 15000,
//     image: "./assets/images/banhmi3.jpg",
//     description:
//       "Bánh mì ốp la 2 trứng là một món ăn đường phố phổ biến ở Việt Nam, được ưa chuộng bởi hương vị đặc biệt và sự tiện lợi của nó. Món ăn này gồm một chiếc bánh mì giòn tan, được xé thành hai nửa và chứa hai quả trứng ốp la chiên giòn.",
//     sort: "Bánh mì",
//     star: 5,
//   },
//   {
//     name: "Bánh Mì Hotdog",
//     price: 17000,
//     image: "./assets/images/banhmi4.png",
//     description:
//       "Bánh Mì Hotdog là một món ăn đường phố phổ biến ở Việt Nam, được ưa chuộng bởi hương vị đặc biệt và sự tiện lợi của nó. Món ăn này gồm một chiếc bánh mì giòn tan, được xé thành hai nửa và chứa hai quả trứng ốp la chiên giòn.",
//     sort: "Bánh mì",
//     star: 3.5,
//   },
//   {
//     name: "Hamburger Chả Lát",
//     price: 19000,
//     image: "./assets/images/banhmi5.jpg",
//     description:
//       "Hamburger là một món ăn phổ biến trên toàn thế giới, được biết đến với hương vị đậm đà và thịt bò xay giòn tan. Món ăn này bao gồm một chiếc bánh mì giòn, thịt bò xay, rau xanh và sốt.",
//     sort: "Bánh mì",
//     star: 4,
//   },
//   {
//     name: "Muffin Vanila",
//     price: 8000,
//     image: "./assets/images/banhngot1.jpg",
//     description:
//       "Muffin Vanilla là loại bánh ngọt hình trụ, được làm từ bột mì, đường, trứng, sữa, bơ và hương vani. Muffin Vanilla có hương vị thơm ngon của vani, vị ngọt và vị giòn của bánh mì, tạo nên một món ăn vô cùng hấp dẫn.",
//     sort: "Bánh ngọt",
//     star: 5,
//   },
//   {
//     name: "Bánh Mì Sấy Đường",
//     price: 10000,
//     image: "./assets/images/banhngot2.jpg",
//     description:
//       "Bánh Mì Sấy Đường là loại bánh ngọt hình trụ, được làm từ bột mì, đường, trứng, sữa, bơ và hương vani. Muffin Vanilla có hương vị thơm ngon của vani, vị ngọt và vị giòn của bánh mì, tạo nên một món ăn vô cùng hấp dẫn.",
//     sort: "Bánh ngọt",
//     star: 4.5,
//   },
//   {
//     name: "Muffin Nhí Nhảnh",
//     price: 23000,
//     image: "./assets/images/banhngot3.jpg",
//     description:
//       "Muffin Nhí Nhảnh là loại bánh ngọt hình trụ, được làm từ bột mì, đường, trứng, sữa, bơ và hương vani. Muffin Vanilla có hương vị thơm ngon của vani, vị ngọt và vị giòn của bánh mì, tạo nên một món ăn vô cùng hấp dẫn.",
//     sort: "Bánh ngọt",
//     star: 5,
//   },
//   {
//     name: "Bánh Đỏ",
//     price: 12000,
//     image: "./assets/images/banhngot4.jpg",
//     description:
//       "Bánh Đỏ là loại bánh ngọt hình trụ, được làm từ bột mì, đường, trứng, sữa, bơ và hương vani. Muffin Vanilla có hương vị thơm ngon của vani, vị ngọt và vị giòn của bánh mì, tạo nên một món ăn vô cùng hấp dẫn.",
//     sort: "Bánh ngọt",
//     star: 4,
//   },
//   {
//     name: "Su Kem",
//     price: 18000,
//     image: "./assets/images/banhngot5.jpg",
//     description:
//       "Bánh su kem (tiếng Pháp: chou à la crème) là món bánh ngọt ở dạng kem sữa được làm từ các nguyên liệu như bột mì, trứng, sữa, bơ... đánh đều tạo thành một hỗn hợp và sau đó bằng thao tác ép và phun qua một cái túi để định hình thành những bánh nhỏ và cuối cùng được nướng chín. Bánh có xuất xứ từ nước Pháp.",
//     sort: "Bánh ngọt",
//     star: 4,
//   },
//   {
//     name: "Hot Dog Đức",
//     price: 16000,
//     image: "./assets/images/banhman1.jpg",
//     description:
//       "Hot Dog Đức là một loại bánh mì kẹp xúc xích, được phổ biến trong ẩm thực Đức và được coi là món ăn nhanh phổ biến trên thế giới. Hot Dog Đức bao gồm một miếng xúc xích được nướng trên lửa và được xếp lên một chiếc bánh mì mềm dài và giòn, sau đó thêm các loại sốt như ketchup, mustard, hoặc sốt chua ngọt.",
//     sort: "Bánh mặn",
//     star: 3.5,
//   },
//   {
//     name: "Bánh Đùi Gà",
//     price: 16000,
//     image: "./assets/images/banhman2.jpg",
//     description:
//       "Bánh Đùi Gà thường được làm từ thịt gà, bò hoặc cả hai, và được ướp gia vị trước khi được nướng trên lửa hoặc áp chảo. Chiếc bánh mì cho Hot Dog Đức thường dài khoảng 20 đến 30 cm, được làm từ bột mì, men nở, sữa, trứng và bơ, với vỏ bánh mềm mịn và giòn.",
//     sort: "Bánh mặn",
//     star: 5,
//   },
//   {
//     name: "Bông Lan Trứng Muối Gà Cay Vuông",
//     price: 29000,
//     image: "./assets/images/banhman3.png",
//     description:
//       "Bông Lan Trứng Muối Gà Cay Vuông thường được làm từ thịt gà, bò hoặc cả hai, và được ướp gia vị trước khi được nướng trên lửa hoặc áp chảo. Chiếc bánh mì cho Hot Dog Đức thường dài khoảng 20 đến 30 cm, được làm từ bột mì, men nở, sữa, trứng và bơ, với vỏ bánh mềm mịn và giòn.",
//     sort: "Bánh mặn",
//     star: 4.5,
//   },
//   {
//     name: "Bông Lan Trứng Muối Gà Cay",
//     price: 55000,
//     image: "./assets/images/banhman4.jpg",
//     description:
//       "Bông Lan Trứng Muối Gà Cay thường được làm từ thịt gà, bò hoặc cả hai, và được ướp gia vị trước khi được nướng trên lửa hoặc áp chảo. Chiếc bánh mì cho Hot Dog Đức thường dài khoảng 20 đến 30 cm, được làm từ bột mì, men nở, sữa, trứng và bơ, với vỏ bánh mềm mịn và giòn.",
//     sort: "Bánh mặn",
//     star: 4,
//   },
//   {
//     name: "Pateso",
//     price: 9000,
//     image: "./assets/images/banhman5.jpg",
//     description:
//       "Pa tê sô là một loại bánh có nguồn gốc từ Pháp có vỏ bằng bột mì và bơ nướng lò, bên trong có nhân thịt heo, nấm mèo và hành khô. Nếu muốn thay đổi vị, có thể thay thế thịt heo bằng thịt bò, gà hoặc bất kỳ loại thịt nào tuỳ thích. Tất cả được trộn đều với gia vị và băm nhỏ rồi viên lại",
//     sort: "Bánh mặn",
//     star: 5,
//   },
//   {
//     name: "Bánh kem socola",
//     price: 200000,
//     image: "./assets/images/banhkem1.jpg",
//     description:
//       "Bánh kem socola được làm bằng cách pha trộn bột mì, đường và trứng với nhau, sau đó đưa vào lò nướng để nướng cho đến khi chín và vàng. Sau đó, bánh được cắt thành nhiều lớp mỏng và phết kem socola giữa các lớp bánh. Bề mặt bánh thường được trang trí bằng kem socola, hạt cacao hoặc socola nướng.",
//     sort: "Bánh kem",
//     star: 4.5,
//   },
//   {
//     name: "Bánh kem chanh",
//     price: 220000,
//     image: "./assets/images/banhkem2.jpg",
//     description:
//       "Bánh kem chanh được làm bằng cách pha trộn bột mì, đường và trứng với nhau, sau đó đưa vào lò nướng để nướng cho đến khi chín và vàng. Sau đó, bánh được cắt thành nhiều lớp mỏng và phết kem socola giữa các lớp bánh. Bề mặt bánh thường được trang trí bằng kem socola, hạt cacao hoặc socola nướng.",
//     sort: "Bánh kem",
//     star: 3.5,
//   },
//   {
//     name: "Bánh kem trứng muối",
//     price: 180000,
//     image: "./assets/images/banhkem3.jpg",
//     description:
//       "Bánh kem trứng muối được làm bằng cách pha trộn bột mì, đường và trứng với nhau, sau đó đưa vào lò nướng để nướng cho đến khi chín và vàng. Sau đó, bánh được cắt thành nhiều lớp mỏng và phết kem socola giữa các lớp bánh. Bề mặt bánh thường được trang trí bằng kem socola, hạt cacao hoặc socola nướng.",
//     sort: "Bánh kem",
//     star: 4.5,
//   },
//   {
//     name: "Bánh kem trứng socola",
//     price: 250000,
//     image: "./assets/images/banhkem4.jpg",
//     description:
//       "Bánh kem trứng muối được làm bằng cách pha trộn bột mì, đường và trứng với nhau, sau đó đưa vào lò nướng để nướng cho đến khi chín và vàng. Sau đó, bánh được cắt thành nhiều lớp mỏng và phết kem socola giữa các lớp bánh. Bề mặt bánh thường được trang trí bằng kem socola, hạt cacao hoặc socola nướng.",
//     sort: "Bánh kem",
//     star: 4,
//   },
//   {
//     name: "Bánh kem dâu",
//     price: 200000,
//     image: "./assets/images/banhkem5.jpg",
//     description:
//       "Bánh kem dâu là một loại bánh tráng miệng được pha chế từ bột mì, đường, trứng, bơ, sữa, dâu tây và kem tươi. Bánh kem dâu có vị ngọt nhẹ, hương vị dâu thơm ngon, độ giòn của bánh và độ mềm mịn của kem, tạo nên một món tráng miệng tuyệt vời.",
//     sort: "Bánh kem",
//     star: 5,
//   },
// ];

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

// search
const result = document.querySelector("#search .sreach_result");
const search = document.querySelector("#search input");
console.log(result);

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
      result.innerHTML += `<div class="box_result d-flex">
      <div class="result_img">
                <img src="./assets${product[i].image}" alt="${
        product[i].name
      }" />
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
          </div>`;
    }
  }
};

search.addEventListener("focusout", closesearch);
search.addEventListener("focusin", searchProgress);
search.addEventListener("keyup", searchProgress);
getProduct();
