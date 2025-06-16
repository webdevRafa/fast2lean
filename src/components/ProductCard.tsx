// src/components/ProductCard.tsx
interface Product {
  name: string;
  description: string;
  link: string;
  imageUrl?: string;
}

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div
    data-aos="fade-up"
    className="border border-gray-300 rounded-lg p-4 shadow-md max-w-sm w-full bg-white"
  >
    {product.imageUrl && (
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-40 object-cover rounded mb-3"
      />
    )}
    <h3 className="text-xl font-semibold mb-1">{product.name}</h3>
    <p className="text-sm text-gray-700 mb-3">{product.description}</p>
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer inline-block bg-[#7d0505] text-white px-4 py-2 rounded"
    >
      View on Amazon
    </a>
  </div>
);
