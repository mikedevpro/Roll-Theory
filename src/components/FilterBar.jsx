export default function FilterBar({
  categories,
  activeCategory,
  setActiveCategory,
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm transition border ${
              isActive
                ? "bg-white text-brand border-white"
                : "bg-white/5 text-white border-white/10 hover:bg-white/10"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}