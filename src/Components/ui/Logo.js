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
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <img src={logo} alt="" className="logotip" />

      <a class="navbar-brand" href="https://www.cars.com/?redirect_event%5Bnew_account%5D=true">
        Inter-Car
      </a>

      <a className="buy" href="./pages/keres">
        Buy
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contacts">
              Contacts
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/products">
              Products
            </a>
          </li>
        </ul>
        <div class="overlay-content"></div>
      </div>
      <form action="/action_page.php">
        <input type="text" placeholder="Search.." name="search" />
        {/* <button type="submit"><i class="fa fa-search"></i></button> */}
      </form>
    </nav>
  );
}

export default Logo;
