import React, { useContext } from "react";
import { productList } from "../utils/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "./ui/button";
import { toast } from "react-toastify";
import axios from "axios";
import { CartContext } from "@/context/CartContext";

const CardComponent = ({ product }) => {
  const { cart, addToCart } = useContext(CartContext);
  console.log(cart,'from cart context')
  // handle add to cart function
  const handleAddToCart = async (id) => {
    console.log(id);
    const result = await axios.get(`https://dummyjson.com/products/${id}`);
    console.log(result, "item to be added ");
    const cartitem = result.data;
    console.log("cart item", cartitem);
    addToCart(cartitem)

    toast.success("item Added to cart successfully");
  };
  return (
    <Card className="flex flex-col items-center justify-center w-[350px] shadow-lg bg-slate-400 text-black font-bold ">
      <CardHeader>
        <img
          width={200}
          height={200}
          className="object-cover max-h-[200px] flex items-center justify-center"
          src={product.images[0]}
          alt={product.title}
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-center"> {product.title}</CardTitle>
        <CardDescription className="min-h-[100px] max-h-[100px] text-white">
          {product.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            handleAddToCart(product.id);
          }}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
