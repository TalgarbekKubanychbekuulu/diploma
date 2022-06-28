import { useDispatch } from "react-redux";
import { add } from "../../redux/cartSlice";
import "./CartButton.css";
import React from "react";
import korzina2 from "../../assets/korzina.png";

export default function CartButton({ productId }) {
  const dispatch = useDispatch();

  function onAddToCart() {
    dispatch(add(productId));
  }

  return (
    <div>
      <button className="bubbly-button" onClick={onAddToCart}>
        <img
          className="image-buy"
          src={korzina2}
          alt="korzina"
          width="30px"
          height="30px"
        />
        Add to card
      </button>
    </div>
  );
}
