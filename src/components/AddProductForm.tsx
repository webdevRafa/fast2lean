// src/components/AddProductForm.tsx

import { uploadProducts } from "../utils/addProducts";
import { ViewProducts } from "./ViewProducts";
import { uploadArticles } from "../utils/addArticles";

const AddProductForm: React.FC = () => {
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
