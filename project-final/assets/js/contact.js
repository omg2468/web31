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

let inputPhone = (e) => {
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

// button send
const allButton = document.querySelectorAll('.button')
let loading = function(){
  location.reload();
}
allButton.forEach(btn => {
  btn.addEventListener("click", loading);
})
