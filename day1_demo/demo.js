function d1() {
  var x = 100;
}
//var is having the global scope, var allows to redclare the variable without any issue
var c1 = 10;
var c1 = 60;
for (var i = 0; i < 5; i++) {
  console.log("Inside the loop", i);
}
console.log("Outside the loop", i);

//let is having the blocked scope, redeclaration is not possible
let a = 10;

for (let i = 0; i < 5; i++) {
  console.log("Inside the loop", i);
}
console.log("Outside the loop", i);
