/**
 * Kiểm tra số một số nguyên dương bất kỳ có phải số nguyên tố hay không
 *
 * Số nguyên tố là số chỉ chia hết cho `1` và chính nó
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {boolean} Số `n` cho có phải số nguyên tố hay không
 */
function isPrime(n) {
  for (x = 2; x < n; x++) {
    if (n % x === 0) return false;
  }
  return true;
}

console.log(isPrime(9));

/**
 * Tính tổng các số nguyên tố trong khoảng từ 1 đến n
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {number} Tổng các số nguyên tố trong khoảng từ `1` đến `n`
 */
function sumOfPrimes(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

/**
 * Tìm số Fibonacci thứ n
 *
 * Dãy Fibonacci là dãy số bắt đầu bằng 0 và 1, các số tiếp theo bằng tổng 2 số trước nó
 *
 * VD: 0 1 1 2 3 5 8 13 ... (Số thứ 1 là 0, số thứ 2 là 1, số thứ 3 là 2, ...)
 *
 * VD: `n = 5`, kết quả số Fibonacci thứ 5 là `3`
 *
 * @param {number} n Số nguyên dương bất kỳ (n > 0)
 *
 * @return {number} Số Fibonacci thứ `n`
 */
function fibonacci(n) {
  let a = 0;
  let b = 1;
  let c;
  if (n === 0) return a;
  else if (n == 1) return b;
  else {
    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return c;
  }
}

/**
 * Tính giai thừa của một số nguyên bất kỳ
 *
 * Giai thừa của một số `n = 1 * 2 * 3 * ... * (n - 1) * n`
 *
 * @param {number} n Số nguyên dương bất kỳ (n >= 0)
 *
 * @return {number} Giai thừa của `n`
 */

function factorial(n) {
  if (n == 0 || n == 1) return 1;
  else return n * factorial(n - 1);
}

function factorial(n) {
    let x = 1;
    for (let i = 2; i <= n; i++){
        x = x*=i
    }
    return x
}
console.log(factorial(5));


/**
 * Kiểm tra một số nguyên dương bất kỳ có phải số Strong hay không
 *
 * Số Strong là số có tổng giai thừa các chữ số bằng chính nó
 *
 * VD: 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145
 *
 * @param {number} n Số nguyên dương bất kỳ
 *
 * @return {boolean} Số `n` có phải là số Strong hay không
 */
function isStrong(n) {
  let temp = n;
  let total = 0;
  while(temp != 0){
    let reminder = temp % 10;
    total += factorial(reminder);
    temp = (temp -reminder)/10;
  }
  return total == n;
}

console.log(isStrong(146))
