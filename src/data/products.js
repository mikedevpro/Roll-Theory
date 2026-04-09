const SHOPIFY_STORE_URL = "https://roll-theory.myshopify.com";

export const products = [
  {
    id: "deck-1",
    name: "Midnight Cruiser Deck",
    price: 89,
    category: "Decks",
    image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?auto=format&fit=crop&w=900&q=80",
    description: "A smooth all-around cruiser deck built for late-night city rides.",
    shopifyUrl: `${SHOPIFY_STORE_URL}/products/midnight-cruiser-deck`,
    shopifyEmbedHtml: `<a
      href="${SHOPIFY_STORE_URL}/products/midnight-cruiser-deck"
      target="_blank"
      rel="noreferrer"
      style="display:inline-flex;align-items:center;justify-content:center;border-radius:9999px;padding:0.75rem 1.5rem;background:#22c55e;color:#020617;font-weight:700;text-decoration:none;"
    >
      Buy Midnight Cruiser Deck
    </a>`,
    featured: true,
  },
  {
    id: "deck-2",
    name: "Velocity Street Deck",
    price: 94,
    category: "Decks",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
    description: "Responsive pop and lightweight control for technical street sessions.",
    shopifyUrl: `${SHOPIFY_STORE_URL}/products/velocity-street-deck`,
    featured: true,
  },
  {
    id: "wheel-1",
    name: "Neon Glide Wheels",
    price: 45,
    category: "Wheels",
    image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=900&q=80",
    description: "Fast-rolling wheels with smooth grip for pavement and park.",
    shopifyUrl: `${SHOPIFY_STORE_URL}/products/neon-glide-wheels`,
    featured: true,
  },
  {
    id: "wheel-2",
    name: "Afterdark Wheels",
    price: 49,
    category: "Wheels",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    description: "Designed for clean slides, sharp turns, and a confident ride feel.",
    shopifyUrl: `${SHOPIFY_STORE_URL}/products/afterdark-wheels`,
    featured: false,
  },
  {
    id: "apparel-1",
    name: "Roll Theory Tee",
    price: 35,
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    description: "Soft premium tee with a clean front graphic and relaxed fit.",
    shopifyUrl: `${SHOPIFY_STORE_URL}/products/roll-theory-tee`,
    featured: true,
  },
  {
    id: "apparel-2",
    name: "Flow State Hoodie",
    price: 72,
    category: "Apparel",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=80",
    description: "Heavyweight hoodie built for chilly morning sessions and late-night hangs.",
    shopifyUrl: `${SHOPIFY_STORE_URL}/products/flow-state-hoodie`,
    featured: false,
  },
  {
    id: "accessory-1",
    name: "Grip Tape Pack",
    price: 18,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80",
    description: "High-traction grip tape with a durable finish for everyday riding.",
    shopifyUrl: `${SHOPIFY_STORE_URL}/products/grip-tape-pack`,
    featured: false,
  },
  {
    id: "accessory-2",
    name: "Roll Theory Cap",
    price: 32,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=80",
    description: "Minimal cap with a structured fit and subtle branded embroidery.",
    shopifyUrl: `${SHOPIFY_STORE_URL}/products/roll-theory-cap`,
    featured: false,
  },
];
