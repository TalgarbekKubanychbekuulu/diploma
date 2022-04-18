// import "./Logo.css";

// function Logo() {
//   return (
//     <header>
//     <div className="Logo">Hypercar market</div>
//     </header>
//   );
// }

// export default Logo;
import "./Logo.css";
import logo from "../../assets/logotip1.png"
function Logo() {
  return <div className="Logo">
    <img src={logo} alt="" className="logotip" />
    <span>Inter-car</span>
  </div>;
}

export default Logo;

