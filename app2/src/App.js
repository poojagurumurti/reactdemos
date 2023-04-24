import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Posts from "./Posts";
import MenuDemo from "./MenuDemo";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Posts />
      <MenuDemo />
    </div>
  );
};

export default App;
