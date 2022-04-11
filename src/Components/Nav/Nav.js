import "./Nav.css";
import Logo from "../ui/Logo";
import NavItem from "./NavItem/NavItem";

function Nav() {
  return (
    <nav className="Nav">
      <Logo />
      <ul>
        <NavItem url="/">Home</NavItem>
        <NavItem url="/products">Products</NavItem>
        <NavItem url="/contacts">Contacts</NavItem>
      </ul>
    </nav>
  );
}

export default Nav;