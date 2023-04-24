import logo from "./logo.svg";
import "./App.css";
import Person from "./comp1/Person";
import Info from "./comp1/Info";
import React, { Component } from "react";
import Example from "./comp1/example";

class App extends Component {
  constructor() {
    super(props);
    this.state = { hello: "simplilearn" };
    this.changes = this.changes.bind(this);
  }
  render() {
    return (
      <div>
        <h1>Lifecycle</h1>
        <button onClick={this.changes}>Click me</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("component mounted/didmount");
  }
  changes() {
    this.setState({ Hello: "Learning React and Javascript" });
  }
  shouldComponentUpdate(newProp, newState) {
    return true;
  }
  componentWillUpdate(nextProps, newState) {
    console.log("Component update");
  }
  componentWillUnmount() {
    console.log("Component will unmount ");
  }
}

// class codestudio extends Component {
//   constructor() {
//     super();
//     this.state = { username: "Pooja", city: " Udupi" };
//   }
//   newstate = () => {
//     //method triggers UI update
//     this.setState({ username: "Trigun" });
//   };
//   render() {
//     return (
//       <>
//         <h1>codestudio</h1>
//         <h2>
//           Hello{this.state.username},Welcome plz visit our office in
//           {this.state.city}
//         </h2>
//         <button onClick={this.newstate}>Click to change the name </button>
//         <Example />
//       </>
//     );
//   }
// }
// class Employee extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Employee details</h2>
//         <p>
//           <label>
//             Name: <b></b>
//           </label>
//         </p>
//         <Department Name={this.props.DeptName} />
//       </div>
//     );
//   }
// }
// class Department extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Department details</h2>
//         <p>
//           <label>
//             Name:<b></b>
//           </label>
//         </p>
//       </div>
//     );
//   }
// }
// const element = <Employee Name="Pooja" DeptName="IT" />;
// function App() {
//   ///useState() is a Hook that allows you to have state varables in functional components
//   const [name, setName] = React.useState("");
//   const greet = "Welcome User";
//   return (
//     <div className="App">
//       <h1>My First Functional Component</h1>
//       <Person name="Pooja" age={21} />
//       <Info />
//       <h2 className="hello">Javascript</h2>
//       <h2 className="hello">{2 + 2 + 9}</h2>
//       <h2 style={Bstyle} This is my Style font></h2>
//       <p data-demo>Learning Jsk</p>
//       {/* <ul>
//         <li>
//           <button>onClick={(event) => alert(event.target.id)}</button>
//         </li>
//       </ul> */}
//       <form>
//         <label htmlFor="name-field">Name</label>
//         <input
//           id="name-field"
//           value={name}
//           onChange={(event) => {
//             setName(event.target.value);
//           }}
//         />
//       </form>
//       <p>
//         <strong>Current Value :</strong>
//         {name || "(empty)"}
//       </p>
//     </div>
//   );
// }

export default App;
// export default codestudio;
