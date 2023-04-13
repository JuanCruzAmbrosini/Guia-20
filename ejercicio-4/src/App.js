import "./App.css";
import { Navbar } from "./components/public/Navbar";
import { Main1 } from "./components/public/Main1";
import { Main2 } from "./components/public/Main2";
import { Footer } from "./components/public/Footer";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>

        <Route exact path="/" element={<Main1 />} />
        <Route exact path="/a" element={<Main2 />} />

      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
