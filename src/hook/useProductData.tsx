"use client";

import { useQuery } from "@tanstack/react-query";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../Firebase";
import { Product } from "../types";
const db = getFirestore(app);

export const fetchProducts = async (): Promise<Product[]> => {
  const productsCollection = collection(db, "products");
  const productSnapshot = await getDocs(productsCollection);
  const productsList = productSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Product[];
  return productsList;
};

export const useProducts = () => {
  return useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
