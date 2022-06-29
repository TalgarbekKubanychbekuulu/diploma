import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import About from "./pages/About";
import Store from "./pages/Store";
// import Cart from "../src/pages/Cart";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import Products2 from "./pages/Products2";
import React from "react";
import SignOut from "./pages/SignOut";
import Cart1 from "./pages/Cart1";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category />} />
          <Route path="/products2" element={<Products2 />} />

          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart1" element={<Cart1 />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signout" element={<SignOut />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
