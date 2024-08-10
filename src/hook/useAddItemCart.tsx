import { useAtom } from "jotai";
import { cartItemsAtom, cartOpenAtom } from "@/src/app/store";
import { Product } from "@/src/types";

export const useCart = () => {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const [isCartOpen, setIsCartOpen] = useAtom(cartOpenAtom);

  const addItemToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return {
    cartItems,
    isCartOpen,
    addItemToCart,
    closeCart,
  };
};
