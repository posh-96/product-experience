"use client";

import { useEffect } from "react";
import { Product } from "@/types/product";

interface ProductModalProps {
    product: Product | null;
    onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
    // 🔒 Lock background scroll
    useEffect(() => {
        if (product) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        // Cleanup (important)
        return () => {
            document.body.style.overflow = "";
        };
    }, [product]);

    if (!product) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Bottom Sheet */}
            <div
                className="
          fixed bottom-0 left-0 right-0 z-50
          max-h-[85vh]
          rounded-t-3xl
          bg-neutral-900 text-white
          p-8
          animate-slideUp
        "
            >
                {/* Handle */}
                <div className="mx-auto mb-6 h-1.5 w-12 rounded-full bg-neutral-700" />

                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 text-neutral-400 hover:text-white"
                >
                    ✕
                </button>

                {/* Content */}
                <div className="max-w-3xl">
                    <p className="text-sm uppercase tracking-wide text-neutral-400">
                        {product.category}
                    </p>

                    <h2 className="mt-2 text-3xl font-bold">
                        {product.title}
                    </h2>

                    <p className="mt-2 text-neutral-300">
                        {product.tagline}
                    </p>

                    <p className="mt-6 text-neutral-400 leading-relaxed">
                        {product.benefit}.
                        This product is designed to integrate seamlessly into modern
                        workflows and scale as your needs grow.
                    </p>

                    <div className="mt-8">
                        <button className="rounded-lg bg-white px-6 py-3 text-black font-medium hover:bg-neutral-200">
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
