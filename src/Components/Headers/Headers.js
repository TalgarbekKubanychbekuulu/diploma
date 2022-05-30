import "./Headers.css";
import cars from "../../assets/news.mp4";

function Headers({ image, title, children }) {
  return (
    <div>
      <header>
        
        <div className="overlay"></div>

        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src={cars} type="video/mp4" />
        </video>

        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center"></div>
        </div>
        
      </header>
     <div className="fixed">
   <h2 className="lambo">Lamborghini</h2>
      <p className="lambo">
        {" "}
        <code>Automobil</code> sport car. Italian company, manufacturer of
        expensive sports cars{" "}
      </p>
    </div>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Headers;
