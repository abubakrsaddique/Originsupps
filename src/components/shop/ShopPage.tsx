"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Product } from "@/src/types";
import { useProducts } from "@/src/hook/useProductData";
import CartIcon from "@/public/carticon.svg";
import { useCart } from "@/src/hook/useAddItemCart";
import Cart from "@/src/components/cartpage/Cart";

const ShopPage = () => {
  const router = useRouter();
  const { addItemToCart, isCartOpen } = useCart();
  const { data: products, isLoading, error } = useProducts();

  if (isLoading)
    return (
      <p className="bg-black text-primary justify-center items-center flex h-screen w-full">
        Loading...
      </p>
    );
  if (error) return <p>Error fetching products</p>;

  const handleProductClick = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const handleAddToCart = (product: Product) => {
    addItemToCart(product, 1);
  };

  return (
    <div className="bg-black">
      <section className="bg-primary text-black pb-[70px] rounded-br-[140px] mob:rounded-br-[70px]">
        <h1 className="font-organetto text-3xl font-extrabold text-black leading-10 uppercase text-center mt-[70px] mb-[25px]">
          Shop
        </h1>
        <div className="max-w-7xl mx-auto mt-[30px]">
          <div className="grid grid-cols-2 justify-center justify-items-center w-full gap-x-[10px] gap-y-[30px] px-[200px] mob:px-[11px] tab:px-8">
            {products?.map((product) => (
              <div
                key={product.id}
                className="flex justify-center"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="w-[370px] lg:max-w-[300px] mob:max-w-[170px]">
                  <div className="group">
                    <div className="w-[370px] lg:w-full lg:max-w-[300px] mob:max-w-[170px] mob:max-h-[170px] rounded-[40px] mob:rounded-[16px] h-[370px] tab:h-[40%] bg-[#B2B2B2] flex items-center justify-center relative group-hover:border-[#BBFF2E] group-hover:border-[4px] group-hover:bg-[#F3F3F3] transition-all duration-400 group-hover:shadow-xl group-hover:cursor-pointer">
                      <div className="h-full w-full relative bg-transparent">
                        <Image
                          alt="product"
                          width={371}
                          height={307.5}
                          className="h-full w-full object-contain rounded-[40px]"
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
        </div>
        {/* Cart Modal */}
        {isCartOpen && (
          <div>
            <Cart />
          </div>
        )}
      </section>
      <div className="bg-black mob:py-6"></div>
    </div>
  );
};

export default ShopPage;
