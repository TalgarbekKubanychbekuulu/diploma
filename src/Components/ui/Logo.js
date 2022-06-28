import "./Logo.css";
import logo from "../../assets/logotip1.png";
import search1 from "../../assets/search.png";
import { Link } from "react-router-dom";
import CartLink from "../CartLink/CartLink";
import React from "react";
import { useSelector } from "react-redux";

function Logo() {
  const isAuthenticated = useSelector((store) => store.auth.idToken !== null);

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <img src={logo} alt="" className="logotip" />

      <Link
        className="navbar-brand"
        to="https://www.cars.com/?redirect_event%5Bnew_account%5D=true"
      >
        {" "}
        Inter_Car{" "}
      </Link>
      <CartLink />

      {/* <Link className="buy" to="/">
        {" "}
        Buy{" "}
      </Link> */}

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapsibleNavbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              {" "}
              Home{" "}
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/Buy">
              {" "}
              Store{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Products">
              {" "}
              Products{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Products2">
              {" "}
              Products2{" "}
            </Link>
          </li>
          <li className="nav-item">
            {" "}
            {isAuthenticated ? <Link to="/signout">Sign out</Link> : null}
            {!isAuthenticated ? (
              <Link className="sing" to="/auth">
                Sign in
              </Link>
            ) : null}{" "}
            
          </li>
        </ul>
        {/* <CartLink  /> */}

        <div className="overlay-content"></div>
      </div>
      <form action="#">
        <div className="form-row">
          <div className="col dk-footer-form">
            <input
              type="email"
              className="form-control"
              placeholder="Search..."
            />
            <button className="seb" type="submit">
              <img
                src={search1}
                width="20px"
                height="20px"
                className="search"
                alt="serch"
              />
            </button>
          </div>
        </div>
      </form>
    </nav>
  );
}

export default Logo;
