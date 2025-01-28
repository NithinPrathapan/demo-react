import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart";
import axios from "axios";
import { Button } from "./components/ui/button";
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const [productData, setProductData] = useState([]);
  console.log(productData, "from app.jsx"); 
  useEffect(() => {
    console.log("fetching data");
    fetchProducts();
  },[]);

  async function fetchProducts() {
    const products = await axios.get("https://dummyjson.com/products");
    setProductData(products.data?.products);

  }

  console.log(productData, "from app.jsx");
  return (
    <div className="flex flex-col overflow-y-hidden ">
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<Home productData={productData} />} />
        <Route
          path="/productDetails"
          element={<ProductDetails productData={productData} />}
        />
        <Route
          path="/cart"
          element={
            <Cart productData={productData} />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
