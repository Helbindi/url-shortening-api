import React from "react";

function Shortener() {
  return (
    <div>
      <div className="shorten-container">
        <input
          type="text"
          name="shortener"
          id="shortener"
          placeholder="Shorten a link here..."
        />
        <button>Shorten It!</button>
      </div>

      <div className="shorten-links">
        {/* original link */}
        {/* shortened link */}
        <button>Copy</button>
      </div>
    </div>
  );
}

export default Shortener;
