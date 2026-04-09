export default function Hero() {
  return (
    <section className="px-6 py-24 text-center">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.25em] text-white/45 mb-4">
          Premium skate lifestyle
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
          Performance gear for riders who move with style.
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-7">
          Roll Theory blends premium skate essentials with a sharp modern brand
          experience—built to show how custom storefront design can connect cleanly
          to commerce.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#shop"
            className="bg-accent text-black px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Shop Collection
          </a>
          <a
            href="#about"
            className="border border-white/15 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition"
          >
            Explore Brand
          </a>
        </div>
      </div>
    </section>
  );
}