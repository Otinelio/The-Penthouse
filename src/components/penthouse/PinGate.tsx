import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';

export function PinGate({ pin, title, children }: { pin: string; title: string; children: ReactNode }) {
  const [entered, setEntered] = useState('');
  const [ok, setOk] = useState(false);
  const [shake, setShake] = useState(false);

  if (ok) return <>{children}</>;

  function press(d: string) {
    if (entered.length >= 4) return;
    const next = entered + d;
    setEntered(next);
    if (next.length === 4) {
      setTimeout(() => {
        if (next === pin) setOk(true);
        else { setShake(true); setTimeout(() => { setEntered(''); setShake(false); }, 500); }
      }, 150);
    }
  }
  function back() { setEntered((e) => e.slice(0, -1)); }

  return (
    <div className="min-h-screen bg-obsidian flex flex-col items-center justify-center px-6">
      <div className="font-serif text-gold text-2xl tracking-[0.3em] mb-2">THE PENTHOUSE</div>
      <div className="label-eyebrow mb-12">{title}</div>

      <motion.div animate={shake ? { x: [-8, 8, -8, 8, 0] } : {}} transition={{ duration: 0.4 }} className="flex gap-3 mb-12">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className={`w-4 h-4 rounded-full border ${entered.length > i ? 'bg-gold border-gold' : 'border-slate'}`} />
        ))}
      </motion.div>

      <div className="grid grid-cols-3 gap-3 w-72">
        {['1','2','3','4','5','6','7','8','9'].map((d) => (
          <button key={d} onClick={() => press(d)}
            className="aspect-square text-2xl font-serif text-marble border border-slate hover:border-gold hover:text-gold transition">
            {d}
          </button>
        ))}
        <button onClick={back} className="aspect-square font-sans text-xs uppercase tracking-widest text-marble/60 hover:text-gold transition">Del</button>
        <button onClick={() => press('0')} className="aspect-square text-2xl font-serif text-marble border border-slate hover:border-gold hover:text-gold transition">0</button>
        <div />
      </div>
    </div>
  );
}
