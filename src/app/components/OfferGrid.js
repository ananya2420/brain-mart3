"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function OffersGrid({ title }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <section className="px-6 py-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative border rounded-lg p-3 bg-white shadow hover:shadow-md transition"
          >
            <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {product.discountPercent} OFF
            </div>

            <Image
              src={product.img}
              alt={product.name}
              width={120}
              height={120}
              className="object-contain mx-auto"
            />

            <div className="mt-3 text-center">
              <h3 className="font-medium text-sm">{product.name}</h3>
              <p className="text-xs text-gray-500">{product.spaces}</p>
              <div className="mt-1 text-sm">
                <span className="line-through text-gray-400 mr-2">
                  {product.originalPrice}
                </span>
                <span className="text-green-600 font-semibold">
                  {product.discountedPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OffersGrid;
