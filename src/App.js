
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer/Footer"
import Headers from "./Components/Headers/Headers";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Footer />
      <Headers/>
      <Nav/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      
    </div>
  );
}

export default App;
