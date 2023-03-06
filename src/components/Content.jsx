import React, { useState } from "react";
import About from "./About";
import trash from "../assets/images/icons8-trash-can.svg";
import sandTimer from "../assets/images/icons8-loading-circle.gif";

function Content({ inputRef, links, addNewLink, deleteLink }) {
  const [inputLink, setInputLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  async function handleAdd(e) {
    e.preventDefault();
    if (inputLink.length === 0) {
      setIsEmpty(true);
      inputRef.current.classList.add("no-link");

      setTimeout(() => {
        inputRef.current.classList.remove("no-link");
        setIsEmpty(false);
      }, 1500);
    } else {
      setIsLoading(true);
      // Fetch the shortened link from API and call addNewLink function
      await fetch(`https://api.shrtco.de/v2/shorten?url=${inputLink}`, {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
      })
        .then((res) => res.json())
        .then((data) => {
          try {
            setIsLoading(false);
            const newLink = {
              id: data.result.code,
              original: data.result.original_link,
              shorten: data.result.full_short_link,
            };
            addNewLink(newLink);

            setInputLink("");
            inputRef.current.value = "";
            inputRef.current.blur();
          } catch (error) {
            console.error(error);
            alert(
              "An Error has occured! Please try again using a valid URL..."
            );
          }
        });
    }
  }

  // Handle copying links to user clipboard
  function handleCopy(e, shortLink) {
    e.preventDefault();
    navigator.clipboard.writeText(shortLink);
    e.target.classList.add("copied");
    e.target.innerHTML = "Copied";
  }
  return (
    <div className="main-content">
      <div className="shortener">
        <input
          ref={inputRef}
          type="text"
          name="shorten-url"
          id="shorten-url"
          placeholder="Shorten a link here..."
          minLength={10}
          onChange={(e) => setInputLink(e.target.value)}
        />

        {isEmpty && <p className="empty-link">Please add a link</p>}
        <button
          className="btn shorten-btn"
          onClick={(e) => handleAdd(e)}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Shorten It!"}
        </button>
      </div>

      {/* Display all saved links */}
      {links?.map((link) => (
        <div className="shorten-link" key={link.id}>
          <p>{link.original}</p>
          <div className="short-link">
            <img
              src={trash}
              alt="delete-link"
              onClick={(e) => deleteLink(e, link.id)}
            />
            <p className="shortened">{link.shorten}</p>
            <button
              className="btn copy"
              onClick={(e) => handleCopy(e, link.shorten)}
            >
              Copy
            </button>
          </div>
        </div>
      ))}

      <About />
    </div>
  );
}

export default Content;
