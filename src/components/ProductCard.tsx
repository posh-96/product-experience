"use client";

import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
    onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
    return (
        <div
            className="
        group relative overflow-hidden rounded-2xl
        bg-neutral-900 text-white
        transition-transform duration-300
        hover:-translate-y-2
      "
        >
            {/* Image */}
            <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={false}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 space-y-3">
                {/* Category */}
                <span className="inline-block text-xs uppercase tracking-wider text-neutral-400">
                    {product.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold leading-tight">
                    {product.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm text-neutral-300">
                    {product.tagline}
                </p>

                {/* Benefit */}
                <p className="text-sm text-neutral-400">
                    {product.benefit}
                </p>

                {/* CTA */}
                <div className="pt-4">
                    <button
                        type="button"
                        onClick={() => onClick(product)}
                        className="
      inline-flex items-center gap-2
      text-sm font-medium text-white
      cursor-pointer
    "
                    >
                        {product.cta}
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </button>
                </div>

            </div>
        </div>
    );
}
