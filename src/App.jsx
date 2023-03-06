import { useEffect, useRef, useState } from "react";
import "./index.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Content from "./components/Content";

function App() {
  const [links, setLinks] = useState(
    // default link state to be our local storage if exists, else empty array
    localStorage.getItem("shorten-links")
      ? JSON.parse(localStorage.getItem("shorten-links"))
      : []
  );

  let inputRef = useRef();

  useEffect(() => {
    // update the local storage whenever there are changes to our links
    localStorage.setItem("shorten-links", JSON.stringify(links));
  }, [links]);

  // Handle the adding of a new link
  function addNewLink(newLink) {
    setLinks((prevLinks) => {
      const updatedLinks = [...prevLinks, newLink];
      return updatedLinks;
    });
  }

  // Handle deletion of an existing link
  function deleteLink(e, id) {
    e.preventDefault();
    setLinks((prevLinks) => {
      const updatedLinks = prevLinks.filter((link) => {
        return link.id !== id;
      });
      return updatedLinks;
    });
  }

  // Scroll and Focus onto input[text] for shortening link when clicking Call to Action
  function handleRefClick(e) {
    e.preventDefault();
    inputRef.current.scrollIntoView();
    inputRef.current.focus();
  }

  return (
    <div className="main-container">
      <Navigation />
      <Hero handleRefClick={handleRefClick} />
      <Content
        inputRef={inputRef}
        links={links}
        addNewLink={addNewLink}
        deleteLink={deleteLink}
      />

      <div className="boost-cta">
        <h2>Boost your links today</h2>
        <button className="btn" onClick={(e) => handleRefClick(e)}>
          Get Started!
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
