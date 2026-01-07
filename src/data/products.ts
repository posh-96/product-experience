// src/data/products.ts

import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "product-1",
    title: "Insight AI",
    tagline: "Turn data into decisions",
    category: "AI Analytics",
    benefit: "Real-time insights for faster growth",
    image: "/images/product1.jpeg",
    cta: "Explore product",
  },
  {
    id: "product-2",
    title: "Flow Automate",
    tagline: "Workflows that run themselves",
    category: "Automation",
    benefit: "Reduce manual operations by 60%",
    image: "/images/product2.jpeg",
    cta: "See how it works",
  },
  {
    id: "product-3",
    title: "Secure Stack",
    tagline: "Security without complexity",
    category: "Cybersecurity",
    benefit: "Enterprise-grade protection built-in",
    image: "/images/product3.jpeg",
    cta: "View security",
  },
  {
    id: "product-4",
    title: "Scale Cloud",
    tagline: "Infrastructure that grows with you",
    category: "Cloud",
    benefit: "Built for performance and scale",
    image: "/images/product4.jpeg",
    cta: "Discover more",
  },
];
