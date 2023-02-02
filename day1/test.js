// var postApi = "https://jsonplaceholder.typicode.com/todos/1";

// fetch(postApi).then((response) => {
//     return response.json()
// }).then((json) => {
//     console.log(json)
// })

class BaseTeacherClass {
    constructor(id, age, name){
        this.id = id;
        this.age = age;
        this.name = name;
    }

    get getID(){
        return this.id
    }

    get getAge(){
        return this.age
    }

    get getName(){
        return this.name
    }
}

class FreelancerTeacher extends BaseTeacherClass {
  constructor(id, age, name) {
    super(id, age, name)
  }
}

class FulltimeTeacher extends BaseTeacherClass {
  constructor(id, age, name) {
    super(id, age, name)
  }
}
 
class ParttimeTeacher extends BaseTeacherClass {
  constructor(id, age, name) {
    super(id, age, name)
  }
}

let huong = new ParttimeTeacher(20901, 20, 'huong');


console.log(huong.getID)
