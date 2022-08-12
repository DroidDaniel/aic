import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Amount from "./components/Amount/Amount";
import Crisis from "./components/Crisis/Crisis";
import Form from "./components/Form/Form";
import Carousel from "./components/Carousel/Carousel";

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
