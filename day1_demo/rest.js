// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2, 3, 4, 5));

//it will gather all arguments, but if it's at the end of a
//list,it will gather every argument that is remaining
function sum1(...params) {
  return params.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum1(1, 2, 3));
console.log(sum1(1, 2, 3, 4, 5));

function restTest(one, two, ...args) {
  console.log(one); //1
  console.log(two); //2
  console.log(args); //3,4,5,6
}
restTest(1, 2, 3, 4, 5, 6);

function greet(greeting, ...names) {
  return `${greeting} ${names.join(",")}!`;
}
console.log(greet("hello ", "steev", "Bills"));
console.log(greet("hello"));
