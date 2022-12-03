let computer = {
    age:22,
    ram: 3,
    screen: 15.6,
    price: "15 triệu",
    name: "lenovo",
    hello: 'hello',
    game: {
        lienminh: "lien minh",
        lol: "lol",
    },
    feature(code){
        console.log(js);
        console.log(java); 
    },
    toString(){
        return this.name
    },
    valueOf(){
        return this.age
    }
}

let empty = {}
empty.name = 'ok'
empty.age = function(){console.log('30')}


console.log(empty.age)

// xóa
// delete empty.name
// duyệt qua các thuộc tính
for (let key in empty) {
    value = empty[key];
    console.log(key,value)
}

console.log(empty)


console.log('name' in empty)
console.log('xyz' in empty)

let coordinates = {
    a: {
        x: 1,
        y: 2,
    },
    b: {
        x: 5,
        y: 8,
    },
};

// Tính khoảng cách giữa 2 điểm A, B

const long = (coordinate) => {
    console.log(
      Math.sqrt(
        Math.pow((coordinate.a.x - coordinate.a.y), 2) + Math.pow((coordinate.b.x - coordinate.b.y), 2) 
      )
    );
};

long(coordinates);

let person = {
    name: "đức anh",
    age: 28,
    spaek(){
        console.log('hello' + this.name)
    }
}

console.log(String(computer))



function Cat(name,color,age){
    this.name = name;
    this.color = color;
    this.age = age;
}

const cat1 = new Cat('lisa', 'red', 22)
const cat2 = new Cat('lili', 'white' , 30)

console.log(cat1)


let arr = [1,2,3,4,5,6]

console.log(arr)

arr[2] = 4;

console.log(arr)

for (let index in Array){
    let a = Array[index];
    console.log(a)
}

