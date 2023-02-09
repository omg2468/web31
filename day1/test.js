// var postApi = "https://jsonplaceholder.typicode.com/todos/1";

// fetch(postApi).then((response) => {
//     return response.json()
// }).then((json) => {
//     console.log(json)
// })
// Cách 1
class BaseTeacherClass1 {
  constructor(id, age, name) {
    this.id = id;
    this.age = age;
    this.name = name;
  }

  get getID() {
    return this.id;
  }

  get getAge() {
    return this.age;
  }

  get getName() {
    return this.name;
  }
}

class FreelancerTeacher1 extends BaseTeacherClass1 {
  constructor(id, age, name) {
    super(id, age, name);
  }
}

class FulltimeTeacher1 extends BaseTeacherClass1 {
  constructor(id, age, name) {
    super(id, age, name);
  }
}

class ParttimeTeacher1 extends BaseTeacherClass1 {
  constructor(id, age, name) {
    super(id, age, name);
  }
}

// Cách 2

class FreelancerTeacher2 {
  constructor(id, age, name) {
    this.id = id;
    this.age = age;
    this.name = name;
  }
  get getID() {
    return this.id;
  }

  get getAge() {
    return this.age;
  }

  get getName() {
    return this.name;
  }
}

class FulltimeTeacher2{
  constructor(id, age, name) {
    this.id = id;
    this.age = age;
    this.name = name;
  }
  get getID() {
    return this.id;
  }

  get getAge() {
    return this.age;
  }

  get getName() {
    return this.name;
  }
}

class ParttimeTeacher2 {
  constructor(id, age, name) {
    this.id = id;
    this.age = age;
    this.name = name;
  }
  get getID() {
    return this.id;
  }

  get getAge() {
    return this.age;
  }

  get getName() {
    return this.name;
  }
}

var huong = new ParttimeTeacher2(132, 20, "huong");
var lu = new FulltimeTeacher2(12,30, 'lu');

console.log(huong.getAge)
console.log(lu.getAge)
