export default function ProductCard({ product, onQuickView }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/45 mb-2">
              {product.category}
            </p>
            <h3 className="text-lg font-semibold">{product.name}</h3>
          </div>
          <span className="text-sm font-medium">${product.price}</span>
        </div>

        <p className="text-sm text-white/60 mt-3">
          {product.description}
        </p>

        <div className="flex gap-3 mt-5">
          <button
            onClick={() => onQuickView(product)}
            className="flex-1 rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10 transition"
          >
            Quick View
          </button>
          <a
            href={product.shopifyUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full bg-accent text-black px-4 py-2 text-sm font-semibold hover:opacity-90 transition text-center"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
