export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold">Roll Theory</p>
          <p className="text-sm text-white/50">
            Premium skate storefront prototype.
          </p>
        </div>

        <div className="text-sm text-white/45">
          Built as a custom Shopify integration portfolio concept.
        </div>
      </div>
    </footer>
  );
}