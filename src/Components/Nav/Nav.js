// import "./Nav.css";

// function Nav() {
//   return (
//     <nav className="Nav">
//       <Logo />
      // <head>
      //   <link
      //     href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bebas+Neue&display=swap"
      //     rel="stylesheet"
      //   />
      // </head>

//       <div className="car">Hypercar market </div>
//       <ul>
//         <NavItem url="/"active>Home</NavItem>
//         <NavItem url="/">About</NavItem>
//         <NavItem url="/">Contacts</NavItem>

//         {/* <li>
//           {" "}
//           <a href="https://iconscout.com/icons/mercedes"  >
//             Mercedes Icon
//           </a>{" "}
//         </li>
//         <li>
//           {" "}
//           <a href="https://iconscout.com/contributors/icon-mafia">Icon Mafia</a>
//         </li>{" "}
//         <a href="https://iconscout.com">Iconscout</a>
//         <li>
//           <a href="/">Categories</a>
//         </li> */}
//       </ul>
//     </nav>
//   );
// }


// export default Nav;

import Logo from "../ui/Logo";
import "./Nav.css";
// import Logo from "../ui/Logo/Logo";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <nav className="Nav">
      <Logo/>
      <ul className="fref">
        <NavItem url="/">Home</NavItem>
        <NavItem url="/products">Products</NavItem>
        <NavItem url="/contacts">Contacts</NavItem>
        <NavItem url="/model">Model</NavItem>
        <NavItem url="/categoria">Categoria</NavItem>


      </ul>
    </nav>
  );
}

export default Nav;