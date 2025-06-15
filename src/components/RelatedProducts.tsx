// src/components/RelatedProducts.tsx
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { ProductCard } from "./ProductCard";

interface Product {
  name: string;
  description: string;
  link: string;
  imageUrl?: string;
  tags: string[];
}

export const RelatedProducts: React.FC<{ productTags: string[] }> = ({
  productTags,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!productTags.length) return;

      const q = query(
        collection(db, "products"),
        where("tags", "array-contains-any", productTags)
      );
      const snapshot = await getDocs(q);
      const fetched = snapshot.docs.map((doc) => doc.data() as Product);
      setProducts(fetched);
    };

    fetchProducts();
  }, [productTags]);

  if (!products.length) return null;

  return (
    <section className="mt-5 mx-auto max-w-[1400px] my-10">
      <h2 data-aos="fade-up" className="text-2xl font-bold mb-6 text-center">
        Products You Might Like
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
        {products.slice(0, 3).map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </div>
    </section>
  );
};
