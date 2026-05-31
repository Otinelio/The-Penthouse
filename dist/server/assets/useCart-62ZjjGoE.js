import { create } from "zustand";
import { persist } from "zustand/middleware";
const useCart = create()(
  persist(
    (set, get) => ({
      items: [],
      add: (item) => set((s) => {
        const ex = s.items.find((i) => i.id === item.id);
        if (ex) return { items: s.items.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i) };
        return { items: [...s.items, { ...item, qty: 1 }] };
      }),
      dec: (id) => set((s) => ({
        items: s.items.flatMap((i) => i.id === id ? i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : [] : [i])
      })),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      clear: () => set({ items: [] }),
      total: () => get().items.reduce((s, i) => s + i.price * i.qty, 0)
    }),
    { name: "penthouse-cart" }
  )
);
const ORDERS_KEY = "penthouse-orders";
function loadOrders() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]");
  } catch {
    return [];
  }
}
function saveOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  window.dispatchEvent(new Event("orders-updated"));
}
function addOrder(o) {
  const orders = loadOrders();
  orders.unshift(o);
  saveOrders(orders);
}
export {
  addOrder as a,
  loadOrders as l,
  saveOrders as s,
  useCart as u
};
