import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, X, ArrowRight } from 'lucide-react';
import { useCart, addOrder } from '@/store/useCart';
import { openWhatsAppOrder } from '@/lib/orderMessage';

type CartDrawerProps = {
  open: boolean;
  onClose: () => void;
  mode: 'whatsapp' | 'reception';
  tableId?: string;
  onSubmitted: () => void;
};

export function CartBar({ count, total, onClick }: { count: number; total: number; onClick: () => void }) {
  return (
    <motion.button
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      onClick={onClick}
      className="fixed bottom-6 left-4 right-4 max-w-xl mx-auto bg-gold text-obsidian py-4 flex items-center justify-between px-6 font-sans uppercase tracking-[0.2em] text-sm z-30 shadow-lg"
    >
      <span>{count} item{count > 1 ? 's' : ''}</span>
      <span>{total.toLocaleString()} XOF</span>
    </motion.button>
  );
}

export function CartDrawer({ open, onClose, mode, tableId, onSubmitted }: CartDrawerProps) {
  const cart = useCart();
  const [name, setName] = useState('');

  function submit() {
    if (!name.trim() || cart.items.length === 0) return;

    if (mode === 'reception' && tableId) {
      addOrder({
        id: crypto.randomUUID(),
        tableId: tableId.toUpperCase(),
        guestName: name.trim(),
        items: cart.items,
        total: cart.total(),
        status: 'pending',
        timestamp: new Date().toISOString(),
      });
    } else {
      openWhatsAppOrder(name.trim(), cart.items, cart.total());
    }

    cart.clear();
    setName('');
    onClose();
    onSubmitted();
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed inset-x-0 bottom-0 bg-glass border-t border-gold/30 z-40 max-h-[90vh] overflow-y-auto"
        >
          <div className="max-w-xl mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif italic text-2xl text-gold">Your Order</h3>
              <button onClick={onClose} className="text-marble" aria-label="Close">
                <X size={22} />
              </button>
            </div>

            <div className="space-y-3 mb-6">
              {cart.items.map((i) => (
                <div key={i.id} className="flex justify-between items-center border-b border-slate/40 pb-3">
                  <div>
                    <div className="text-marble font-sans">{i.name}</div>
                    <div className="text-xs text-marble/60">
                      {i.qty} × {i.price.toLocaleString()} XOF
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => cart.dec(i.id)}
                      className="w-7 h-7 border border-slate text-marble"
                      aria-label="Decrease"
                    >
                      <Minus size={12} className="mx-auto" />
                    </button>
                    <span className="w-6 text-center">{i.qty}</span>
                    <button
                      onClick={() => cart.add({ id: i.id, name: i.name, price: i.price })}
                      className="w-7 h-7 border border-slate text-marble"
                      aria-label="Increase"
                    >
                      <Plus size={12} className="mx-auto" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between font-serif text-xl text-marble border-t border-gold/40 pt-4">
              <span>Total</span>
              <span className="text-gold">{cart.total().toLocaleString()} XOF</span>
            </div>

            <label className="block mt-6">
              <span className="label-eyebrow">Guest Name</span>
              <input
                className="field mt-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Required"
              />
            </label>

            <button onClick={submit} className="btn-gold w-full mt-6 flex items-center justify-center gap-2" disabled={!name.trim()}>
              {mode === 'reception' ? (
                'Send to Reception'
              ) : (
                <>
                  Order via WhatsApp <ArrowRight size={14} />
                </>
              )}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
