

// import Home from "./pages/Home";
// import Contacts from "./pages/Contacts";
// import Products from "./pages/Products";
// import Category from "./pages/Category";
// import { Route, Routes } from "react-router-dom";
// import Layout from "./Components/Layout/Layout";

// function App() {
//   return (
//     <div className="App">
//       <Layout>
//         <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/contacts" element={<Contacts />} />
//         <Route path="/category" element={<Category />} />
//         </Routes>
//       </Layout>
//     </div>
//   );
// }

// export default App;

import Contacts from "./pages/Contacts";
import Category from "./pages/Category";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/category" element={<Category />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;