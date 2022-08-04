import "./App.css";
import Navbar from "./components/Navbar";
import Amount from "./components/Amount";
import About from "./components/About";
import Crisis from "./components/Crisis";
import Form from "./components/Form";
import Footer from "./components/Footer";
import CarouselDesktop from "./components/CarouselDesktop";
import CaroselMobile from "./components/CaroselMobile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="banner__dktp">
        <CarouselDesktop />
      </div>
      <div className="banner__mb">
        <CaroselMobile />
      </div>
      <Amount />
      <About />
      <Crisis />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
