// import Headers from "../Components/Headers/Headers";
// import headerImage from "../assets/lampo.jpg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";
import cars from "../assets/news.mp4";
import React from "react";

// import small from "../assets/new.jpg";
import "../components/Css/General.css";
// import "./Products.scss"
function Products() {
  return (
    <>
      {/* <Headers title=" &#8466; &#8475; &#95; Sport cars!" image={headerImage}>
        A sports car or sports car is a conditionally generalized name for a
        wide class of two, rarely four-seater cars,
        
      </Headers> */}

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
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img
              src="https://a.d-cd.net/2ba643es-1920.jpg"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://flyclipart.com/thumb2/lamborghini-north-scottsdale-serving-phoenix-tucson-las-vegas-914993.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://avatars.mds.yandex.net/i?id=572373eba2755087264b04a09e05d51f-4821394-images-thumbs&n=13"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/gateway-family/huracan/huracan-logo-low.jpg"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://flyclipart.com/thumb2/lamborghini-north-scottsdale-serving-phoenix-tucson-las-vegas-914993.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="boss-text1">Welcome to products</div>
      <div className="boss-text">Popular Products </div>

      <ProductList products={getProducts()} />
    </>
  );
}
export default Products;
