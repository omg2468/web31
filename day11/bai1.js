// trong trường hợp sử dụng indexOf hoặc lastIndexOf, xuất hiện trừ 1 là không tìm thấy

let arr = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"];

// In arr ra console
console.log(arr);

// In ra độ dài (số lượng phần tử) của arr
console.log(arr.length);

// In ra phần tử thứ 3 trong mảng
console.log(arr[2]);

// In ra phần tử đầu tiên trong mảng
console.log(arr[0]);

// In ra phần tử cuối cùng của mảng
console.log(arr[arr.length - 1]);

// In ra phần tử có index = -1, chú ý kết quả
console.log(arr[-1]);

// Sử dụng vòng lặp in ra từng giá trị trong arr
for (let value in arr) {
  console.log(value);
}

// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng của giá trị đó trong arr
// Ví dụ:
// Index: 0, Value: 10
// Index: 1, Value: 20
// ...
for (i = 0; i < arr.length; i++) {
  console.log(`Index: ${i}, Value: ${arr[i]}`);
}
// Sử dụng vòng lặp in ra giá trị và chỉ mục tương ứng trong arr theo chiều ngược lại (từ cuối mảng)
for (i = arr.length - 1; i >= 0; i--) {
  console.log(`Index: ${i}, Value: ${arr[i]}`);
}
// Thêm "Ba"  cuối mảng sử dụng phương thức push()
arr.push("Ba");

// Thêm "Thảo" vào cuối mảng mà KHÔNG SỬ DỤNG phương thức push()
arr[arr.length] = "Thảo";
// Thêm "Béo Ú" vào vị trí đầu tiên trong mảng sử dụng phương thức unshift()
arr.unshift("Béo Ú");
console.log(arr);

// Xóa phần tử ở vị trí cuối cùng của mảng sử dụng phương thức pop() và in ra giá trị đó
let arr2 = arr.pop();

// Xóa phần tử ở vị trí đầu tiên trong mảng sử dụng phương thức shift() va in ra giá trị đó
let arr3 = arr.shift();

// Sao chép 2 phần tử đầu tiên sử dụng phương thức slice() và in ra kết quả
console.log(arr.slice(0, 2));

// Sao chép toàn bộ phần tử của mảng sử dụng phương thức slice()
console.log(arr.slice());
// Sao chép 3 phần tử cuối cùng của mảng sử dụng phương thức slice()
console.log(arr.slice(-3));
// Xóa 2 phần tử thứ 2 và 3 ("Nhi" và "Hùng") khỏi mảng sử dụng phương thức splice()
arr.splice(1, 2);
console.log(arr);
// Thêm lại "Nhi" và "Hùng" vào vị trí thứ 2 và 3 sử dụng phương thức splice()
arr.splice(1, 0, "nhi", "hùng");
console.log(arr);
// Tìm và in ra chỉ mục của "Ba" ra console sử dụng phương thức indexOf()
console.log(arr.indexOf("Ba"));
// Tìm và in ra chỉ mục con "Thảo" ra console, chú ý kết quả
console.log(arr.indexOf("Thảo"));
// Kiểm tra "Mai Anh" có trong mảng arr hay không sử' dụng phương thức includes() và in ra kết quả
console.log(arr.includes("Mai Anh"));
// Sử dụng alert() in arr, chú ý kết quả
// alert(arr)
// Nối các tên trong mảng thành một chuỗi sử dụng phương thức join() và in ra console
console.log(arr.join());
// Đảo ngược các giá trị trong mảng arr sử dụng phương thức reverse() và in ra kết quả
console.log(arr.reverse());
// Đổi chỗ 2 phần tử đầu và cuối mảng

// Xóa toàn bộ phần tử trong mảng
arr.length = 0;
console.log(arr);
/**
 * Tính tổng các số trong một mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Tổng các số trong mảng
 */
function sum(numbers) {
  let total = 0;
  for (i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}
let number = [1, 2, 3, 4, 5, 5, 6, 3];
console.log(sum(number));

/**
 * Tính trung bình cộng các số trong mảng
 *
 * @param {number[]} numbers Mảng các số
 *
 * @return {number} Trung bình cộng các số trong mảng
 */
function avg(numbers) {
  let total = 0;
  for (i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total / numbers.length;
}

console.log(avg(number));

arr.length
