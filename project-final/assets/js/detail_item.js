// when click order
let orderbox = () => {
  let box = document.createElement("div");
  box.innerHTML = `Thêm vào giỏ hàng thành công <i class="bi bi-check-square-fill"></i>`;
  box.classList.add("order_box");
  if (number.innerHTML > 0) {
    document.body.append(box);
  }
  let cartNumber = document.querySelector(".cart_number");
  cartNumber.innerHTML =
    Number(number.innerHTML) + Number(cartNumber.innerHTML);
};

const dash = document.querySelector(".add-number-item .bi-dash-circle");
const add = document.querySelector(".add-number-item .bi-plus-circle");
const number = document.querySelector(".add-number-item span");
console.log(number);
dash.addEventListener("click", function () {
  if (number.innerHTML > 0) {
    number.innerHTML--;
  }
});

add.addEventListener("click", function () {
  number.innerHTML++;
});
