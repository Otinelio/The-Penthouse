import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX, Download } from 'lucide-react';
import { PinGate } from '@/components/penthouse/PinGate';
import { loadOrders, saveOrders, type Order } from '@/store/useCart';

export const Route = createFileRoute('/reception')({
  component: () => (
    <PinGate pin="9999" title="Reception Access">
      <ReceptionDashboard />
    </PinGate>
  ),
});

type Filter = 'all' | 'pending' | 'confirmed' | 'delivered';

function ReceptionDashboard() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState<Filter>('all');
  const [now, setNow] = useState(Date.now());
  const [sound, setSound] = useState(true);
  const prevIdsRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const refresh = () => {
      const o = loadOrders();
      const ids = new Set(o.map((x) => x.id));
      const isNew = o.some((x) => !prevIdsRef.current.has(x.id) && x.status === 'pending');
      if (isNew && prevIdsRef.current.size > 0 && sound) chime();
      prevIdsRef.current = ids;
      setOrders(o);
    };
    refresh();
    const t = setInterval(refresh, 5000);
    const tick = setInterval(() => setNow(Date.now()), 30000);
    window.addEventListener('orders-updated', refresh);
    window.addEventListener('storage', refresh);
    return () => { clearInterval(t); clearInterval(tick); window.removeEventListener('orders-updated', refresh); window.removeEventListener('storage', refresh); };
  }, [sound]);

  function updateStatus(id: string, status: Order['status']) {
    const next = loadOrders().map((o) => o.id === id ? { ...o, status } : o);
    saveOrders(next);
    setOrders(next);
  }

  const filtered = filter === 'all' ? orders : orders.filter((o) => o.status === filter);
  const today = new Date().toDateString();
  const todays = orders.filter((o) => new Date(o.timestamp).toDateString() === today);
  const revenue = todays.filter((o) => o.status !== 'cancelled').reduce((s, o) => s + o.total, 0);
  const pendingCount = orders.filter((o) => o.status === 'pending').length;

  function exportSummary() {
    const text = todays.map((o) => {
      const items = o.items.map((i) => `  ${i.qty}× ${i.name} — ${(i.qty * i.price).toLocaleString()} XOF`).join('\n');
      return `[${o.tableId}] ${o.guestName} — ${o.status}\n${items}\n  Total: ${o.total.toLocaleString()} XOF\n`;
    }).join('\n');
    const blob = new Blob([`THE PENTHOUSE — Shift Summary ${today}\n\n${text}\n\nTOTAL REVENUE: ${revenue.toLocaleString()} XOF`], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `penthouse-shift-${today}.txt`;
    a.click();
  }

  return (
    <div className="min-h-screen bg-obsidian text-marble">
      <header className="border-b border-slate/40 px-6 py-5 flex items-center justify-between">
        <div>
          <div className="font-serif text-gold text-xl tracking-[0.3em]">THE PENTHOUSE</div>
          <div className="label-eyebrow mt-1">Reception — Live Orders</div>
        </div>
        <div className="flex items-center gap-6">
          <LiveClock />
          <button onClick={() => setSound((s) => !s)} className="text-gold p-2 border border-slate hover:border-gold transition" title="Toggle chime">
            {sound ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        </div>
      </header>

      <div className="px-6 py-6 grid md:grid-cols-3 gap-4 border-b border-slate/40">
        <Stat label="Orders Today" value={String(todays.length)} />
        <Stat label="Revenue Today" value={`${revenue.toLocaleString()} XOF`} />
        <Stat label="Pending" value={String(pendingCount)} />
      </div>

      <div className="px-6 py-4 flex items-center justify-between border-b border-slate/40 flex-wrap gap-3">
        <div className="flex gap-2">
          {(['all', 'pending', 'confirmed', 'delivered'] as Filter[]).map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] transition ${filter === f ? 'bg-gold text-obsidian' : 'border border-slate text-marble/70 hover:border-gold'}`}>
              {f}
            </button>
          ))}
        </div>
        <button onClick={exportSummary} className="btn-ghost-gold !py-2 !px-4 !text-[10px]"><Download size={14} /> Export Summary</button>
      </div>

      <div className="px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-24 text-marble/40 font-serif italic text-xl">No orders to display.</div>
          )}
          {filtered.map((o) => (
            <motion.div key={o.id} layout
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              className="glass border-l-2 border-gold p-6">
              <div className="flex items-center justify-between">
                <div className="font-serif text-gold text-2xl">{o.tableId}</div>
                <StatusPill status={o.status} />
              </div>
              <div className="mt-2 font-sans text-marble">{o.guestName}</div>
              <div className="text-xs text-marble/50 mt-1">{elapsed(o.timestamp, now)}</div>
              <ul className="mt-4 space-y-1 text-sm border-t border-slate/40 pt-3">
                {o.items.map((i) => (
                  <li key={i.id} className="flex justify-between text-marble/80">
                    <span>{i.qty}× {i.name}</span>
                    <span>{(i.qty * i.price).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between font-serif text-lg text-gold border-t border-slate/40 pt-3 mt-3">
                <span>Total</span><span>{o.total.toLocaleString()} XOF</span>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                {o.status === 'pending' && <button onClick={() => updateStatus(o.id, 'confirmed')} className="flex-1 px-3 py-2 border border-gold text-gold text-[10px] uppercase tracking-widest hover:bg-gold hover:text-obsidian transition">Confirm</button>}
                {o.status !== 'delivered' && o.status !== 'cancelled' && <button onClick={() => updateStatus(o.id, 'delivered')} className="flex-1 px-3 py-2 border border-slate text-marble text-[10px] uppercase tracking-widest hover:border-gold transition">Delivered</button>}
                {o.status !== 'cancelled' && o.status !== 'delivered' && <button onClick={() => updateStatus(o.id, 'cancelled')} className="px-3 py-2 border border-slate text-marble/50 text-[10px] uppercase tracking-widest hover:border-red-500 hover:text-red-500 transition">Cancel</button>}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-slate/40 p-5">
      <div className="label-eyebrow">{label}</div>
      <div className="mt-3 font-serif text-3xl text-marble">{value}</div>
    </div>
  );
}

function StatusPill({ status }: { status: Order['status'] }) {
  const map = { pending: ['#f59e0b', 'Pending'], confirmed: ['#3b82f6', 'Confirmed'], delivered: ['#10b981', 'Delivered'], cancelled: ['#6b7280', 'Cancelled'] } as const;
  const [color, label] = map[status];
  return (
    <span className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-marble/80">
      <span className="w-2 h-2 rounded-full" style={{ background: color }} />
      {label}
    </span>
  );
}

function LiveClock() {
  const [t, setT] = useState(new Date());
  useEffect(() => { const i = setInterval(() => setT(new Date()), 1000); return () => clearInterval(i); }, []);
  return <div className="font-serif text-2xl text-gold tabular-nums">{t.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</div>;
}

function elapsed(iso: string, now: number) {
  const diff = Math.max(0, Math.floor((now - new Date(iso).getTime()) / 60000));
  if (diff < 1) return 'just now';
  if (diff < 60) return `${diff} min ago`;
  const h = Math.floor(diff / 60);
  return `${h}h ${diff % 60}m ago`;
}

function chime() {
  try {
    const AC = (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext);
    const ctx = new AC();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = 880; o.type = 'sine';
    g.gain.setValueAtTime(0.0001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.05);
    g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.6);
    o.start(); o.stop(ctx.currentTime + 0.7);
  } catch { }
}
