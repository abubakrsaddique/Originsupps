import AddProduct from "@/src/components/productpage/AddProduct";
import React from "react";

const Product = () => {
  return (
    <div className="min-h-screen bg-black py-8">
      <h1 className="text-center text-primary font-organetto text-2xl font-bold mb-6">
        Create a New Product
      </h1>
      <AddProduct />
    </div>
  );
};

export default Product;
