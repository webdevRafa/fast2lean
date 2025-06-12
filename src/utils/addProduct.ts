import { httpsCallable } from "firebase/functions";
import { functions } from "../firebase/firebaseConfig";

interface ProductInput {
  name: string;
  price: number;
  tags: string[];
  link: string;
  image?: string;
}

export const addProduct = async (product: ProductInput) => {
  try {
    console.log("Submitting product:", product);

    const addProductFn = httpsCallable(functions, "addProduct");

    // ✅ Send the full product object directly
    const result = await addProductFn({data: product});


    console.log("Product added with ID:", result.data);
    return result.data;
  } catch (error: any) {
    console.error("Error adding product:", error.message);
    throw error;
  }
};
