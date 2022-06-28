import headerImage from "../assets/not2.jpg";
import Headers from "../components/Headers/Headers";
import React from "react";

function NotFound() {
  return (
    <>
      <Headers
        // title="Page not found"
        image={headerImage}
      ></Headers>
    </>
  );
}

export default NotFound;
