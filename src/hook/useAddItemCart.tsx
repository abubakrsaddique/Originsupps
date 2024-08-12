import { useAtom } from "jotai";
import { useEffect } from "react";
import { cartAtom, cartItemsAtom, cartOpenAtom } from "@/src/app/store";
import type { CartItem } from "@/src/types";

export const useCart = () => {
  const [cartItems, setCartItems] = useAtom(cartItemsAtom);
  const [isCartOpen, setIsCartOpen] = useAtom(cartOpenAtom);

  const addItemToCart = (product: CartItem, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );

      let updatedItems;
      if (existingItemIndex > -1) {
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: Math.max(quantity, 1),
        };
      } else {
        updatedItems = [
          ...prevItems,
          { ...product, quantity: Math.max(quantity, 1) },
        ];
      }

      return updatedItems;
    });
    setIsCartOpen(true);
  };

  const updateItemQuantity = (productId: string, newQuantity: number) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(newQuantity, 0) }
            : item
        )
        .filter((item) => item.quantity > 0);

      return updatedItems;
    });
  };

  const removeItemFromCart = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return {
    cartItems,
    isCartOpen,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    closeCart,
  };
};
