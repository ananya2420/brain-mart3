"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductCard() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch("/api/product");
      const data = await res.json();
      setProduct(data[0]); // Single product for now
    };

    getProduct();
  }, []);

  if (!product) return <p className="text-center p-10">Loading...</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 shadow rounded-xl">
      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="rounded-lg object-contain mx-auto"
      />

      <h1 className="text-xl font-bold mt-4">{product.name}</h1>

      <div className="flex items-center gap-2 mt-2">
        <span className="text-yellow-500">★ {product.rating}</span>
        <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
      </div>

      <div className="text-xl font-semibold mt-2 text-green-600">
        {product.discountedPrice}
        <span className="text-sm text-gray-400 line-through ml-2">
          {product.originalPrice}
        </span>
      </div>

      <div className="mt-4">
        <label className="block mb-1 text-sm text-gray-700">Color: {product.selectedColor}</label>
        <div className="flex gap-2">
          {product.colorOptions.map((color, i) => (
            <div
              key={i}
              className={`w-6 h-6 rounded-full border ${
                color === "black"
                  ? "bg-black"
                  : color === "teal"
                  ? "bg-teal-500"
                  : "bg-blue-900"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <label className="block mb-1 text-sm text-gray-700">Size:</label>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              className={`px-3 py-1 rounded border ${
                size === product.selectedSize
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <button className="w-full mt-6 bg-black text-white py-2 rounded hover:opacity-90">
        Add to Cart
      </button>
    </div>
  );
}
