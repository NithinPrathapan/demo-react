import React from "react";
import { productList } from "../utils/data";
import App from "../App";
import { Link } from "react-router-dom";
import CardComponent from "../components/Card";

const Home = ({ productData }) => {
  console.log(productData, "from home.jsx");
  return (
    <div>
      <div className="grid grid-cols-4 gap-10 items-center justify-center p-12 mt-[60px] overflow-hidden min-h-screen">
        {productData.map((product) => (
          <CardComponent key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center ">
        <Link to="/productDetails">
          <button>Go to product page</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
