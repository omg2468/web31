//function arrange for product
let arrange = (filter) => {
  let numberArr = [];
  let checkID = [];
  for (let i = 0; i < product.length; i++) {
    numberArr.push(product[i][filter]);
  }
  numberArr.sort((a, b) => a - b);
  for (let i = 0; i < numberArr.length; i++) {
    for (let x = 0; x < product.length; x++) {
      if (
        product[x][filter] == numberArr[i] &&
        !checkID.includes(product[x].id)
      ) {
        filterArr.push(product[x]);
        checkID.push(product[x].id);
        break;
      }
    }
  }
};

// Filter array for price
const filterOption = document.querySelector("#price");
filterOption.addEventListener("change", function () {
  if (filterOption.value == "default") {
    filterArr = [];
    arrange("id");
    if (pageOne.className == "page-link active") renderUI(0, 12);
    else renderUI(13, 20);
  } else if (filterOption.value == "increase") {
    filterArr = [];
    arrange("price");
    if (pageOne.className == "page-link active") renderUI(0, 12);
    else renderUI(13, 20);
  } else {
    filterArr = [];
    arrange("price");
    filterArr.reverse();
    console.log(filterArr);
    if (pageOne.className == "page-link active") renderUI(0, 12);
    else renderUI(13, 20);
  }
});
