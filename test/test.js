// async function getData() {
//   const data = await fetch("https://ok12345.vercel.app/products")
//     .then((response) => response.json())
//     .catch((rejected) => {
//       console.log(rejected);
//     });

//   return data;
// }

// let a = 12;
// console.log(a[0]);

// var titleToNumber = function (columnTitle) {
//   const alphabet = "0ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let alpha = alphabet.split("");
//   let value = 0;
//   for (let i = 0; i < columnTitle.length; i++) {
//     if (i == columnTitle.length - 1) {
//       value += alpha.findIndex((a) => a === columnTitle[i]);
//       return value
//     }
//     value +=
//       Math.pow(26, columnTitle.length - i - 1) *
//       alpha.findIndex((a) => a === columnTitle[i]);
//   }
// };

// console.log(titleToNumber("AB"));

let check = function (number, interge) {
  return number / interge == Math.floor(number / interge);
};

console.log(check(7, 5));

var isUgly = function (n) {
  // if (n = 1) return true;
  while (n != 2 && n != 3 && n != 5) {
    if (check(n, 2)) {
      n = n / 2;
    } else if (check(n, 3)) {
      n = n / 3;
    } else if (check(n, 5)) {
      n = n / 5;
    } else return false;
  }
};

console.log((56%3));
