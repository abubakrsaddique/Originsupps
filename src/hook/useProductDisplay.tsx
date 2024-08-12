import { useEffect } from "react";
import { atom, useAtom } from "jotai";
import { useParams } from "next/navigation";
import { cartItemsAtom, productAtom } from "@/src/app/store";
import { useProducts } from "@/src/hook/useProductData";
import { useCart } from "@/src/hook/useAddItemCart";
import { Product } from "@/src/types";

const isMountedAtom = atom(false);
const quantityAtom = atom(0);

export const useProductDisplay = () => {
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

  return {
    isMounted,
    product,
    quantity,
    isCartOpen,
    handleQuantityChange,
    handleAddToCart,
  };
};
