import logo from "./logo.svg";
import "./App.css";

// The data we changed in the view has updated the state.
// The data in the state has updated the view.
function App() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input onChange={handleChange} value={name} />
      <h1>{name}</h1>
    </div>
  );
}

export default App;
