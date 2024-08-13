import { Metadata } from "next";
import React from "react";
import AddProduct from "@/src/components/productpage/AddProduct";

export const metadata: Metadata = {
  title: "Add Product",
};

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
