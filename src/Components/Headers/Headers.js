import "./Headers.css";
import React from "react";

function Headers({ image, title, children }) {
  return (
    <div>
      <header className="Header">
        <img src={image} alt={title} />
        <section>
          <h1>{title}</h1>
          <p>{children}</p>
        </section>
      </header>
    </div>
  );
}

export default Headers;
