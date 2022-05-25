
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
