class Person {
  constructor(name) {
    this.name = name;
    // this.setName(name);
  }
  getName() {
    return this.name;
  }
  setName(newName) {
    newName = newName.trim();
    if (newName == "") {
      throw "the name should not be empty";
    }

    this.name = newName;
  }
}
let person = new Person("Jarry");
console.log(person);

person.setName("Marry");
console.log(person.getName());

let john = new Person("John Doe");
let name = john.getName;
