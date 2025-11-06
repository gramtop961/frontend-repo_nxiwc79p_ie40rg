import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([]);

  const cartCount = useMemo(() => items.reduce((a, i) => a + (i.qty || 1), 0), [items]);

  const addToCart = (product) => {
    setItems((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) => (p.id === product.id ? { ...p, qty: (p.qty || 1) + 1 } : p));
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setOpen(true);
  };

  const removeFromCart = (id) => setItems((prev) => prev.filter((p) => p.id !== id));

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar cartCount={cartCount} onToggleCart={() => setOpen(true)} onSearch={setQuery} />
      <main>
        <Hero onShopNow={() => {
          const el = document.getElementById("collection");
          el?.scrollIntoView({ behavior: "smooth" });
        }} />
        <ProductGrid query={query} onAdd={addToCart} />
      </main>
      <CartDrawer open={open} onClose={() => setOpen(false)} items={items} onRemove={removeFromCart} />
      <footer className="border-t border-slate-200 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} BlueShop. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-900">Privacy</a>
            <a href="#" className="hover:text-slate-900">Terms</a>
            <a href="#" className="hover:text-slate-900">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
