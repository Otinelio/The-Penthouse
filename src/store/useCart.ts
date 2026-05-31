import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartItem = { id: string; name: string; price: number; qty: number };

type State = {
  items: CartItem[];
  add: (item: { id: string; name: string; price: number }) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  total: () => number;
};

export const useCart = create<State>()(
  persist(
    (set, get) => ({
      items: [],
      add: (item) => set((s) => {
        const ex = s.items.find((i) => i.id === item.id);
        if (ex) return { items: s.items.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i) };
        return { items: [...s.items, { ...item, qty: 1 }] };
      }),
      dec: (id) => set((s) => ({
        items: s.items.flatMap((i) => i.id === id ? (i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []) : [i])
      })),
      remove: (id) => set((s) => ({ items: s.items.filter((i) => i.id !== id) })),
      clear: () => set({ items: [] }),
      total: () => get().items.reduce((s, i) => s + i.price * i.qty, 0),
    }),
    { name: 'penthouse-cart' }
  )
);

export type Order = {
  id: string;
  tableId: string;
  guestName: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'delivered' | 'cancelled';
  timestamp: string;
};

export const ORDERS_KEY = 'penthouse-orders';

export function loadOrders(): Order[] {
  if (typeof window === 'undefined') return [];
  try { return JSON.parse(localStorage.getItem(ORDERS_KEY) || '[]'); } catch { return []; }
}

export function saveOrders(orders: Order[]) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  window.dispatchEvent(new Event('orders-updated'));
}

export function addOrder(o: Order) {
  const orders = loadOrders();
  orders.unshift(o);
  saveOrders(orders);
}
