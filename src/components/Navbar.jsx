import { ShoppingCart, User, Search, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ cartCount = 0, onToggleCart, onSearch }) {
  const [q, setQ] = useState("");
  const submit = (e) => {
    e.preventDefault();
    onSearch?.(q.trim());
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-slate-100 lg:hidden" aria-label="Open menu">
            <Menu className="w-5 h-5" />
          </button>
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-block w-8 h-8 rounded bg-gradient-to-tr from-indigo-600 to-violet-500" />
            <span className="text-lg">BlueShop</span>
          </a>
        </div>

        <form onSubmit={submit} className="hidden md:flex items-center gap-2 w-full max-w-md">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-slate-400" />
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              type="search"
              placeholder="Search products..."
              className="w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button type="submit" className="px-3 py-2 text-sm rounded-lg bg-slate-900 text-white hover:bg-slate-700">Search</button>
        </form>

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-slate-100 hover:bg-slate-200">
            <User className="w-4 h-4" />
            <span>Account</span>
          </button>
          <button
            onClick={onToggleCart}
            className="relative p-2 rounded-lg hover:bg-slate-100"
            aria-label="Open cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center w-5 h-5 text-[11px] font-medium rounded-full bg-indigo-600 text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
