import { MetadataRoute } from "next";
import { collection, getDocs } from "firebase/firestore";
import { db, app } from "../Firebase";
import { Product } from "../types";
import { getFirestore } from "firebase/firestore";

const WEBSITE_HOST_URL = process.env.SITE_URL || "http://localhost:3000";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const changeFrequency: ChangeFrequency = "daily";

  const productRoutes = await fetchProductRoutes();

  const routes = ["", "/about", "/product"].map((route) => ({
    url: `${WEBSITE_HOST_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency,
  }));

  return [...routes, ...productRoutes];
}

async function fetchProductRoutes() {
  const productsCollection = collection(getFirestore(app), "products");
  const productSnapshot = await getDocs(productsCollection);
  const productRoutes = productSnapshot.docs.map((doc) => ({
    url: `${WEBSITE_HOST_URL}/product/${doc.id}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily" as ChangeFrequency,
  }));

  return productRoutes;
}
