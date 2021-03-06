import "./Logo.css";
import logo from "../../assets/logotip1.png";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Logo({ callback }) {
  const isAuthenticated = useSelector((store) => store.auth.idToken !== null);
  
 const number = useSelector(store => {
  return Object.values(store.cart.items).reduce((sum, number) => sum + number, 0);
});  

  return (
    
  <div>
  <nav className="navbar navbar-expand-xl py-2 shadow-sm">
   <div className="container">
   <img className="logotip" src={logo} alt="log" />
    <NavLink className="navbar-brand  " to="/">
    Inter Cars
    </NavLink>
    
    <button 
     className="navbar-toggler" 
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent"
     aria-expanded={false}
     aria-label="Toggle navigation"
    >
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
       <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
     </svg>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item">
       <NavLink className="nav-link" to="/">
        Home
       </NavLink>
      </li>
      <li className="nav-item">
       <NavLink className="nav-link" aria-current="true" to="/products">
        Products
       </NavLink>
      </li>
      <li className="nav-item">
       <NavLink className="nav-link" to="/stories">
        Stories
       </NavLink>
      </li>
     </ul>

     <div className="buttons d-flex">
      {isAuthenticated ? <NavLink to="/signout" className="btn btn-outline-dark ms-2">Sign out</NavLink> : null}
      {!isAuthenticated ? <NavLink to="/auth" className="btn btn-primary ms-2">Sign in</NavLink> : null}

      <NavLink to="/cart1" className="btn btn-info ms-2">
       <i className="fa fa-shopping-cart me-1"></i> Cart ({number})
      </NavLink>

      {isAuthenticated ? <NavLink to='/history' className='btn btn-outline-dark ms-2'>Orders</NavLink> : null}
     </div>
    </div>
   </div>
  </nav>
 </div>
  );
}

export default Logo;
