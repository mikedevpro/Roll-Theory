import ShopifyBuyButton from "./ShopifyBuyButton";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b1120] shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/15 px-3 py-1 text-sm text-white/70 hover:bg-white/10"
        >
          Close
        </button>

        <div className="grid md:grid-cols-2">
          <div className="min-h-[320px]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.25em] text-white/45 mb-3">
              {product.category}
            </p>

            <h3 className="text-3xl font-bold mb-3">{product.name}</h3>
            <p className="text-lg text-accent font-semibold mb-5">
              ${product.price}
            </p>
            <p className="text-white/70 leading-7 mb-8">
              {product.description}
            </p>

            {product.shopifyEmbedHtml ? (
              <ShopifyBuyButton embedHtml={product.shopifyEmbedHtml} />
            ) : (
              <a
                href={product.shopifyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                Buy on Shopify
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
