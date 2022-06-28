// import Headers from "../Components/Headers/Headers";
// import image from "../assets/car1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../data/products";
import { Link, useNavigate } from "react-router-dom";
import { checkout } from "../redux/cartSlice";
import "../components/Css/General.css";
import React from "react";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((store) => store.cart.items);
  const products = getProducts();

  let total = 0;
  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      total += product.price * items[product.productId];

      return (
        <div>
          <Link to="">{product.title}</Link> {items[product.productId]} $
          {product.price * items[product.productId]}
        </div>
      );
    });

  if (!output) {
    output = "No items in the cart.";
  }

  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const order = { items: items, ...Object.fromEntries(formData.entries()) };
    dispatch(checkout(order));
    navigate("/");
  }

  return (
    <>
      <div className="labo">
        <h2 className="checkout-text">Products</h2>

        {output}
        <hr className="checkout-hr" />
        <div className="colors-total"> Total: ${total} </div>

        <form onSubmit={onCheckout}>
          <label>
            First name:
            <input className="checkout-input" type="text" />
          </label>
          <label>
            Last name:
            <input
              className="checkout-input"
              type="text"
              name="lastName"
              required
            />
          </label>
          <label>
            Address:
            <input
              className="checkout-input"
              type="text"
              name="address"
              required
            />
          </label>
          <label>
            Phone:
            <input
              className="checkout-input"
              type="text"
              name="phone"
              required
            />
          </label>

          <button className="hovers-button">Complete the order</button>
        </form>
      </div>
    </>
  );
}

export default Checkout;
