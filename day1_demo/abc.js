let inc = 0;
const salary = [300, 789, 674, 599, 193, 483];

let bonus;
salary.forEach((num) => console.log(num));
salary.forEach((num) => {
  inc = inc + num;
});
// document.write("bonus=" + inc);

//map()
const numArray = [1, 2, 3, 4, 5];
const double = numArray.map((num) => {
  return num * 5;
});
console.log(double);

//find()
const users = [
  { name: "pooja", age: 20 },
  { name: "suraj", age: 22 },
  { name: "prerana", age: 23 },
  { name: "pooja", age: 28 },
];
users.find((user) => user.name == "pooja");

//filter
let object = [
  { flag: 1, a: 1 },
  { flag: 0, a: 2 },
  { flag: 1, a: 3 },
];
object.filter((obj) => {
  if (obj.flag == 1) {
    console.log("flag:" + obj.flag + ",a:" + obj.a);
  }
});

//every
const computers = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 },
];
computers.every((comp) => comp.ram > 2);

//some
const computers1 = [
  { name: "Apple", ram: 24 },
  { name: "Compaq", ram: 4 },
  { name: "Acer", ram: 32 },
];
computers1.osme((comp) => comp.ram > 16);
