import "./App.css";
import Navbar from "./components/Navbar";
import Amount from "./components/Amount";
import About from "./components/About";
import Crisis from "./components/Crisis";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Amount />
      <About />
      <Crisis />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
