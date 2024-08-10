"use client";

import Image from "next/image";
import { useAtom } from "jotai";
import { useQuery } from "@tanstack/react-query";
import CloseIcon from "@/public/close.svg";
import CartItem from "@/src/components/cartpage/CartItem";
import { cartOpenAtom, cartItemsAtom } from "@/src/app/store";

const Cart = () => {
  const [isCartOpen, setCartOpen] = useAtom(cartOpenAtom);
  const [cartItems] = useAtom(cartItemsAtom);

  if (!isCartOpen) return null;

  const totalPrice = cartItems.reduce(
    (total: number, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed right-0 top-0 z-[100] h-full w-full bg-black bg-opacity-75">
      <div className="fixed right-0 top-0 z-[999] h-full w-[705px] mob:w-full transform overflow-x-hidden text-black rounded-bl-[100px] bg-primary">
        <div className="mt-[20px] mb-[6px] px-[60px] mob:px-[25px] flex justify-between items-center">
          <p className="text-black text-[20px] font-organetto font-extrabold leading-[60px] uppercase">
            MY CART
          </p>
          <button className="text-black" onClick={() => setCartOpen(false)}>
            <Image alt="closeIcon" src={CloseIcon} width={32} height={32} />
          </button>
        </div>
        <div className="px-[60px] pb-[50px]">
          <div>
            <div className="flex items-center gap-[23px] border-b border-b-gray">
              <p className="font-poppins text-black text-base cursor-pointer font-semibold leading-[32px] uppercase border-b-[2px] border-b-lightgreen">
                Product details
              </p>
              <p className="font-poppins text-black text-base cursor-pointer font-semibold leading-[32px] uppercase">
                Shipping
              </p>
              <p className="font-poppins text-black text-base cursor-pointer font-semibold leading-[32px] uppercase">
                Payment
              </p>
            </div>
            <div className="mt-7">
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  quantity={item.quantity}
                  imageUrl={item.imageUrl}
                  flavour={item.flavour}
                  id={""}
                  serving={0}
                  descriptionHeading={""}
                  descriptionParagraph={""}
                  size={""}
                />
              ))}
              <div>
                <div className="flex mb-10 justify-between items-center border-b border-t border-b-gray border-t-gray">
                  <p className="font-poppins uppercase text-[#838489] text-[16px] mob:text-[14px] font-medium leading-[60px]">
                    Total:
                  </p>
                  <p className="font-poppins text-black text-2xl font-semibold leading-6">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-center">
                  <button className="rounded-[20px] bg-lightgreen min-h-[50px] text-black text-base font-normal font-organetto flex items-center justify-center min-w-[160px] w-[393px]">
                    Proceed to delivery
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
