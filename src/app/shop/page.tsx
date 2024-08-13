import { Metadata } from "next";

import ShopPage from "@/src/components/shop/ShopPage";
import React from "react";

export const metadata: Metadata = {
  title: "Shop",
};

const Shop = () => {
  return <ShopPage />;
};

export default Shop;
