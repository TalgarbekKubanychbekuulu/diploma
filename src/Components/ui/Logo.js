// import "./Logo.css";

// function Logo() {
//   return (
//     <header>
//     <div className="Logo">Hypercar market</div>
//     </header>
//   );
// }

// export default Logo;
// import "./Logo.css";
// import logo from "../../assets/logotip1.png"
// function Logo() {
//   return <div className="Logo">
//     <img src={logo} alt="" className="logotip" />
//     <span>Inter-car</span>
//   </div>;
// }

// export default Logo;

import "./Logo.css";
import logo from "../../assets/logotip1.png";
import { Link } from "react-router-dom";
function Logo() {
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
  </head>;

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <img src={logo} alt="" className="logotip" />

      {/* <a className="navbar-brand" href="https://www.cars.com/?redirect_event%5Bnew_account%5D=true">
        Inter-Car
      </a> */}
                  <Link className="navbar-brand" to="https://www.cars.com/?redirect_event%5Bnew_account%5D=true"> Inter_Car </Link>


      {/* <a className="buy" href="./pages/keres">
        Buy
      </a> */}
                  <Link className="buy" to="/"> Buy </Link>


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
            {/* <a className="nav-link" href="/">
              Home
            </a> */}
            <Link className="nav-link" to="/"> Home </Link>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/contacts">
              Contacts
            </a> */}
                        <Link className="nav-link" to="/Contacts">Contacts </Link>

          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/products">
              Products
            </a> */}
                        <Link className="nav-link" to="/Products"> Products </Link>

          </li>
        </ul>
        <div className="overlay-content"></div>
      </div>
      <form action="/action_page.php">
        <input type="text" placeholder="Search.." name="search" />
        {/* <button type="submit"><i className="fa fa-search"></i></button> */}
      </form>
    </nav>
  );
}

export default Logo;
