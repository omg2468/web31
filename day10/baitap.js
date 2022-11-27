/**
 * Kiểm tra một số là số chẵn hay không
 *
 * @param {number} number Số bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isEven(number) {
  if (number % 2 === 1) {
    console.log("số lẻ");
  } else console.log("số chẵn");
}

isEven(8);

/**
 * Kiểm tra một số nguyên có chia hết cho 3 và 5 hay không
 *
 * @param {number} number Số bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isDivisibleByThreeAndFive(number) {}

/**
 * Tính tiền hoa hồng mà đại lý nhận được
 *
 * - Nếu totalSales <= 100 triệu thì hoa hồng nhận là 5% doanh số
 * - Nếu totalSales <= 300 triệu thì hoa hồng nhận là 10% doanh số
 * - Nếu totalSales > 300 triệu thì hoa hồng nhận là 20% doanh số
 *
 *
 * @param {number} totalSalse Doanh số bán hàng
 *
 * @return {number} Hoa hồng trả cho đại lý
 */
function calcCommissions(totalSalse) {
  if (totalSalse <= 100) {
    return totalSalse * 0.05;
  } else if (totalSalse <= 300) {
    return totalSalse * 0.1;
  } else return totalSalse * 0.2;
}

console.log(calcCommissions(-20));
/**
 * Kiểm tra 1 ký tự có phải thuộc bảng chữ cái hay không (a-zA-Z)
 *
 * @param {string} character Ký tự bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isAlphabe(character) {
    if ((character >= "a" && character <= "z") || (character >= "A" && character <= "Z")) 
    console.log('đây là chữ')
    else console.log('đây không phải là chữ')
}

isAlphabe("A")
/**
 * Kiểm tra 1 chữ cái bất kỳ có phải là nguyên âm hay không?
 *
 * @param {string} character Chữ cái bất kỳ
 *
 * @return {boolean} Kết quả
 */
function isVowel(character) {
    switch (character) {
      case "u":
        console.log("đây là chữ nguyên âm");
        break;
      case "e":
        console.log("đây là chữ nguyên âm");
        break;
      case "o":
        console.log("đây là chữ nguyên âm");
        break;
      case "a":
        console.log("đây là chữ nguyên âm");
        break;
      case "i":
        console.log("đây là chữ nguyên âm");
        break;
      case "U":
        console.log("đây là chữ nguyên âm");
        break;
      case "E":
        console.log("đây là chữ nguyên âm");
        break;
      case "O":
        console.log("đây là chữ nguyên âm");
        break;
      case "A":
        console.log("đây là chữ nguyên âm");
        break;
      case "I":
        console.log("đây là chữ nguyên âm");
        break;
      case "a":
        console.log("đây là chữ nguyên âm");
        break;
        default : console.log('nothing')
    }
}

isVowel('C')

/**
 * Kiểm tra một chữ cái bất kỳ là viết hoa hay viết thường
 *
 * @param {string} character Chữ cái bất kỳ
 *
 * @return {boolean}
 */
function isUppercase(character) {}

/**
 * Kiểm tra độ dài 3 cạnh bất kỳ có tạo thành một tam giác hợp lệ hay không?
 *
 * Tam giác hợp lệ là tam giác có tổng 2 cạnh bất kỳ lớn hơn cạnh còn lại
 *
 * @param {number} a Chiều dài cạnh a
 * @param {number} b Chiều dài cạnh b
 * @param {number} c Chiều dài cạnh c
 *
 * @return {boolean} Kết quả
 */
function isValidTriangle(a, b, c) {}

/**
 * Viết chương trình máy tính đơn giản
 *
 * @param {number} operand1 Toán hạng 1
 * @param {'+' | '-' | '*' | '/'} operator Toán tử
 * @param {number} operand2 Toán hạng 3
 *
 * @return {number} Kết quả phép tính
 */
function simpleCalculator(operand1, operator, operand2) {}

for (let a = 1; a <= 6; a++)
{
    console.log(a)
}

/**
 * In dãy số lẻ trong khoảng từ 1 đến 100
 */



/**
 * In dãy số chẵn trong khoảng từ 1 đến 100
 */
function printEvenNumbers() {}

/**
 * Tính tổng các số tự nhiên trong khoảng từ 1 đến `n`
 * @param {number} n Số nguyên dương bất kỳ
 */
function sumOfNumbers(n) {
    let a = 0;
    for(let x = 1; x < n; x++) {
        console.log(a = a + x)
    }
}
sumOfNumbers(4)


/**
 * Tính tổng các số lẻ trong khoảng từ `start` đến `end`
 *
 * @returns {number} Tổng các số lẻ
 */
function sumOfOddNumbers(start, end) {}

/**
 * Tìm các ước số của một số bất kỳ
 *
 * @param {number} number Số nguyên dương bất kỳ
 *
 * @returns {number[]} Mảng chứa các ước số *[v1, v2, ...]*
 */
function divisor(number) {}

/**
 * Tính số lần gấp 1 tờ giấy có độ mỏng 0.1mm để đạt được độ dày mong muốn
 *
 * @param {number} thickness Độ dày mong muốn tính theo đơn vị m
 *
 * @return {number} Số lần gấp giấy để đạt được độ dày yêu cầu
 */
function countFolding(thickness) {}

/**
 * Tính xem sau bao nhiêu năm nữa thì tuổi cha gấp 2 lần tuổi con
 *
 * Tuổi cha lớn hơn tuổi con ít nhất 18 tuổi
 *
 * @param {number} dad Tuổi của cha
 * @param {number} son Tuổi của con
 *
 * @returns {number} Số năm để tuổi cha gấp 2 lần tuổi con
 */
function countYears(dad, son) {}

function countLegs() {}