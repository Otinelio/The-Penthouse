import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { MapPin, MessageCircle, Clock, Mail, ArrowRight } from 'lucide-react';
import { PageTransition, SectionEyebrow } from '@/components/penthouse/PageTransition';
import { SITE } from '@/data/penthouse';

export const Route = createFileRoute('/_public/contact')({
  head: () => ({
    meta: [
      { title: 'Contact — THE PENTHOUSE' },
      { name: 'description', content: 'Reach The Penthouse for reservations, private events, press, and partnerships.' },
    ],
    links: [{ rel: 'canonical', href: '/contact' }],
  }),
  component: Contact,
});

const SUBJECTS = ['General Inquiry', 'Private Event', 'Press', 'Partnership', 'Other'];

function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', subject: 'General Inquiry', message: '' });
  function send() {
    if (!form.name || !form.message) return;
    const msg = `INQUIRY — THE PENTHOUSE
From: ${form.name}
Contact: ${form.contact}
Subject: ${form.subject}
Message: ${form.message}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  }
  return (
    <PageTransition>
      <section className="pt-36 pb-12 px-6 lg:px-12 text-center">
        <SectionEyebrow>Reach Us</SectionEyebrow>
        <h1 className="mt-6 font-serif italic text-5xl md:text-7xl text-marble">Get in <span className="text-gold">Touch</span></h1>
      </section>

      <section className="px-6 lg:px-12 pb-32">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <SectionEyebrow>Contact</SectionEyebrow>
            <Info icon={MapPin} title="Address" text={SITE.address} />
            <Info icon={MessageCircle} title="WhatsApp" text={SITE.whatsappDisplay} />
            <Info icon={Clock} title="Hours" text={`${SITE.hours} — Closed Monday`} />
            <Info icon={Mail} title="Email" text={SITE.email} />

            <div className="border border-gold/20 mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7!2d1.2228!3d6.1725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1"
                width="100%" height="280" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                loading="lazy" title="Map"
              />
            </div>
          </div>

          <div className="glass border border-gold/20 p-8 md:p-12 space-y-8">
            <SectionEyebrow>Send a Message</SectionEyebrow>
            <label className="block">
              <span className="label-eyebrow">Name</span>
              <input className="field mt-1" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </label>
            <label className="block">
              <span className="label-eyebrow">Email or Phone</span>
              <input className="field mt-1" value={form.contact} onChange={(e) => setForm({ ...form, contact: e.target.value })} />
            </label>
            <label className="block">
              <span className="label-eyebrow">Subject</span>
              <select className="field mt-1" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
                {SUBJECTS.map((s) => <option key={s} className="bg-glass">{s}</option>)}
              </select>
            </label>
            <label className="block">
              <span className="label-eyebrow">Message</span>
              <textarea rows={5} className="field mt-1 resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </label>
            <button onClick={send} className="btn-gold w-full">Send Inquiry <ArrowRight size={14} /></button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function Info({ icon: Icon, title, text }: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4 border-b border-slate/40 pb-6">
      <Icon size={20} className="text-gold mt-1" />
      <div>
        <div className="label-eyebrow">{title}</div>
        <div className="mt-2 font-serif text-2xl text-marble">{text}</div>
      </div>
    </div>
  );
}
