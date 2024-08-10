import { atom } from "jotai";
import { Product, CartItem } from "../types";

export const productAtom = atom<Product | null>(null);

export const cartOpenAtom = atom<boolean>(false);

export const cartItemsAtom = atom<CartItem[]>([]);
