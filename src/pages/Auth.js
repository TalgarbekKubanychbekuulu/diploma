import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { start } from "../redux/authSlice";
import React from "react";
import "../Components/Css/General.css";
import email1 from "../assets/email.png"
import lock1 from "../assets/lock3.png"

export default function Auth() {
  const dispatch = useDispatch();
  const { error, localId } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(
      start({
        email: formData.get("email"),
        password: formData.get("password"),
        method:
          event.nativeEvent.submitter.innerText === "Sign up"
            ? "signup"
            : "signin",
      })
    );
  }

  if (localId !== null) {
    navigate("/");
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <strong style={{ color: "red" }}>{error}</strong>;
  }

  return (
    <form className="form-auth" onSubmit={onAuthStart}>
      {errorOutput}
      <img
        src="https://i.pinimg.com/originals/3d/1a/b6/3d1ab66b5748b5c9a387db81eb939d94.jpg"
        height="200"
        width="350"
        alt=""
      />
      <label>
      <img
        src={email1}
        height="30"
        width="30"
        alt=""
      /> Email:
        <input className="email" type="email" name="email" />
      </label>
      <label>
      <img
        src={lock1}
        height="30"
        width="30"
        alt=""
      />Password:
        <input className="email2" type="password" name="password" />
      </label>
      <div className="display-flex">
        <button className="sign">Sign in</button>
        <button className="sign2">Sign up</button>
      </div>
    </form>
  );
}
