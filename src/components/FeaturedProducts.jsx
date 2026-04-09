import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function FeaturedProducts({ onQuickView }) {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section id="featured" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-white/50">
              Curated Picks
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
              Featured Gear
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}