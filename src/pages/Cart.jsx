import CartCard from "@/components/CartCard/CartCard";
import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "react-toastify";

const Cart = ({ productData }) => {
  function handleClick(){
    toast.success('button clicked!')
  }
  console.log(productData, "from cart.jsx");
  return (
    <div className="bg-[#fee] flex  mt-[60px] text-center min-h-screen">
      <div className="flex flex-col items-center  w-3/5  border-2 rounded-md bordergray-300">
        <CartCard productData={productData[0]} />
        <CartCard productData={productData[1]} />
        <CartCard productData={productData[2]} />
        <CartCard productData={productData[3]} />
      </div>
      <div className="flex flex-col    border-2 w-2/5 p-6">
        {/* checkout section  */}

        <h1 className="text-center font-bold text-3xl">Price Details</h1>
        <div className="bg-slate-200 w-full  mx-auto h-full py-12 flex flex-col gap-4 items-center justify-center">
          <div className=" flex items-center w-full px-12 justify-between">
            <label htmlFor="">Total Quantity</label>

            <input type="text" />
          </div>
          <div className=" flex items-center w-full px-12 justify-between">
            <label htmlFor="">Delivery charge</label>

            <input type="text" />
          </div>
          <div className=" flex items-center w-full px-12 justify-between">
            <label htmlFor="">Total Price</label>

            <input type="text" />
          </div>
        <Button onClick={handleClick} className='w-[60%] mt-12'>Proceed to payement</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
