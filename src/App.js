import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AicCore from "./AicCore";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<AicCore />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
