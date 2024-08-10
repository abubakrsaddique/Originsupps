import Image from "next/image";
import { FC } from "react";
import { useAtom } from "jotai";
import { cartItemsAtom } from "@/src/app/store";
import type { CartItem as CartItemType } from "@/src/types";

const CartItem: FC<CartItemType> = ({
  title: productName,
  price,
  quantity,
  imageUrl: imageSrc,
  flavour: flavor,
}) => {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);

  const handleQuantityChange = (productName: string, increment: boolean) => {
    const updatedCartItems = cartItems
      .map((item) =>
        item.title === productName
          ? {
              ...item,
              quantity: increment ? item.quantity + 1 : item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCartItems);
  };

  return (
    <div className="flex items-center gap-[20px] mb-[24px]">
      <div className="flex items-center">
        <div className="h-[120px] relative flex items-center justify-center w-[120px] bg-gray rounded-[25px]">
          <Image
            loading="lazy"
            alt={productName}
            src={imageSrc}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
      <div className="flex mob:block items-end justify-between w-full">
        <div>
          <p className="font-poppins text-black text-[22px] font-medium">
            {productName}
          </p>
          <div className="border-[#FAA41F] gap-[6px] flex items-center py-[2px] border-2 w-fit px-[10px] rounded-[20px] mt-[10px]">
            <div className="h-4 w-4 rounded-full bg-custom-gradient"></div>
            <p className="font-poppins text-xs font-normal leading-6 text-gray mt-1">
              {flavor}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[2px] mob:mt-2">
          <button
            className="h-[40px] w-[40px] bg-lightgray rounded-[15px] flex items-center justify-center"
            onClick={() => handleQuantityChange(productName, false)}
            disabled={quantity <= 0}
          >
            -
          </button>
          <span className="h-[40px] w-[40px] border border-bg-lightgray rounded-[15px] flex items-center justify-center">
            {quantity}
          </span>
          <button
            className="h-[40px] w-[40px] bg-lightgray rounded-[15px] flex items-center justify-center"
            onClick={() => handleQuantityChange(productName, true)}
          >
            +
          </button>
          <p className="font-poppins text-black text-[18px] mob:text-[16px] ml-[12px] font-semibold leading-6 w-[70px]">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
