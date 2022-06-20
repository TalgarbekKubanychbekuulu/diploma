import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import About from "./pages/About";
import Buy from "./pages/Buy";
import Products2 from "./pages/Products2";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />

          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/products2" element={<Products2 />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
