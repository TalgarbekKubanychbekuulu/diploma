import { useParams } from "react-router-dom";
import CartButton from "../Components/CartButton/CartButton";
import { getProduct } from "../data/products";
import React from "react";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <>
      <div
        className="product-media"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "3rem",
          color: "white",
          borderRadius: "10px",
          marginBottom: "100px",
          marginTop: "50px",
          flexWrap:"wrap",
          border:"orange 3px dashed"
        }}
      >
        <img
          style={{
            maxWidth: "530px",
            height: "300px",
            padding: " 1rem",
            flex: " 0 0 250px",
            borderRadius: "30px",

          }}
          src={product.image}
          alt={product.title}
        />
        <div
          style={{ padding: "1rem", fontFamily: "serif", textAlign: "left" }}
        >
          <h2
            style={{
              marginTop: "0",
              color: "orange",
              borderBottom: "red dashed 2px",

            }}
          >
            {product.title}
          </h2>
          <p
            style={{
              maxWidth: "600px",
              fontFamily: "Montserrat, sans-serif",
              color: "white",
              width:"300px"


            }}
          >
            {product.description}
          </p>
          <CartButton productId={params.productId} />
        </div>
      </div>
    </>
  );
}

export default Product;
