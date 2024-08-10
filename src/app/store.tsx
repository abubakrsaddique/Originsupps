import { atom } from "jotai";
import { Product } from "../types";
import type { CartItem } from "@/src/types";

export const productAtom = atom<Product | null>(null);

export const cartOpenAtom = atom<boolean>(false);

export const cartItemsAtom = atom<CartItem[]>([]);

export const cartAtom = atom<CartItem[]>([]);
