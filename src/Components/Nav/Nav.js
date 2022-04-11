import "./Nav.css";

function Nav() {
  return (
    <nav className="Nav">
      <Logo />
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>

      <div className="car">Hypercar market </div>
      <ul>
        <li>
          {" "}
          <a href="https://iconscout.com/icons/mercedes"  >
            Mercedes Icon
          </a>{" "}
        </li>
        <li>
          {" "}
          <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a>
        </li>{" "}
        <a href="https://iconscout.com">Iconscout</a>
        <li>
          <a href="/">Categories</a>
        </li>
      </ul>
    </nav>
  );
}


export default Nav;
