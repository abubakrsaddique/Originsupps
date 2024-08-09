"use client";

import React from "react";
import { useAtom } from "jotai";
import { atom } from "jotai";
import { useRouter } from "next/navigation";
import { FaSpinner } from "react-icons/fa";

import { Button } from "@/src/ui/Button";
import { useAddProduct } from "@/src/hook/useAddProduct";

const imageAtom = atom<File | null>(null);
const titleAtom = atom<string>("");
const flavourAtom = atom<string>("");
const sizeAtom = atom<string>("");
const servingAtom = atom<number>(0);
const priceAtom = atom<number>(0);
const descriptionHeadingAtom = atom<string>("");
const descriptionParagraphAtom = atom<string>("");

const AddProduct: React.FC = () => {
  const [image, setImage] = useAtom(imageAtom);
  const [title, setTitle] = useAtom(titleAtom);
  const [serving, setServing] = useAtom(servingAtom);
  const [flavour, setFlavour] = useAtom(flavourAtom);
  const [size, setSize] = useAtom(sizeAtom);
  const [price, setPrice] = useAtom(priceAtom);
  const [descriptionHeading, setDescriptionHeading] = useAtom(
    descriptionHeadingAtom
  );
  const [descriptionParagraph, setDescriptionParagraph] = useAtom(
    descriptionParagraphAtom
  );

  const router = useRouter(); // Use router for navigation
  const { mutate, status } = useAddProduct();

  const isLoading = status === "pending";

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    mutate(
      {
        image,
        title,
        serving,
        flavour,
        size,
        price,
        descriptionHeading,
        descriptionParagraph,
      },
      {
        onSuccess: () => {
          // Clear form fields
          setImage(null);
          setTitle("");
          setServing(0);
          setFlavour("");
          setSize("");
          setPrice(0);
          setDescriptionHeading("");
          setDescriptionParagraph("");

          // Navigate to the shop page
          router.push("/shop");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="mb-4">
        <label
          htmlFor="image"
          className="block text-base font-medium py-2 text-primary"
        >
          Image
        </label>
        <input
          required
          type="file"
          id="image"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          className="mt-2 block w-full text-primary"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-primary"
        >
          Title
        </label>
        <input
          required
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full py-2 border-gray rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="serving"
          className="block text-sm font-medium text-primary"
        >
          Serving Number
        </label>
        <input
          required
          type="number"
          id="number"
          value={serving}
          onChange={(e) => setServing(parseFloat(e.target.value))}
          className="mt-1 block w-full py-2 border-gray rounded-md shadow-sm remove-arrow"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="flavour"
          className="block text-sm font-medium text-primary"
        >
          Flavour
        </label>
        <input
          required
          type="text"
          id="flavour"
          value={flavour}
          onChange={(e) => setFlavour(e.target.value)}
          className="mt-1 block w-full py-2 border-gray rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="size"
          className="block text-sm font-medium text-primary"
        >
          Size
        </label>
        <input
          required
          type="text"
          id="size"
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="mt-1 block w-full py-2 border-gray rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-primary"
        >
          Price
        </label>
        <input
          required
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          className="mt-1 block w-full py-2 border-gray rounded-md shadow-sm remove-arrow"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="descriptionHeading"
          className="block text-sm font-medium text-primary"
        >
          Description Heading
        </label>
        <input
          required
          type="text"
          id="descriptionHeading"
          value={descriptionHeading}
          onChange={(e) => setDescriptionHeading(e.target.value)}
          className="mt-1 block w-full py-2 border-gray rounded-md shadow-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="descriptionParagraph"
          className="block text-sm font-medium text-primary"
        >
          Description Paragraph
        </label>
        <textarea
          required
          id="descriptionParagraph"
          value={descriptionParagraph}
          onChange={(e) => setDescriptionParagraph(e.target.value)}
          className="mt-1 block w-full border-gray py-6 rounded-md shadow-sm"
        ></textarea>
      </div>
      <Button
        variant="primary"
        size="lg"
        type="submit"
        className="text-black"
        disabled={isLoading}
      >
        {isLoading ? <FaSpinner className="animate-spin mr-2" /> : "Submit"}
      </Button>
    </form>
  );
};

export default AddProduct;
