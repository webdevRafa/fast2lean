// src/components/AddProductForm.tsx
import React, { useState } from "react";
import { addProduct } from "../utils/addProduct";
import { uploadProducts } from "../utils/addProducts";
import { ViewProducts } from "./ViewProducts";
import { uploadArticles } from "../utils/addArticles";

const AddProductForm: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsedPrice = parseFloat(price);

    if (isNaN(parsedPrice)) {
      alert("❌ Please enter a valid number for price.");
      return;
    }
    const product = {
      name,
      price: parsedPrice,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0), // ✅ This is the fix
      link,
      image,
    };

    try {
      await addProduct(product);
      alert("✅ Product added!");
      setName("");
      setPrice("");
      setTags("");
      setLink("");
      setImage("");
    } catch (error) {
      alert("❌ Failed to add product. Check console.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="mt-20 mx-auto max-w-[1400px]">
        <button
          onClick={uploadProducts}
          className="cursor-pointer mx-auto block bg-green-800 hover:bg-green-600 transition duration-300 ease-in-out p-4 text-white"
        >
          ADD PRODUCTS.JSON
        </button>
      </div>
      <div className="mt-20 mx-auto max-w-[1400px]">
        <button
          onClick={uploadArticles}
          className="cursor-pointer mx-auto block bg-green-800 hover:bg-green-600 transition duration-300 ease-in-out p-4 text-white"
        >
          ADD ARTICLES.JSON
        </button>
      </div>
      <div>
        <ViewProducts />
      </div>
    </>
  );
};

export default AddProductForm;
