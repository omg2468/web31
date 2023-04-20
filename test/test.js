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

var removeDuplicateLetters = function (s) {
  var countObject = {}; //contains each letters count in string
  var isInStack = {}; //tells whether a letter is already in the stack or not
  var stack = []; //the final stack which will contain the string
  for (var i = 0; i < s.length; i++) {
    if (!countObject[s[i]]) {
      countObject[s[i]] = 0;
    }
    countObject[s[i]]++;
    isInStack[s[i]] = false;
  }
  for (var i = 0; i < s.length; i++) {
    var currentLetter = s[i];
    var stackTop = stack[stack.length - 1];
    countObject[currentLetter]--;
    if (isInStack[currentLetter]) {
      continue;
    }
    if (currentLetter < stackTop) {
      while (currentLetter < stackTop && countObject[stackTop] > 0) {
        isInStack[stack.pop()] = false;
        stackTop = stack[stack.length - 1];
      }
    }
    isInStack[currentLetter] = true;
    stack.push(currentLetter);
  }
  return stack.join("");
};
