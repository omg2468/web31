const city = document.querySelector("#city");
const districts = document.querySelector("#districts");
const wards = document.querySelector("#wards");
const spin = document.querySelector(".spin-loading");

async function getData() {
  const res = await fetch("https://provinces.open-api.vn/api/?depth=3")
    .then((response) => response.json())
    .catch((rejected) => {
      console.log(rejected);
    });
  return res;
}

getData().then((data) =>
  data.map((data) => {
    city.innerHTML += `<option value="${data.codename}">${data.name}</option>`;
  })
);
let a;
let changeCity = () => {
  districts.value = "default";
  districts.style.display = "block";
  districts.innerHTML = `<option value="default">Chọn huyện</option></select
            >`;
  wards.value = "default";
  wards.innerHTML = `<option value="default">Chọn xã</option>`;
  let citydata = city.value;
  if (citydata == "default") return;
  spin.style.display = "block";

  getData().then((data) => {
    a = data.findIndex((x) => x.codename === citydata);
    data[a].districts.map((data) => {
      districts.innerHTML += `<option value="${data.codename}">${data.name}</option>`;
      spin.style.display = "none";
    });
  });
};

let changedistricts = () => {
  wards.value = "default";
  wards.style.display = "block";
  wards.innerHTML = `<option value="default">Chọn xã</option>`;

  let districtsdata = districts.value;
  if (districtsdata == "default") return;
  spin.style.display = "block";

  getData().then((data) => {
    b = data[a].districts.findIndex((x) => x.codename === districtsdata);
    data[a].districts[b].wards.map((data) => {
      wards.innerHTML += `<option value="${data.codename}">${data.name}</option>`;
      spin.style.display = "none";
    });
  });
};

city.addEventListener("change", changeCity);
districts.addEventListener("change", changedistricts);

const nameForm = document.getElementById("name");
const phoneForm = document.getElementById("phone");
const emailForm = document.getElementById("email");
const sendForm = document.querySelector(".container.form button");
// name
let inputName = () => {
  nameForm.value = nameForm.value.toUpperCase();
  if (!nameForm.value) {
    document.querySelector(
      ".form-message.name"
    ).innerHTML = `<div class="text-danger">Vui lòng nhập tên</div>`;
  } else document.querySelector(".form-message.name").innerHTML = "";
};

nameForm.addEventListener("focusout", inputName);
// phone

let inputPhone = () => {
  if (!phoneForm.value) {
    document.querySelector(
      ".form-message.phone"
    ).innerHTML = `<div class="text-danger">Vui lòng nhập số điện thoại</div>`;
  } else document.querySelector(".form-message.phone").innerHTML = "";
};

phoneForm.addEventListener("focusout", inputPhone);

//email

let inputEmail = () => {
  let emailText = document.querySelector(".form-message.email");
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let result = regex.test(emailForm.value);
  if (!emailForm.value) {
    emailText.innerHTML = `<div class="text-danger">Vui lòng nhập email</div>`;
  } else if (!result) {
    emailText.innerHTML = `<div class="text-danger">Email không đúng định dạng</div>`;
  } else if (result) {
    emailText.innerHTML = "";
  }
};

emailForm.addEventListener("focusout", inputEmail);

/*modal 2
 */
const numberVisa = document.getElementById("number-visa");
const nameVisa = document.getElementById("name_visa");
const expiryVisa = document.getElementById("expiry");
const securityVisa = document.getElementById("security");
const messNumber = document.querySelector(".form-message.number-visa");
const messname = document.querySelector(".form-message.name_visa");
const messexpiry = document.querySelector(".form-message.expiry");
const messsecurity = document.querySelector(".form-message.security");

let checkbutton = () => {
  if (
    numberVisa.value &&
    nameVisa.value &&
    expiryVisa.value &&
    securityVisa.value &&
    !messNumber.innerHTML &&
    !messname.innerHTML &&
    !messexpiry.innerHTML &&
    !messsecurity.innerHTML
  ) {
    document.querySelector(".button_visa button").disabled = false;
  } else document.querySelector(".button_visa button").disabled = true;
};

// securityVisa
const cardInner = document.querySelector(".card_inner");

