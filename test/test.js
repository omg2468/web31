// const URL = `https://api-product-g1bk.vercel.app/product`;
// var product;
// const getProduct = async (API) => {
//   const res = await axios.get(API);
//   const data = await res.data;
//   product = data;
//   return data;
// };

// const button = document.querySelector("button");

// let change = () => {
//   console.log(product);
//   target.innerHTML = product[0].image;
// };
// let target = document.getElementById("demo");
// button.addEventListener("click", change);
// console.log(target);
// getProduct(URL);
// console.log(product);

const URL = `https://api-product-g1bk.vercel.app/product`;
var product;
const getProduct = async () => {
  const res = await fetch(URL);
  const data = await res.json();
  product = data
  return data
};

