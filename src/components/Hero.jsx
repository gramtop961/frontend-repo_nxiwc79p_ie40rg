import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero({ onShopNow }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-3 py-1 text-xs text-indigo-700 mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            New season arrivals
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Elevate your style with modern essentials
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl">
            Discover curated pieces crafted for comfort and performance. Shop trusted brands and exclusive drops tailored for you.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onShopNow}
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium hover:bg-slate-700"
            >
              Shop now
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href="#collection" className="text-sm font-medium text-slate-900 hover:underline">
              Explore collection
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 p-[2px]">
            <div className="w-full h-full rounded-2xl bg-white overflow-hidden grid grid-cols-2 gap-2 p-2">
              {new Array(6).fill(0).map((_, i) => (
                <div key={i} className="rounded-xl bg-slate-100" />
              ))}
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-indigo-500/10 blur-2xl rounded-full" />
        </div>
      </div>
    </section>
  );
}