securityVisa.addEventListener("input", function () {
  if (this.value.length > this.maxLength)
    this.value = this.value.slice(0, this.maxLength);
  document.querySelector(
    ".visa_secret_number"
  ).innerHTML = `<p>${securityVisa.value}</p>`;
});

securityVisa.addEventListener("focusin", function () {
  cardInner.classList.toggle("rotate");
});

securityVisa.addEventListener("focusout", function () {
  cardInner.classList.toggle("rotate");
});

securityVisa.addEventListener("focusout", function () {
  if (!this.value || this.value.length < 3)
    messsecurity.innerHTML = `Vui lòng nhập đúng mã bảo mật`;
  else messsecurity.innerHTML = "";
  checkbutton();
});

//nameVisa
nameVisa.addEventListener("input", function () {
  if (!nameVisa.value) messname.innerHTML = `Vui lòng nhập tên`;
  else messname.innerHTML = "";
  document.querySelector(
    ".name_change"
  ).innerHTML = `${nameVisa.value.toUpperCase()}`;
});

//dayvisa
expiryVisa.addEventListener("input", function (e) {
  if (e.data == "/") {
  } else if (isNaN(e.data * 1)) {
    this.value = this.value.slice(0, this.value.length - 1);
  }
  if (this.value.length == 3) {
    this.value = this.value.slice(0, this.value.length - 1);
  } else if (this.value.length == 2) {
    this.value += "/";
  }

  document.querySelector(".time_change").innerHTML = this.value;
  checkbutton();
});

expiryVisa.addEventListener("focusout", function () {
  if (!this.value) {
    messexpiry.innerHTML = `Vui lòng nhập ngày hết hạn`;
  } else if (this.value.length < this.maxLength) {
    messexpiry.innerHTML = `Xin hãy nhập lại`;
  } else {
    messexpiry.innerHTML = "";
  }
  checkbutton();
});
let i = 0;
//numbervisa
function patternMatch({ input, template }) {
  try {
    let j = 0;
    let plaintext = "";
    let countj = 0;
    while (j < template.length) {
      if (countj > input.length - 1) {
        template = template.substring(0, j);
        break;
      }

      if (template[j] == input[j]) {
        j++;
        countj++;
        continue;
      }

      if (template[j] == "x") {
        template =
          template.substring(0, j) + input[countj] + template.substring(j + 1);
        plaintext = plaintext + input[countj];
        countj++;
      }
      j++;
    }

    return template;
  } catch {
    return "";
  }
}

const sectionone = document.querySelector(".section_one");
const sectiontwo = document.querySelector(".section_two");
const sectionthree = document.querySelector(".section_three");
const sectionfour = document.querySelector(".section_four");
numberVisa.oninput = (e) => {
  e.target.value = patternMatch({
    input: e.target.value,
    template: "xxxx xxxx xxxx xxxx",
  })
}
numberVisa.addEventListener("input", function (e) {
  if (isNaN(e.data * 1)) {
    this.value = this.value.slice(0, this.value.length - 1);
  }
  sectionone.innerHTML = this.value.slice(0, 4);
  sectiontwo.innerHTML = this.value.slice(5, 9);
  sectionthree.innerHTML = this.value.slice(10, 14);
  sectionfour.innerHTML = this.value.slice(15, 19);
  if (this.value.length == 0) {
    sectionone.innerHTML = "0000";
    sectiontwo.innerHTML = "0000";
    sectionthree.innerHTML = "0000";
    sectionfour.innerHTML = "0000";
  }
  if (this.value.length == 16) {
    checkbutton();
  }
});

numberVisa.addEventListener("focusout", function () {
  if (!numberVisa.value) {
    messNumber.innerHTML = `Vui lòng nhập số thẻ`;
  } else if (numberVisa.value.length < 16) {
    messNumber.innerHTML = `Mã số thẻ không hợp lệ`;
  } else {
    messNumber.innerHTML = "";
    console.log("lot");
  }
  checkbutton();
});

document.getElementById("name").innerHTML = `ok` && true;

//call api
const URL_PRODUCT = `https://api-product-rskq-44r04fk6p-omg2468.vercel.app/product`;
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
