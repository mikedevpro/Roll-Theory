export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-white/45">
            Roll Theory
          </p>
          <h1 className="text-lg font-semibold tracking-wide">
            Premium Skate Goods
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/75">
          <a href="#featured" className="hover:text-white transition">
            Featured
          </a>
          <a href="#shop" className="hover:text-white transition">
            Shop
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
        </div>

        <a
          href="https://roll-theory.myshopify.com/cart"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/10 transition"
        >
          Cart (0)
        </a>
      </nav>
    </header>
  );
}
