const city = document.querySelector("#city");
console.log(city);
const districts = document.querySelector("#districts");
console.log(document.body);
const wards = document.querySelector("#wards");

async function getData() {
  const data = await fetch("https://provinces.open-api.vn/api/?depth=3")
    .then((response) => response.json())
    .catch((rejected) => {
      console.log(rejected);
    });
  return data;
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
  getData().then((data) => {
    a = data.findIndex((x) => x.codename === citydata);

    data[a].districts.map((data) => {
      districts.innerHTML += `<option value="${data.codename}">${data.name}</option>`;
    });
  });
};

let changedistricts = () => {
  wards.value = "default";
  wards.style.display = "block";
  wards.innerHTML = `<option value="default">Chọn xã</option>`;

  let districtsdata = districts.value;
  if (districtsdata == "default") return;
  getData().then((data) => {
    b = data[a].districts.findIndex((x) => x.codename === districtsdata);
    data[a].districts[b].wards.map((data) => {
      wards.innerHTML += `<option value="${data.codename}">${data.name}</option>`;
    });
  });
};

city.addEventListener("change", changeCity);
districts.addEventListener("change", changedistricts);

const nameForm = document.getElementById("name");
const phoneForm = document.getElementById("phone");
const emailForm = document.getElementById("email");
const sendForm = document.querySelector(".container.form button");
console.log(sendForm);
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
    emailText.innerHTML = `<div class="text-danger">Xin hãy nhập lại email</div>`;
  } else if (result) {
    emailText.innerHTML = "";
  }
};

emailForm.addEventListener("focusout", inputEmail);

/*modal 2
 */
const numberVisa = document.getElementById("number_visa");
const nameVisa = document.getElementById("name_visa");
const expiryVisa = document.getElementById("expiry");
const securityVisa = document.getElementById("security");
const messNumber = document.querySelector(".form-message.number_visa");
const messname = document.querySelector(".form-message.name_visa");
const messexpiry = document.querySelector(".form-message.expiry");
const messsecurity = document.querySelector(".form-message.security");

console.log(securityVisa.value);

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
  checkbutton();
});

securityVisa.addEventListener("focusin", function () {
  cardInner.classList.toggle("rotate");
});

securityVisa.addEventListener("focusout", function () {
  cardInner.classList.toggle("rotate");
});

securityVisa.addEventListener("change", function () {
  if (!this.value || this.value.length < 3)
    messsecurity.innerHTML = `Vui lòng nhập đúng mã bảo mật`;
  else messsecurity.innerHTML = "";
});

//nameVisa
nameVisa.addEventListener("input", function () {
  if (!nameVisa.value) messname.innerHTML = `Vui lòng nhập tên`;
  else messname.innerHTML = "";
  document.querySelector(
    ".name_change"
  ).innerHTML = `${nameVisa.value.toUpperCase()}`;
  checkbutton();
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

expiryVisa.addEventListener("change", function () {
  if (!this.value) {
    messexpiry.innerHTML = `Vui lòng nhập ngày hết hạn`;
  } else if (this.value.length < this.maxLength) {
    messexpiry.innerHTML = `Xin hãy nhập lại`;
  } else {
    messexpiry.innerHTML = "";
  }
});
let i = 0;
//numbervisa
const sectionone = document.querySelector(".section_one");
const sectiontwo = document.querySelector(".section_two");
const sectionthree = document.querySelector(".section_three");
const sectionfour = document.querySelector(".section_four");
const sectionAll = document.querySelectorAll(".number_visa div");
console.log(sectionAll[0].innerHTML);
numberVisa.addEventListener("input", function (e) {
  if (isNaN(e.data * 1)) {
    this.value = this.value.slice(0, this.value.length - 1);
  }
  sectionone.innerHTML = this.value.slice(0, 4);
  sectiontwo.innerHTML = this.value.slice(4, 8);
  sectionthree.innerHTML = this.value.slice(8, 12);
  sectionfour.innerHTML = this.value.slice(12, 16);
  if (this.value.length == 0) {
    sectionone.innerHTML = '0000';
    sectiontwo.innerHTML = '0000';
    sectionthree.innerHTML = '0000';
    sectionfour.innerHTML = '0000';
  }
  if (this.value.length == 16) {
    checkbutton();
  }
});

numberVisa.addEventListener("change", function () {
  if (!this.value) {
    messNumber.innerHTML = `Vui lòng nhập số thẻ`;
  } else if (this.value.length != 16) {
    messNumber.innerHTML = `Mã số thẻ không hợp lệ`;
  } else messNumber.innerHTML = "";
});
