// import { atom } from "jotai";
// import { Product } from "../types";
// import type { CartItem } from "@/src/types";

// export const productAtom = atom<Product | null>(null);

// export const cartOpenAtom = atom<boolean>(false);

// export const cartItemsAtom = atom<CartItem[]>([]);

// export const cartAtom = atom<CartItem[]>([]);

// export const loadingAtom = atom(false);

// export const activeTabAtom = atom<"preworkout" | "benefits">("preworkout");
// export const imageColorAtom = atom<{ preworkout: string; benefits: string }>({
//   preworkout: "gray",
//   benefits: "gray",
// });

// export const faqAtom = atom<number | null>(null);

// export const expandedIndexAtom = atom<number | null>(null);

import { atom } from "jotai";
import { Product } from "../types";
import type { CartItem } from "@/src/types";

export const productAtom = atom<Product | null>(null);

export const cartOpenAtom = atom<boolean>(false);

export const cartItemsAtom = atom<CartItem[]>([]);

export const cartAtom = atom<CartItem[]>([]);

export const loadingAtom = atom(false);

export const activeTabAtom = atom<"preworkout" | "benefits">("preworkout");

export const imageColorAtom = atom<{ preworkout: string; benefits: string }>({
  preworkout: "gray",
  benefits: "gray",
});

export const faqAtom = atom<number | null>(null);

export const expandedIndexAtom = atom<number | null>(null);

export const quantityAtom = atom<number>(0);
