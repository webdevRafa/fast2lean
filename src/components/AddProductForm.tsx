// src/components/AddProductForm.tsx
import React, { useState } from "react";
import { addProduct } from "../utils/addProduct";

const AddProductForm: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const product = {
      name,
      price: parseFloat(price),
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
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full border p-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        className="w-full border p-2"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tags (comma separated)"
        className="w-full border p-2"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amazon Link"
        className="w-full border p-2"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL (optional)"
        className="w-full border p-2"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
