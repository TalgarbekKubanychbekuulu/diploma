

// import "./Headers.css";
// import headerImage from "../../Components/assets/car5.jpg";

// function Headers() {
//   const style = {
//     backgroundImage: `url(${headerImage})`
//   };

//   return (
//     <header className="Headers" style={style}>
// {/* <head><link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bebas+Neue&family=Cinzel:wght@500&display=swap" rel="stylesheet" /></head>    */}
//    <h1><b>Inter-car</b></h1>
//       <p><b>Sport cars</b></p>
//     </header>
//   );
// }

// export default Headers;

import "./Headers.css";
import cars from "../../assets/lam2.mp4"

function Headers({ image, title, children }) {
  return (
    <div>
    <header>

        <div className="overlay"></div>
      
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src={cars} type="video/mp4" />
        </video>
      
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            {/* <div className="w-100 text-white">
              <h1 className="display-3">Video Header</h1>
              <p className="lead mb-0">Using HTML5 Video and Bootstrap</p>
            </div> */}
          </div>
        </div>
      </header>
      
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              
               
            </div>
          </div>
        </div>
      </section>
      </div>
  );
}

export default Headers;
