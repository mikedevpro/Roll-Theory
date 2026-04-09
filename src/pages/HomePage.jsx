import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import ShopSection from "../components/ShopSection";
import ProductModal from "../components/ProductModal";
import BrandStory from "../components/BrandStory";
import Footer from "../components/Footer";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProducts onQuickView={setSelectedProduct} />
      <ShopSection onQuickView={setSelectedProduct} />
      <BrandStory />
      <Footer />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}