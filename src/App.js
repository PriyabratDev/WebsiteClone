import { useState } from "react";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Footer2 from "./components/Footer/Footer2";

function App() {
  const [c, setc] = useState("#15171C");

  return (
    <div className="App">
      <Navbar c={c} />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default App;
