import CartCard from "@/components/CartCard/CartCard";
import { Button } from "@/components/ui/button";
import { CartContext } from "@/context/CartContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart } = useContext(CartContext);

  function handleClick() {
    toast.success("button clicked!");
  }
  return (
    <div className="bg-[#fee] flex  mt-[60px] text-center min-h-screen">
      <div className="flex flex-col items-center  w-3/5  border-2 rounded-md bordergray-300">
        {cart && cart.length !== 0 ? (
          cart.map((item) => <CartCard productData={item} />)
        ) : (
          <h1>Your cart is empty Purchase some products <a href="/"> click here</a></h1>
        )}
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
          <Button onClick={handleClick} className="w-[60%] mt-12">
            Proceed to payement
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
