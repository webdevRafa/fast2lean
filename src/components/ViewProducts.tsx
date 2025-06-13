import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/fetchProducts";
import type { Product } from "../utils/fetchProducts";

export const ViewProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const result = await fetchProducts();
      setProducts(result);
    };
    loadProducts();
  }, []);

  return (
    <>
      <section className="mt-20 mx-auto max-w-[1400px]">
        <h2 className="text-4xl mb-5 text-gray-700">Our Current Products</h2>
        <div className="grid grid-cols-3 gap-5">
          {products.map((product) => (
            <li
              key={product.id}
              className="border p-4 border-gray-400 rounded-md list-none bg-white"
            >
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-400">{product.description}</p>
            </li>
          ))}
        </div>
      </section>
    </>
  );
};
