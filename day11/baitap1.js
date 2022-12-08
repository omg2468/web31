let dog = {
  name: "hello",
  age: 5,
  bread: "dog",
  gender: "đực",
  color: "white",
  legs: 4,
  "favorite food": "meet",
};

const eat = () => {
  console.log(`${dog.name} is eating ${dog["favorite food"]}, yum yum...`);
};
eat();

console.log(dog);

let letters = ["a", "b", "c"];

let length = letters.push("d");
console.log(length); // 4
console.log(letters); // (4) ['a', 'b', 'c', 'd']
letters[10] = 10;
console.log(letters);

const guessList = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};

function greeting(name) {
  if (name in guessList) {
    return "Hi, I'm " + name + ", and I'm from " + guessList[name] + "!";
  } else {
    return "Hi! I'm guess.";
  }
}

console.log(greeting("Randy"));

const myFamily = {
  Fred: 34,
  Susan: 32,
  Emily: 8,
  Tom: 5,
};

/**
 * Tính xem sau `n` năm nữa thì các thành viên trong gia đình bao nhiêu tuổi
 *
 * Lưu ý: Object cũ không được thay đổi, kết quả trả về phải là một object mới
 *
 * @param {{[key: string]: number}} obj Danh sách thành viên trong gia đình
 * @param {number} n Số năm bất kỳ
 *
 * @return {{[key: string]: number}} Danh sách thành viên và số tuổi tương ứng sau `n` năm
 */
function age(n) {
  let newAge = {};
  for (let key in myFamily) {
    newAge = {
      [key] : myFamily[key]
    }
  }
  console.log(newAge);
}

console.log(age(3));

const items = {
  tv: 300,
  ipad: 1000,
  ooo: 2000,
};

/**
 * Tính tổng giá trị (value) các items trong object đầu vào
 *
 * @param {{[key: string]: number}} items Danh sách items
 *
 * @return {number} Tổng giá trị các items
 */

function total(obj) {
    let sum = 0
  for (let key in items) {
    sum += items[key]
  }
  return sum
}
console.log(total())

/**
 * Lọc và trả về danh sách các items có giá trị cao (value >= 1000) trong danh sách đầu vào
 *
 * Lưu ý: Object ban đầu không được phép thay đổi, kết quả trả về phải là một object mới
 *
 * @param {{[key: string]: number}} items Danh sách items
 *
 * @return {{[key: string]: number}} Danh sách các items có giá trị cao
 */
function expensiveItems() {
    let newItems = {}
    for (let key in items){
        if (items[key] >= 1000) {
            newItems[key] = items[key]
        }
    }
    console.log(newItems);
}
expensiveItems();




// for (let val of ['a', 'b', 'c'])
//   console.log(val);            // a, b, c (array values)

// for (let val of 'str')
//   console.log(val);            // s, t, r (string characters)

// // for (let val of {a: 1, b: 2, c: 3})
// //   console.log(prop);           // TypeError (not iterable)

// for (let val of new Set(['a', 'b', 'a', 'd']))
//   console.log(val);            // a, b, d (Set values)

//   for (let prop in ['a', 'b', 'c'])
//   console.log(prop);            // 0, 1, 2 (array indexes)

// for (let prop in 'str')
//   console.log(prop);            // 0, 1, 2 (string indexes)

// for (let prop in {a: 1, b: 2, c: 3})
//   console.log(prop);            // a, b, c (object property names)

// for (let prop in new Set(['a', 'b', 'a', 'd']))
//   console.log(prop);            // undefined (no enumerable properties)
