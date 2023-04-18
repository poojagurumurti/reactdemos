const p = {
  name: "pooja",
  age: 21,
  skill: "Java",
};
//ES5
// let name = p.name;
// let age = p.age;
// let skill = p.skill;

//ES6
let { name, age, skill } = p;
let { name: n, age: a, skill: s } = p; //assign differnt variable names for thr object key
// console.log(name, age, skill);
console.log(name);
console.log(n);
