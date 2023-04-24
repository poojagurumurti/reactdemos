import { msg, setMsg } from "./greet.js";

console.log(msg); //Welcome in Simplilearn!!!
function hello() {
  console.log("Hi All!!!");
}

setMsg("Learning Javascript"); //msg
console.log(msg); //Learning Javascript
hello(); //Hi All
