const URL = `https://api-product-bq1jgsjx1-omg2468.vercel.app/product?id=1`;
var product;
const getProduct = async (API) => {
  const res = await axios.get(API);
  const data = await res.data;
  product = data;
  return data;
};

let change = () => {
  console.log(product);
  target.value = product[0].name;
};
let target = document.querySelector("input");
target.addEventListener("input", change);
console.log(target);
getProduct(URL);
console.log(product);


let a = 'abawawd'

for(let c of a) {
  console.log(c);
}