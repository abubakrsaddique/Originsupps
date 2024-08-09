import React from "react";

import Marque from "@/src/components/marquee/Marque";
import ProductDisplay from "@/src/components/productdetail/ProductDisplay";

const ProductDetailPage = () => {
  return (
    <div className=" bg-white rounded-br-[140px] mob:rounded-br-[70px] w-full pb-10">
      <div className="  h-[65px] flex items-center  bg-black border-b-8 border-t-2 border-gray ">
        <Marque />
      </div>
      <ProductDisplay />
    </div>
  );
};

export default ProductDetailPage;
