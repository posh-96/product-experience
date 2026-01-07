"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import { products } from "@/data/products";
import { Product } from "@/types/product";

export default function HomePage() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);

  return (
    <main className="min-h-screen bg-neutral-950 px-6 py-16">
      {/* Header */}
      <section className="mb-16 max-w-5xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Product Ecosystem
        </h1>
        <p className="text-neutral-400 max-w-xl">
          Four products designed as a connected experience — each solving a
          critical challenge for modern teams.
        </p>
      </section>

      {/* Jumbled 2-row layout */}
      <section className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-8 w-full">
        {/* Card 1 */}
        <div className="md:col-span-7 md:translate-y-6">
          <ProductCard
            product={products[0]}
            onClick={setActiveProduct}
          />
        </div>

        {/* Card 2 */}
        <div className="md:col-span-5 md:-translate-y-4">
          <ProductCard
            product={products[1]}
            onClick={setActiveProduct}
          />
        </div>

        {/* Card 3 */}
        <div className="md:col-span-5 md:translate-y-2">
          <ProductCard
            product={products[2]}
            onClick={setActiveProduct}
          />
        </div>

        {/* Card 4 */}
        <div className="md:col-span-7 md:-translate-y-6">
          <ProductCard
            product={products[3]}
            onClick={setActiveProduct}
          />
        </div>
      </section>

      {/* Bottom Sheet Modal */}
      <ProductModal
        product={activeProduct}
        onClose={() => setActiveProduct(null)}
      />
    </main>
  );
}
