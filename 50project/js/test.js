function Person() {
  this.firstName = "Per";
  this.lastName = "son";
  this.sayName = function () {
    return this.firstName + " " + this.lastName;
  };
}

