import React from "react";
// import { ReactDOM } from "react";

function MenuDemo(props) {
  // const number = [100, 200, 300, 40, 500];
  // const list = number.map;
  const newNum = number.map((num) => {
    return <li>{num}</li>;
  });
  return <ul>{newNum}</ul>;
}
const number = [100, 200, 300, 40, 500];
export default MenuDemo;
