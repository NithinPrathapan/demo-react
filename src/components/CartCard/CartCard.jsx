import React from "react";

const CartCard = ({ productData }) => {
  console.log(productData);
  return (
    <div className="grid grid-cols-4  items-center border-b-2 w-full px-2 py-4 font-bold">
      <div className="">
        <img width={100} src="https://dummyimage.com/600x400/000/fff" alt="" />

        {/* image */}
      </div>
      <div>
        {" "}
        <h1>{productData.title}</h1>
        {/* title */}
      </div>

      <div>
        {" "}
        <h1>{productData.stock}</h1>
        {/* product quantity */}
      </div>
      <div>
        {" "}
        <h1>{productData.price}</h1>
        {/* price */}
      </div>
    </div>
  );
};

export default CartCard;
