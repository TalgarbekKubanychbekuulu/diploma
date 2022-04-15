

import "./Headers.css";
import headerImage from "../../Components/assets/car5.jpg";

function Headers() {
  const style = {
    backgroundImage: `url(${headerImage})`
  };

  return (
    <header className="Headers" style={style}>
{/* <head><link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bebas+Neue&family=Cinzel:wght@500&display=swap" rel="stylesheet" /></head>    */}
   <h1><b>Inter-car</b></h1>
      <p><b>Sport cars</b></p>
    </header>
  );
}

export default Headers;