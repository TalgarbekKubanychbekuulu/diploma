// import Headers from "../Components/Headers/Headers";
// import image from "../assets/car1.jpg";

import "../Components/Css/General.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../data/products1";
import { Link } from "react-router-dom";
import { decrement, increment, remove } from "../redux/cartSlice";
import React from 'react'


function Cart1() {
  const items = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  const products = getProducts();

  let total = 0;
  let output = products
    .filter(product => items[product.productId])
    .map(product => {
    
      total += product.price * items[product.productId];
     

      return (
        <div>
          <Link to="">{product.title}</Link> {items[product.productId]} ${product.price * items[product.productId]}

          <button className="but3" onClick={() => dispatch(decrement(product.productId))}>-</button>
          <button className="but2" onClick={() => dispatch(increment(product.productId))}>+</button>
          <button className="but1" onClick={() => dispatch(remove(product.productId))}>Delete</button>
          <hr />
        </div>
      );
    });

  if (!output.length) {
    output = "No items in the cart.";
  }


  return (
    <>
      
      <div className="total">
        <div className="one-text1">Your products cart</div>
        <hr className="one-hr"/>
        {output}
       
       <div className="total2">
  
       Total: ${total}
     
       </div>

       <div className="link">
       <Link to="/checkout">Checkout</Link>
       </div>

      </div>
    </>
  );
}

export default Cart1;