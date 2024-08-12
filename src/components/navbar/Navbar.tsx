"use client";

import React from "react";
import { useAtom } from "jotai";
import Link from "next/link";
import Image from "next/image";

import { cartOpenAtom } from "@/src/app/store";
import Image1 from "@/public/origin.svg";
import Image2 from "@/public/originmob.svg";
import Cart from "@/public/cart.svg";
import { useCart } from "@/src/hook/useAddItemCart";

const Navbar = () => {
  const [, setCartOpen] = useAtom(cartOpenAtom);
  const { cartItems, isCartOpen } = useCart();

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleOpenCart = () => {
    setCartOpen(true);
  };

  return (
    <nav className="bg-black border-b border-b-primary border-opacity-10 w-full py-8  px-14 2xl:px-[5%]  text-primary mob:px-5">
      <div className="flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="flex items-center gap-8 mob:hidden">
          <Link href="/">
            <p className="uppercase group">
              <span className="text-primary text-base leading-normal font-organetto  font-normal hover:text-lightgreen">
                HOME
              </span>
            </p>
          </Link>
          <Link href="/shop">
            <p className="uppercase group">
              <span className="text-primary text-base leading-normal font-organetto  font-normal hover:text-lightgreen">
                Shop
              </span>
            </p>
          </Link>
          <Link href="/product">
            <p className="uppercase group">
              <span className="text-primary text-base leading-normal font-organetto  font-normal hover:text-lightgreen">
                Add product
              </span>
            </p>
          </Link>
        </div>

        {/* Logo */}
        <div>
          <Link href="/">
            <p>
              <Image alt="Desktop Icon" className="mob:hidden" src={Image1} />

              <Image
                alt="Mobile Icon"
                className="hidden mob:block "
                src={Image2}
              />
            </p>
          </Link>
        </div>

        {/*Cart Logo */}

        <div className="relative cursor-pointer" onClick={handleOpenCart}>
          <Image alt="Cart" className="" src={Cart} />
          <span
            className={`min-w-4 text-[8px] font-normal absolute top-[-6px] -right-2 min-h-[15px] bg-lightgreen text-black rounded-full flex items-center justify-center ${
              totalQuantity === 0 ? "opacity-100" : "opacity-100"
            }`}
          >
            {totalQuantity}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
