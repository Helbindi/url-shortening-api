import { useState } from "react";
import "./index.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navigation />
      {/* <Hero /> */}
      <Footer />
    </div>
  );
}

export default App;
