import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import kor from "../../assets/korzina.png";
import "./CartLink.css";
import React from "react";

export default function CartLink() {
  const number = useSelector((store) => {
    return Object.values(store.cart.items).reduce(
      (sum, number) => sum + number,
      0
    );
  });

  return (
    <NavLink to="/cart1">
      <img src={kor} alt="" className="koro" />({number})
    </NavLink>
  );
}
