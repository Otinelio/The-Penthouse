import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Minus, CheckCircle } from 'lucide-react';
import { MENU_ITEMS, CATEGORIES, type MenuItem } from '@/data/penthouse';
import { useCart } from '@/store/useCart';
import { CartBar, CartDrawer } from '@/components/penthouse/CartDrawer';

export const Route = createFileRoute('/table/$tableId')({
  component: TableOrder,
});

const QR_CATS = CATEGORIES.filter((c) => c.id !== 'classic');

function TableOrder() {
  const { tableId } = Route.useParams();
  const [active, setActive] = useState<MenuItem['category']>('signature');
  const [openCart, setOpenCart] = useState(false);
  const [sent, setSent] = useState(false);
  const cart = useCart();
  const items = MENU_ITEMS.filter((i) => i.category === active);
  const count = cart.items.reduce((s, i) => s + i.qty, 0);

  if (sent) {
    return (
      <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center px-6 text-center">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
          <CheckCircle size={72} className="text-gold" />
        </motion.div>
        <h2 className="mt-8 font-serif italic text-4xl text-marble">Order received.</h2>
        <p className="mt-4 text-marble/70 font-body max-w-sm">Our team will be with you shortly.</p>
        <div className="mt-8 glass border border-gold/30 px-6 py-3 font-sans text-xs uppercase tracking-[0.3em] text-gold">
          Table {tableId.toUpperCase()}
        </div>
        <button onClick={() => setSent(false)} className="btn-ghost-gold mt-10">
          Order Again
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-obsidian pb-32">
      <header className="text-center py-8 border-b border-slate/40">
        <div className="font-serif text-gold text-xl tracking-[0.3em]">THE PENTHOUSE</div>
        <div className="mt-3 inline-block glass border border-gold/30 px-5 py-1.5 font-sans text-[10px] uppercase tracking-[0.3em] text-gold">
          Table {tableId.toUpperCase()}
        </div>
      </header>

      <div className="sticky top-0 bg-obsidian/95 backdrop-blur z-20 border-b border-slate/40">
        <div className="overflow-x-auto">
          <div className="flex gap-1 px-4 py-3 whitespace-nowrap">
            {QR_CATS.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] transition ${active === c.id ? 'text-gold border-b-2 border-gold' : 'text-marble/60'}`}
              >
                {c.label.replace(' Cocktails', '')}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-6 space-y-3 max-w-xl mx-auto">
        {items.map((it) => {
          const inCart = cart.items.find((c) => c.id === it.id);
          return (
            <div key={it.id} className="glass border-l-2 border-copper p-4 flex items-center justify-between gap-4">
              <div className="flex-1">
                <div className="font-sans text-marble">{it.name}</div>
                <div className="text-gold font-serif text-lg mt-1">{it.price.toLocaleString()} XOF</div>
              </div>
              {inCart ? (
                <div className="flex items-center gap-2">
                  <button onClick={() => cart.dec(it.id)} className="w-8 h-8 border border-gold text-gold">
                    <Minus size={14} className="mx-auto" />
                  </button>
                  <span className="w-6 text-center text-marble font-serif">{inCart.qty}</span>
                  <button
                    onClick={() => cart.add({ id: it.id, name: it.name, price: it.price })}
                    className="w-8 h-8 border border-gold text-gold"
                  >
                    <Plus size={14} className="mx-auto" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => cart.add({ id: it.id, name: it.name, price: it.price })}
                  className="px-4 py-2 border border-gold text-gold font-sans text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-obsidian transition"
                >
                  Add
                </button>
              )}
            </div>
          );
        })}
      </div>

      {count > 0 && !openCart && (
        <CartBar count={count} total={cart.total()} onClick={() => setOpenCart(true)} />
      )}

      <CartDrawer
        open={openCart}
        onClose={() => setOpenCart(false)}
        mode="reception"
        tableId={tableId}
        onSubmitted={() => setSent(true)}
      />
    </div>
  );
}
