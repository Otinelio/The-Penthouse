import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, CheckCircle } from 'lucide-react';
import { PageTransition, SectionEyebrow } from '@/components/penthouse/PageTransition';
import { CartBar, CartDrawer } from '@/components/penthouse/CartDrawer';
import { MENU_ITEMS, CATEGORIES, type MenuItem } from '@/data/penthouse';
import { useCart } from '@/store/useCart';

export const Route = createFileRoute('/_public/menu')({
  head: () => ({
    meta: [
      { title: 'Menu — THE PENTHOUSE' },
      { name: 'description', content: 'Signature cocktails crafted in-house. Refined tapas from local & global inspiration.' },
    ],
    links: [{ rel: 'canonical', href: '/menu' }],
  }),
  component: Menu,
});

function Menu() {
  const [active, setActive] = useState<MenuItem['category']>('signature');
  const [openCart, setOpenCart] = useState(false);
  const [sent, setSent] = useState(false);
  const cart = useCart();
  const items = MENU_ITEMS.filter((i) => i.category === active);
  const currentLabel = CATEGORIES.find((c) => c.id === active)?.label;
  const count = cart.items.reduce((s, i) => s + i.qty, 0);

  if (sent) {
    return (
      <PageTransition>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center py-32">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }}>
            <CheckCircle size={72} className="text-gold" />
          </motion.div>
          <h2 className="mt-8 font-serif italic text-4xl text-marble">Order sent.</h2>
          <p className="mt-4 text-marble/70 font-body max-w-sm">
            Complete your order on WhatsApp — we'll confirm shortly.
          </p>
          <button onClick={() => setSent(false)} className="btn-ghost-gold mt-10">
            Order Again
          </button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="pt-36 pb-16 px-6 lg:px-12 text-center">
        <SectionEyebrow>The List</SectionEyebrow>
        <h1 className="mt-6 font-serif italic text-6xl md:text-8xl text-gold">The Menu</h1>
        <p className="mt-6 max-w-xl mx-auto text-marble/70 font-body">
          Signature cocktails crafted in-house. Refined tapas from local & global inspiration.
        </p>
      </section>

      <div className="sticky top-20 z-30 bg-obsidian/95 backdrop-blur border-y border-slate/30">
        <div className="mx-auto max-w-7xl px-4 overflow-x-auto">
          <div className="flex gap-2 md:gap-8 justify-start md:justify-center py-4 whitespace-nowrap">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className="relative font-sans uppercase text-[11px] tracking-[0.2em] px-3 py-2 text-marble/70 hover:text-gold transition"
              >
                {c.label}
                {active === c.id && (
                  <motion.span layoutId="menu-underline" className="absolute -bottom-0 left-2 right-2 h-[2px] bg-gold" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 px-6 lg:px-12 pb-32">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-serif italic text-3xl text-marble mb-10">{currentLabel}</h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {items.map((it) => {
                const inCart = cart.items.find((c) => c.id === it.id);
                return (
                  <div
                    key={it.id}
                    className="glass border-l-2 border-copper p-6 md:p-8 flex justify-between items-start gap-6 hover:border-gold transition"
                  >
                    <div className="flex-1">
                      <h3 className="font-sans text-lg text-marble">{it.name}</h3>
                      <p className="mt-2 text-sm text-marble/60 font-body leading-relaxed">{it.description}</p>
                      <div className="mt-3 font-serif text-gold text-xl">
                        {it.price.toLocaleString()} <span className="text-xs tracking-widest">XOF</span>
                      </div>
                    </div>
                    {inCart ? (
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => cart.dec(it.id)}
                          className="w-8 h-8 border border-gold text-gold flex items-center justify-center"
                          aria-label="Decrease"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-6 text-center text-marble font-serif">{inCart.qty}</span>
                        <button
                          onClick={() => cart.add({ id: it.id, name: it.name, price: it.price })}
                          className="w-8 h-8 border border-gold text-gold flex items-center justify-center"
                          aria-label="Increase"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => cart.add({ id: it.id, name: it.name, price: it.price })}
                        className="shrink-0 px-4 py-2 border border-gold text-gold font-sans text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-obsidian transition"
                      >
                        Add
                      </button>
                    )}
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {count > 0 && !openCart && (
        <CartBar count={count} total={cart.total()} onClick={() => setOpenCart(true)} />
      )}

      <CartDrawer
        open={openCart}
        onClose={() => setOpenCart(false)}
        mode="whatsapp"
        onSubmitted={() => setSent(true)}
      />
    </PageTransition>
  );
}
