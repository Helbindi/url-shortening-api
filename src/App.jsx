import { useState } from "react";
import "./index.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <Navigation />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
