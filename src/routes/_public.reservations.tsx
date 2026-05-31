import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PageTransition, SectionEyebrow } from '@/components/penthouse/PageTransition';
import { SITE } from '@/data/penthouse';

export const Route = createFileRoute('/_public/reservations')({
  head: () => ({
    meta: [
      { title: 'Reservations — THE PENTHOUSE' },
      { name: 'description', content: 'Reserve your evening above Lomé. Tables limited by design.' },
    ],
    links: [{ rel: 'canonical', href: '/reservations' }],
  }),
  component: Reservations,
});

const TIMES = ['18:00', '19:00', '20:00', '21:00', '22:00'];
const OCCASIONS = ['None', 'Birthday', 'Anniversary', 'Business', 'Other'];

function Reservations() {
  const [form, setForm] = useState({
    name: '', phone: '+228 ', date: '', time: '20:00', guests: '2', occasion: 'None', requests: '',
  });
  const [sent, setSent] = useState(false);
  const today = new Date().toISOString().split('T')[0];

  function send() {
    if (!form.name || !form.date) return;
    const msg = `RESERVATION REQUEST — THE PENTHOUSE

Name: ${form.name}
Date: ${form.date}
Time: ${form.time}
Guests: ${form.guests}
Occasion: ${form.occasion}
Requests: ${form.requests || 'None'}
Phone: ${form.phone}`;
    // Save to localStorage
    try {
      const arr = JSON.parse(localStorage.getItem('penthouse-reservations') || '[]');
      arr.unshift({ ...form, id: crypto.randomUUID(), status: 'pending', timestamp: new Date().toISOString() });
      localStorage.setItem('penthouse-reservations', JSON.stringify(arr));
    } catch {}
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  }

  return (
    <PageTransition>
      <section className="pt-36 pb-12 px-6 lg:px-12 text-center">
        <SectionEyebrow>Booking</SectionEyebrow>
        <h1 className="mt-6 font-serif italic text-5xl md:text-7xl text-marble">Reserve Your <span className="text-gold">Evening</span></h1>
        <p className="mt-6 max-w-xl mx-auto text-marble/70 font-body">Tables are limited by design. Book ahead to secure your seat above Lomé.</p>
      </section>

      <section className="px-6 lg:px-12 pb-32">
        <div className="mx-auto max-w-2xl glass border border-gold/20 p-8 md:p-12">
          {sent ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring' }}>
                <CheckCircle size={64} className="text-gold mx-auto" />
              </motion.div>
              <h3 className="mt-6 font-serif italic text-3xl text-marble">Your request has been sent.</h3>
              <p className="mt-4 text-marble/70 font-body">We'll confirm within 2 hours.</p>
              <button className="btn-ghost-gold mt-8" onClick={() => setSent(false)}>New Reservation</button>
            </motion.div>
          ) : (
            <div className="space-y-8">
              <Field label="Full Name">
                <input className="field" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </Field>
              <Field label="Phone Number">
                <input className="field" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </Field>
              <div className="grid grid-cols-2 gap-6">
                <Field label="Date">
                  <input type="date" min={today} className="field" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
                </Field>
                <Field label="Time">
                  <select className="field" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}>
                    {TIMES.map((t) => <option key={t} value={t} className="bg-glass">{t}</option>)}
                  </select>
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Field label="Guests">
                  <select className="field" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })}>
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => <option key={n} value={String(n)} className="bg-glass">{n}</option>)}
                    <option value="10+" className="bg-glass">10+</option>
                  </select>
                </Field>
                <Field label="Occasion">
                  <select className="field" value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })}>
                    {OCCASIONS.map((o) => <option key={o} value={o} className="bg-glass">{o}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="Special Requests">
                <textarea rows={3} className="field resize-none" value={form.requests} onChange={(e) => setForm({ ...form, requests: e.target.value })} />
              </Field>
              <button onClick={send} className="btn-gold w-full">Send via WhatsApp <ArrowRight size={14} /></button>
              <p className="text-xs font-sans text-marble/50 leading-relaxed">
                Reservations are held for 15 minutes. Dress code: smart casual or above. No walk-ins guaranteed after 21:00.
              </p>
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="label-eyebrow">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
