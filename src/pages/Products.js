// import Headers from "../Components/Headers/Headers";
// import headerImage from "../assets/lampo.jpg";
import ProductList from "../Components/ProductList/ProductList";
import { getProducts } from "../data/products1";
import cars from "../assets/news.mp4";
import React from "react";

// import small from "../assets/new.jpg";
import "../Components/Css/General.css";
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
     
      <div className="boss-text1">Welcome to products</div>
      <div className="boss-text">Popular Products </div>

      <ProductList products={getProducts()} />

    </>
  );
}
export default Products;
