"use client";

import React from "react";
import Image from "next/image";
import { FC } from "react";
import { useCart } from "@/src/hook/useAddItemCart";
import { Product } from "@/src/types";
import CartIcon from "@/public/carticon.svg";
import { useRouter } from "next/navigation";
import Marque from "../marquee/Marque";
import Cart from "../cartpage/Cart";
import { useProducts } from "@/src/hook/useProductData";

const ShopSection: FC = () => {
  const router = useRouter();
  const { data: products, isLoading, error } = useProducts();
  const { addItemToCart, isCartOpen } = useCart();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const handleAddToCart = (product: Product) => {
    addItemToCart(product, 1);
  };

  return (
    <section className="bg-primary pt-5 relative z-[10] mob:pt-0 mob:mt-[10px]">
      <div className="flex w-full justify-center">
        <h1 className="text-3xl font-organetto z-1 text-black text-center font-extrabold pt-[50px] mob:text-2xl mob:px-1 mob:pt-[30px]">
          OUR SUPPS STACK
        </h1>
      </div>
      <div className="flex w-full mob:grid mob:grid-cols-2 pb-[145px] no-scrollbar px-4 gap-[30px] overflow-scroll mt-[70px]  mob:mt-10 mob:pb-20">
        {products?.map((product) => (
          <div
            key={product.id}
            className="flex justify-center  mob:grid mob:grid-cols-2"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="w-[370px] lg:max-w-[300px] mob:max-w-[170px]">
              <div className="group">
                <div className="w-[370px] lg:w-full lg:max-w-[300px] mob:max-w-[170px] mob:max-h-[170px] rounded-[40px] mob:rounded-[16px] h-[370px] tab:h-[40%] bg-[#B2B2B2] flex items-center justify-center relative group-hover:border-[#BBFF2E] group-hover:border-[4px] group-hover:bg-[#F3F3F3]  group-hover:shadow-xl group-hover:cursor-pointer">
                  <div className="h-full w-full relative bg-transparent">
                    <Image
                      alt="product"
                      width={371}
                      height={307.5}
                      className="w-full h-auto object-contain rounded-[40px]"
                      src={product.imageUrl}
                    />
                  </div>
                  <div className="absolute py-[10px] px-[12px] mob:py-[6px] mob:px-[6px] bg-[#838489] rounded-[20px] mob:rounded-b-[10px] mob:rounded-tr-[16px] rounded-tl-none rounded-tr-[40px] top-0 right-0">
                    <div className="flex items-center text-center justify-center gap-[3px]">
                      <p className="font-poppins text-[24px] mob:text-[14px] font-semibold mob:font-medium leading-6 mob:leading-4 text-white">
                        {product.serving}
                      </p>
                    </div>
                    <p className="font-poppins text-[14px] mob:text-[10px] font-normal leading-6 mob:leading-4 text-white">
                      Servings
                    </p>
                  </div>
                  <div
                    className="bg-lightgreen h-[50px] px-[17px] rounded-[20px] mob:max-w-[68px] mob:max-h-[42px] flex items-center justify-center absolute bottom-[16px] mob:bottom-2 left-[50%] z-[100]"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToCart(product);
                    }}
                  >
                    <span className="text-[24px] font-normal font-poppins">
                      +
                    </span>
                    <Image alt="cartIcon" src={CartIcon} />
                  </div>
                </div>
              </div>
              <div className="mt-[15px]">
                <div className="flex items-start justify-between">
                  <p className="font-poppins text-black text-[22px] mob:text-[14px] font-medium">
                    {product.title}
                  </p>
                  <p className="font-poppins text-black text-[24px] mob:text-[16px] font-semibold leading-6 shrink-0">
                    ${product.price}
                  </p>
                </div>
                <div className="border-[#FAA41F] gap-[6px] flex items-center py-[2px] border-2 w-fit px-[10px] rounded-[20px] mt-[10px]">
                  <div className="h-4 w-4 rounded-full bg-custom-gradient"></div>
                  <p className="font-poppins text-[18px] mob:text-[11px] font-normal leading-6 mob:leading-[11px] text-[#808186] mt-[3px]">
                    {product.flavour}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Marque */}
      <Marque />

      {/* Cart Modal */}
      {isCartOpen && (
        <div>
          <Cart />
        </div>
      )}
    </section>
  );
};

export default ShopSection;
