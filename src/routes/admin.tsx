import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Trash2, Plus, Save } from 'lucide-react';
import { PinGate } from '@/components/penthouse/PinGate';
import { MENU_ITEMS, CATEGORIES, TESTIMONIALS, GALLERY_IMAGES, SITE, type MenuItem } from '@/data/penthouse';

export const Route = createFileRoute('/admin')({
  component: () => (
    <PinGate pin="9999" title="Admin Access">
      <AdminDashboard />
    </PinGate>
  ),
});

type Section = 'menu' | 'reservations' | 'gallery' | 'testimonials' | 'settings';

const SECTIONS: { id: Section; label: string }[] = [
  { id: 'menu', label: 'Menu' },
  { id: 'reservations', label: 'Reservations' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'settings', label: 'Settings' },
];

function useLocal<T>(key: string, initial: T) {
  const [v, setV] = useState<T>(() => {
    if (typeof window === 'undefined') return initial;
    try { const s = localStorage.getItem(key); return s ? JSON.parse(s) : initial; } catch { return initial; }
  });
  useEffect(() => { localStorage.setItem(key, JSON.stringify(v)); }, [key, v]);
  return [v, setV] as const;
}

function AdminDashboard() {
  const [section, setSection] = useState<Section>('menu');

  return (
    <div className="min-h-screen bg-obsidian text-marble flex flex-col md:flex-row">
      <aside className="md:w-64 md:min-h-screen border-r border-slate/40 p-6">
        <div className="font-serif text-gold text-xl tracking-[0.3em]">THE PENTHOUSE</div>
        <div className="label-eyebrow mt-1">Admin</div>
        <nav className="mt-10 flex md:flex-col gap-2 overflow-x-auto">
          {SECTIONS.map((s) => (
            <button key={s.id} onClick={() => setSection(s.id)}
              className={`text-left px-4 py-3 font-sans uppercase text-[11px] tracking-[0.2em] transition whitespace-nowrap ${section === s.id ? 'bg-gold text-obsidian' : 'text-marble/70 hover:text-gold'}`}>
              {s.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-12">
        {section === 'menu' && <MenuMgmt />}
        {section === 'reservations' && <ReservationsLog />}
        {section === 'gallery' && <GalleryMgmt />}
        {section === 'testimonials' && <TestimonialsMgmt />}
        {section === 'settings' && <SettingsMgmt />}
      </main>
    </div>
  );
}

function H({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif italic text-4xl text-marble mb-8">{children}</h2>;
}

function MenuMgmt() {
  const [items, setItems] = useLocal<MenuItem[]>('penthouse-menu', MENU_ITEMS);
  const [draft, setDraft] = useState<Partial<MenuItem>>({ category: 'signature', price: 0 });

  function add() {
    if (!draft.name || !draft.price) return;
    setItems([...items, { id: crypto.randomUUID(), name: draft.name, description: draft.description || '', category: draft.category as MenuItem['category'], price: Number(draft.price) }]);
    setDraft({ category: 'signature', price: 0 });
  }
  return (
    <div>
      <H>Menu Management</H>
      <div className="glass border border-gold/20 p-6 mb-8 grid md:grid-cols-5 gap-3">
        <input placeholder="Name" className="field" value={draft.name || ''} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
        <input placeholder="Description" className="field md:col-span-2" value={draft.description || ''} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
        <select className="field" value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value as MenuItem['category'] })}>
          {CATEGORIES.map((c) => <option key={c.id} value={c.id} className="bg-glass">{c.label}</option>)}
        </select>
        <div className="flex gap-2">
          <input type="number" placeholder="Price" className="field" value={draft.price || ''} onChange={(e) => setDraft({ ...draft, price: Number(e.target.value) })} />
          <button onClick={add} className="px-4 border border-gold text-gold hover:bg-gold hover:text-obsidian"><Plus size={16} /></button>
        </div>
      </div>

      <div className="space-y-2">
        {items.map((it, idx) => (
          <div key={it.id} className="glass border-l-2 border-copper p-4 grid md:grid-cols-12 gap-3 items-center">
            <input className="field md:col-span-3" value={it.name} onChange={(e) => { const c = [...items]; c[idx] = { ...it, name: e.target.value }; setItems(c); }} />
            <input className="field md:col-span-4" value={it.description} onChange={(e) => { const c = [...items]; c[idx] = { ...it, description: e.target.value }; setItems(c); }} />
            <select className="field md:col-span-2" value={it.category} onChange={(e) => { const c = [...items]; c[idx] = { ...it, category: e.target.value as MenuItem['category'] }; setItems(c); }}>
              {CATEGORIES.map((c) => <option key={c.id} value={c.id} className="bg-glass">{c.label}</option>)}
            </select>
            <input type="number" className="field md:col-span-2" value={it.price} onChange={(e) => { const c = [...items]; c[idx] = { ...it, price: Number(e.target.value) }; setItems(c); }} />
            <button onClick={() => { if (confirm('Delete this item?')) setItems(items.filter((_, i) => i !== idx)); }} className="md:col-span-1 text-marble/50 hover:text-red-500 transition justify-self-end"><Trash2 size={16} /></button>
          </div>
        ))}
      </div>
    </div>
  );
}

type Reservation = { id: string; name: string; phone: string; date: string; time: string; guests: string; occasion: string; requests: string; status: string; timestamp: string };

function ReservationsLog() {
  const [res, setRes] = useLocal<Reservation[]>('penthouse-reservations', []);
  function setStatus(id: string, status: string) { setRes(res.map((r) => r.id === id ? { ...r, status } : r)); }
  return (
    <div>
      <H>Reservations</H>
      {res.length === 0 && <div className="text-marble/50 font-serif italic text-xl">No reservations yet.</div>}
      <div className="space-y-3">
        {res.map((r) => (
          <div key={r.id} className="glass border-l-2 border-gold p-6 grid md:grid-cols-6 gap-4 items-center">
            <div className="font-serif text-gold text-xl">{r.name}</div>
            <div className="text-sm">{r.date} <span className="text-gold">{r.time}</span></div>
            <div className="text-sm">{r.guests} guests</div>
            <div className="text-sm text-marble/60">{r.occasion}</div>
            <div className="text-xs uppercase tracking-widest text-marble/60">{r.status}</div>
            <div className="flex gap-2">
              <button onClick={() => setStatus(r.id, 'confirmed')} className="px-3 py-1 text-[10px] border border-gold text-gold uppercase tracking-widest hover:bg-gold hover:text-obsidian">Confirm</button>
              <button onClick={() => setStatus(r.id, 'completed')} className="px-3 py-1 text-[10px] border border-slate text-marble uppercase tracking-widest hover:border-gold">Done</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GalleryMgmt() {
  const [imgs, setImgs] = useLocal<string[]>('penthouse-gallery', GALLERY_IMAGES);
  const [draft, setDraft] = useState('');
  function move(i: number, dir: -1 | 1) {
    const c = [...imgs]; const t = c[i + dir]; if (!t) return;
    c[i + dir] = c[i]; c[i] = t; setImgs(c);
  }
  return (
    <div>
      <H>Gallery</H>
      <div className="glass border border-gold/20 p-4 flex gap-3 mb-8">
        <input className="field" placeholder="Image URL" value={draft} onChange={(e) => setDraft(e.target.value)} />
        <button onClick={() => { if (draft) { setImgs([...imgs, draft]); setDraft(''); } }} className="px-4 border border-gold text-gold hover:bg-gold hover:text-obsidian"><Plus size={16} /></button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {imgs.map((src, i) => (
          <div key={i} className="relative border border-slate group">
            <img src={src} alt="" className="w-full aspect-square object-cover" />
            <div className="absolute inset-0 bg-obsidian/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-2">
              <div className="flex gap-2">
                <button onClick={() => move(i, -1)} className="px-2 py-1 border border-gold text-gold text-xs">↑</button>
                <button onClick={() => move(i, 1)} className="px-2 py-1 border border-gold text-gold text-xs">↓</button>
              </div>
              <button onClick={() => setImgs(imgs.filter((_, k) => k !== i))} className="text-red-400"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TestimonialsMgmt() {
  const [list, setList] = useLocal('penthouse-testimonials', TESTIMONIALS);
  return (
    <div>
      <H>Testimonials</H>
      <div className="space-y-4">
        {list.map((t, i) => (
          <div key={i} className="glass border-l-2 border-copper p-6 space-y-3">
            <textarea className="field resize-none" rows={2} value={t.quote} onChange={(e) => { const c = [...list]; c[i] = { ...t, quote: e.target.value }; setList(c); }} />
            <div className="flex gap-3">
              <input className="field flex-1" value={t.author} onChange={(e) => { const c = [...list]; c[i] = { ...t, author: e.target.value }; setList(c); }} />
              <button onClick={() => setList(list.filter((_, k) => k !== i))} className="px-3 text-marble/50 hover:text-red-500"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
        <button onClick={() => setList([...list, { quote: 'New testimonial...', author: 'Author' }])} className="btn-ghost-gold"><Plus size={14} /> Add Testimonial</button>
      </div>
    </div>
  );
}

function SettingsMgmt() {
  const [s, setS] = useLocal('penthouse-settings', { whatsapp: SITE.whatsapp, hours: SITE.hours, tagline: SITE.tagline, fullyBooked: false });
  const [saved, setSaved] = useState(false);
  function save() { setSaved(true); setTimeout(() => setSaved(false), 2000); }
  return (
    <div>
      <H>Settings</H>
      <div className="glass border border-gold/20 p-8 space-y-6 max-w-xl">
        <label className="block"><span className="label-eyebrow">WhatsApp Number</span><input className="field mt-1" value={s.whatsapp} onChange={(e) => setS({ ...s, whatsapp: e.target.value })} /></label>
        <label className="block"><span className="label-eyebrow">Opening Hours</span><input className="field mt-1" value={s.hours} onChange={(e) => setS({ ...s, hours: e.target.value })} /></label>
        <label className="block"><span className="label-eyebrow">Tagline</span><input className="field mt-1" value={s.tagline} onChange={(e) => setS({ ...s, tagline: e.target.value })} /></label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" checked={s.fullyBooked} onChange={(e) => setS({ ...s, fullyBooked: e.target.checked })} className="accent-[var(--color-gold)] w-4 h-4" />
          <span className="font-sans text-sm uppercase tracking-[0.2em] text-marble/80">Fully Booked Tonight</span>
        </label>
        <button onClick={save} className="btn-gold"><Save size={14} /> {saved ? 'Saved' : 'Save Settings'}</button>
      </div>
    </div>
  );
}
