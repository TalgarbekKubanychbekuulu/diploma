
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer/Footer"
import Headers from "./Components/Headers/Headers";
import Nav from "./Components/Nav/Nav";
import Model from "./pages/Model";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">
     <Nav/>
      <Headers/>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/model" element={<Model />} />
        <Route path="/category" element={<Category />} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
