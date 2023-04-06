// when click order
let orderbox = () => {
  let box = document.createElement("div");
  box.innerHTML = `Thêm vào giỏ hàng thành công <i class="bi bi-check-square-fill"></i>`;
  box.classList.add("order_box");
  document.body.append(box);
  let cartNumber = document.querySelector(".cart_number");
  cartNumber.innerHTML++;
};
