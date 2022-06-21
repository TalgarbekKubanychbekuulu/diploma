import "./Logo.css";
import logo from "../../assets/logotip1.png";
import search1 from "../../assets/search.png";
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

      <Link
        className="navbar-brand"
        to="https://www.cars.com/?redirect_event%5Bnew_account%5D=true"
      >
        {" "}
        Inter_Car{" "}
      </Link>

      <Link className="buy" to="/">
        {" "}
        Buy{" "}
      </Link>

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
            <Link className="nav-link" to="/Contacts">
              Contacts{" "}
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
        </ul>
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
