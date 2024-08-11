import React from "react";

import Marque from "@/src/components/marquee/Marque";
import ProductDisplay from "@/src/components/productdetail/ProductDisplay";
import RecomendedProducts from "@/src/components/productdetail/Recomended";
import FAQSection from "@/src/components/productdetail/Faq";

const ProductDetailPage = () => {
  return (
    <div className="bg-black w-full pb-10">
      <div className="  h-[65px] flex items-center  bg-black border-b-8 border-t-2 border-gray ">
        <Marque />
      </div>
      <ProductDisplay />
      <RecomendedProducts />
      <FAQSection />
    </div>
  );
};

export default ProductDetailPage;
