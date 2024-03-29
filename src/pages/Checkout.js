// import Headers from "../Components/Headers/Headers";
// import image from "../assets/car1.jpg";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { checkout } from "../redux/cartSlice";
import "../Components/Css/General.css";
import React, { useEffect } from "react";
function Checkout() {
  const dispatch = useDispatch();
 const navigate = useNavigate();
 const { items, localId } = useSelector((store) => ({
  items: store.cart.items,
  localId: store.auth.localId,
 }));

 useEffect(() => {
   if (!localId) {
     navigate('/auth');
   }
 }, [localId, navigate]);

 function onCheckout(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  dispatch(
   checkout({
    localId: localId,
    items: items,
    ...Object.fromEntries(formData.entries()),
   })
  );
  navigate("/");
 }


  return (
    <>
      <div className="labo">
        <h2 className="checkout-text">Products</h2>


        <main  className="form-signin w-100 m-auto" style={{ maxWidth: "350px" }}>
   <form onSubmit={onCheckout} className=' text-center'>
    <h1 className="h3 mb-3 fw-normal">Checkout</h1>

    <div className="form-floating">
     <input
      type="firstName"
      name="firstName"
      className="form-control"
      id="floatingInput"
      placeholder="First Name..."
     />
     <label htmlhtmlFor="floatingInput">First Name</label>
    </div>
    <div className="form-floating mt-2">
     <input
      type="lastName"
      name="lastName"
      className="form-control"
      id="floatingPassword"
      placeholder="Last Name..."
     />
     <label htmlhtmlFor="floatingPassword">Last Name</label>
    </div>
    <div className="form-floating mt-2">
     <input
      type="lastName"
      name="address"
      className="form-control"
      id="floatingPassword"
      placeholder="Adress..."
     />
     <label htmlhtmlFor="floatingPassword">Adress</label>
    </div>
    <div className="form-floating mt-2">
     <input
      type="lastName"
      name="phone"
      className="form-control"
      id="floatingPassword"
      placeholder="Phone..."
     />
     <label htmlhtmlFor="floatingPassword">Phone</label>
    </div>
    <button className="w-100 btn btn-lg btn-primary mt-2">Complete the order</button>
   </form>
   </main>
      </div>
    </>
  );
}

export default Checkout;

