import { useMemo } from "react";

const sample = [
  { id: 1, title: "AeroFlex Running Shoes", price: 129, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, title: "CloudWeave Hoodie", price: 89, image: "https://images.unsplash.com/photo-1615743771721-e2ee843a41c0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZXJvRmxleCUyMFJ1bm5pbmclMjBTaG9lc3xlbnwwfDB8fHwxNzYyNDE5MjM1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { id: 3, title: "Everyday Backpack", price: 149, image: "https://images.unsplash.com/photo-1514477917009-389c76a86b68?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, title: "Minimal Watch", price: 199, image: "https://images.unsplash.com/photo-1511370235399-1802cae1d32f?q=80&w=1200&auto=format&fit=crop" },
  { id: 5, title: "Studio Headphones", price: 249, image: "https://images.unsplash.com/photo-1615743771721-e2ee843a41c0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZXJvRmxleCUyMFJ1bm5pbmclMjBTaG9lc3xlbnwwfDB8fHwxNzYyNDE5MjM1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { id: 6, title: "Traveler Bottle", price: 39, image: "https://images.unsplash.com/photo-1615743771721-e2ee843a41c0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBZXJvRmxleCUyMFJ1bm5pbmclMjBTaG9lc3xlbnwwfDB8fHwxNzYyNDE5MjM1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
];

export default function ProductGrid({ query = "", onAdd }) {
  const products = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? sample.filter((p) => p.title.toLowerCase().includes(q)) : sample;
  }, [query]);

  return (
    <section id="collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Featured products</h2>
          <p className="text-sm text-slate-600">Hand-picked items loved by our community</p>
        </div>
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View all</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <article key={p.id} className="group rounded-2xl border border-slate-200 overflow-hidden bg-white">
            <div className="aspect-square overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-slate-900 line-clamp-1">{p.title}</h3>
              <div className="mt-1 flex items-center justify-between">
                <span className="font-semibold text-slate-900">${p.price}</span>
                <button onClick={() => onAdd?.(p)} className="text-sm px-3 py-1.5 rounded-md bg-slate-900 text-white hover:bg-slate-700">Add</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
