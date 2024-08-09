import { useMutation } from "@tanstack/react-query";
import { db, storage } from "../Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";

interface ProductData {
  image: File | null;
  title: string;
  flavour: string;
  size: string;
  serving: number;
  price: number;
  descriptionHeading: string;
  descriptionParagraph: string;
}

const uploadImageAndGetURL = async (image: File): Promise<string> => {
  if (!image) throw new Error("No image file provided");

  try {
    const storageRef = ref(storage, `images/${image.name}`);
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

const addProductToFirestore = async (product: ProductData): Promise<void> => {
  let imageUrl = "";

  try {
    if (product.image) {
      imageUrl = await uploadImageAndGetURL(product.image);
    }

    const { image, ...productData } = product;

    await addDoc(collection(db, "products"), {
      ...productData,
      imageUrl,
    });
  } catch (error) {
    console.error("Error adding product to Firestore:", error);
    throw error;
  }
};

export const useAddProduct = () =>
  useMutation({
    mutationFn: addProductToFirestore,
    onError: (error: Error) => {
      toast.error(`Error adding product: ${error.message}`);
    },
    onSuccess: () => {
      toast.success("Product added successfully!");
    },
  });
