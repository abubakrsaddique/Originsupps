"use client";

import { useEffect } from "react";
import { atom, useAtom } from "jotai";
import { useParams } from "next/navigation";
import Image from "next/image";

import { cartAtom, cartItemsAtom, productAtom } from "@/src/app/store";
import { useProducts } from "@/src/hook/useProductData";
import { useCart } from "@/src/hook/useAddItemCart";
import Cart from "../cartpage/Cart";
import { Product } from "@/src/types";

const isMountedAtom = atom(false);
const quantityAtom = atom(0);

const ProductDisplay = () => {
  const [isMounted, setIsMounted] = useAtom(isMountedAtom);
  const [product, setProduct] = useAtom(productAtom);
  const [quantity, setQuantity] = useAtom(quantityAtom);
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const { data: products } = useProducts();

  const params = useParams();
  const { addItemToCart, isCartOpen } = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, [setIsMounted]);

  useEffect(() => {
    if (isMounted && products) {
      const { productId } = params;

      if (productId) {
        const selectedProduct = products.find((p) => p.id === productId);
        setProduct(selectedProduct || null);

        const currentCartItem = selectedProduct
          ? cartItems.find((item) => item.id === selectedProduct.id)
          : null;
        setQuantity(currentCartItem?.quantity || 0);
      }
    }
  }, [isMounted, params, products, setProduct, cartItems, setQuantity]);

  const handleQuantityChange = (newQuantity: number, increment: boolean) => {
    if (product) {
      const existingCartItem = cartItems.find(
        (item) => item.title === product.title
      );

      let updatedCartItems;
      if (existingCartItem) {
        updatedCartItems = cartItems
          .map((item) => {
            if (item.title === product.title) {
              const updatedQuantity = increment
                ? item.quantity + 1
                : item.quantity - 1;
              return {
                ...item,
                quantity: Math.max(updatedQuantity, 0),
              };
            }
            return item;
          })
          .filter((item) => item.quantity > 0);
      } else {
        // Product is not in the cart, add it with the starting quantity
        const newCartItem = {
          ...product,
          quantity: newQuantity, // Or start with quantity: 1 if you prefer
        };
        updatedCartItems = [...cartItems, newCartItem];
      }

      // Update the cart items state
      setCartItems(updatedCartItems);
      console.log("Updated Cart Items State:", updatedCartItems);

      // Update the local quantity state
      const updatedQuantity = existingCartItem
        ? increment
          ? quantity + 1
          : Math.max(quantity - 1, 0)
        : newQuantity; // If it's a new item, set quantity to the provided newQuantity
      setQuantity(updatedQuantity);
      console.log("Updated Quantity State:", updatedQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addItemToCart(product, quantity > 0 ? quantity + 1 : 1);
    }
  };

  if (!isMounted || !product) return <p>Loading...</p>;

  return (
    <div className="bg-primary w-full rounded-br-[140px] mob:rounded-br-[70px]">
      <section className="w-full max-w-7xl mx-auto pt-[10px]">
        <div className="flex mob:block mob:mt-4 mob:pb-6 mt-12 pb-14">
          {/* Left Side */}
          <div className="flex justify-center w-full max-w-[40%] mob:max-w-full mob:pb-6 tab:pb-10">
            <div className="max-w-[470px] px-9 tab:max-w-[370px] mob:max-w-full">
              <div className="rounded-[50px] flex items-center justify-center w-full h-[410px] bg-lightgray relative mob:h-[344px]">
                <div className="w-full h-full relative mob:h-auto mob:rounded-none">
                  <Image
                    alt={product.title}
                    className="rounded-[40px] h-full w-full"
                    src={product.imageUrl}
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full pl-[50px] pr-5 flex flex-col justify-between max-w-[650px] tab:px-0 mob:px-5">
            <div>
              <div className="flex items-center justify-between">
                <p className="font-poppins text-black text-4xl font-bold leading-10 uppercase mob:text-2xl">
                  {product.title}
                </p>
              </div>
              <div className="flex items-center gap-[10px] mt-6 mob:mt-2">
                <div className="py-2 px-2 bg-transparent border-gray border-2 hover:border-[#FAA41F] rounded-3xl mob:px-2">
                  <p className="font-poppins text-black text-sm font-medium leading-6 flex justify-center items-center mob:text-xs mob:font-normal">
                    <span className="mr-2">
                      <p className="h-6 w-6 rounded-full bg-custom-gradient"></p>
                    </span>
                    {product.flavour}
                  </p>
                </div>
                <div className="py-2 px-4 bg-black rounded-[20px]">
                  <p className="font-poppins text-primary text-sm font-normal leading-6">
                    {product.size}
                  </p>
                </div>
              </div>

              <p className="font-poppins mt-8 mb-[18px] text-black text-3xl leading-6 font-medium">
                ${product.price}
              </p>
              <div className="flex items-center gap-[23px] border-b border-b-gray">
                <p className="font-poppins text-base cursor-pointer font-semibold leading-[32px] uppercase border-b-[2px] border-b-lightgreen text-black">
                  Description
                </p>
                <p className="font-poppins text-gray text-base cursor-pointer font-semibold leading-[32px] uppercase">
                  Nutrition details
                </p>
              </div>
              <div className="mt-6">
                <div className="overflow-y-scroll max-h-[250px] mb-10">
                  <p className="text-black text-[18px] font-poppins leading-6 font-semibold mb-4">
                    {product.descriptionHeading}
                  </p>
                  <p className="text-gray font-poppins text-base font-light leading-6">
                    {product.descriptionParagraph}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between pl-[3%] pr-[10%] pb-10">
              <div className="flex items-center gap-[19px] w-full">
                <div className="flex items-center gap-[2px] mob:mr-3 mob:ml-0">
                  <button
                    className="h-[50px] w-[50px] bg-secondary rounded-[20px] flex items-center justify-center"
                    onClick={() => handleQuantityChange(quantity - 1, false)}
                    disabled={quantity <= 0}
                  >
                    -
                  </button>
                  <span className="h-[50px] w-[50px] text-[18px] border border-secondary rounded-[20px] flex items-center justify-center">
                    {quantity}
                  </span>
                  <button
                    className="h-[50px] w-[50px] bg-secondary rounded-[20px] flex items-center justify-center"
                    onClick={() => handleQuantityChange(quantity + 1, true)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="rounded-[20px] bg-lightgreen min-h-[50px] text-black flex items-center justify-center min-w-[160px] uppercase w-[267px] font-organetto text-base font-normal px-2 mob:h-[50px] mob:text-[14px]"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Cart Modal */}
        {isCartOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
            <Cart />
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductDisplay;
