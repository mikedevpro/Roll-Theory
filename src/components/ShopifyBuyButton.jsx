import { useEffect, useRef } from "react";

export default function ShopifyBuyButton({ embedHtml }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = embedHtml;
  }, [embedHtml]);

  return <div ref={containerRef} />;
}