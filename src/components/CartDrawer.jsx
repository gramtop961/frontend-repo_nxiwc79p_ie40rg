import { X, Trash2 } from "lucide-react";

export default function CartDrawer({ open, onClose, items = [], onRemove }) {
  const total = items.reduce((sum, i) => sum + i.price * (i.qty || 1), 0);

  return (
    <div className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
      <div
        className={`absolute inset-0 bg-slate-900/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl border-l border-slate-200 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <h3 className="text-lg font-semibold">Your cart</h3>
          <button className="p-2 rounded hover:bg-slate-100" onClick={onClose} aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
          {items.length === 0 && (
            <p className="text-sm text-slate-600">Your cart is empty.</p>
          )}
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 items-center border border-slate-200 rounded-xl p-2">
              <img src={item.image} alt={item.title} className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900 line-clamp-1">{item.title}</p>
                <p className="text-xs text-slate-600">${item.price} × {item.qty || 1}</p>
              </div>
              <button className="p-2 rounded hover:bg-slate-100" onClick={() => onRemove?.(item.id)} aria-label="Remove item">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-slate-600">Subtotal</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button className="w-full rounded-lg bg-indigo-600 text-white py-3 font-medium hover:bg-indigo-500">
            Checkout
          </button>
          <p className="mt-2 text-[11px] text-slate-500 text-center">Taxes and shipping calculated at checkout</p>
        </div>
      </aside>
    </div>
  );
}
