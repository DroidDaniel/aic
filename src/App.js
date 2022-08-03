import "./App.css";
import Navbar from "./components/Navbar";
import Amount from "./components/Amount";
import About from "./components/About";
import Crisis from "./components/Crisis";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Amount />
      <About />
      <Crisis />
      <Form />
    </div>
  );
}

export default App;
