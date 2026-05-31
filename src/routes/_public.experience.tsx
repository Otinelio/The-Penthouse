import { createFileRoute } from '@tanstack/react-router';
import { motion } from 'motion/react';
import { Wine, Music, Leaf, Moon } from 'lucide-react';
import { PageTransition, SectionEyebrow } from '@/components/penthouse/PageTransition';

export const Route = createFileRoute('/_public/experience')({
  head: () => ({
    meta: [
      { title: 'The Experience — THE PENTHOUSE' },
      { name: 'description', content: 'A ritual above Lomé. Minimal luxury, Togolese soul, suspended above the city.' },
    ],
    links: [{ rel: 'canonical', href: '/experience' }],
  }),
  component: Experience,
});

const BENTO = [
  { label: 'View', img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80', span: 'md:col-span-2 md:row-span-2' },
  { label: 'Light', img: 'https://images.unsplash.com/photo-1519214605650-76a613ee3245?w=600&q=80', span: '' },
  { label: 'Material', img: 'https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=600&q=80', span: '' },
  { label: 'Sound', img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80', span: 'md:col-span-2' },
  { label: 'Presence', img: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80', span: '' },
];

function Experience() {
  return (
    <PageTransition>
      <section className="pt-36 pb-24 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionEyebrow>The Experience</SectionEyebrow>
            <h1 className="mt-6 font-serif italic text-5xl md:text-7xl text-marble leading-[1.05]">
              More Than a Venue — <span className="text-gold">A Ritual</span>
            </h1>
            <p className="mt-8 text-marble/70 font-body leading-relaxed text-lg max-w-md">
              The Penthouse is not designed to impress. It is designed to elevate. A minimal expression of luxury, woven with Togolese soul,
              suspended above the rhythm of Lomé. Every detail — the weight of the glass, the warmth of the copper, the calibration of the
              soundtrack — is composed for one purpose: the slow unwinding of an extraordinary evening.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="aspect-[4/5] overflow-hidden border border-gold/20"
          >
            <img src="https://images.unsplash.com/photo-1574096145257-fc4d44935f9c?w=900&q=80" alt="Interior" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <SectionEyebrow>The Space</SectionEyebrow>
            <h2 className="mt-4 font-serif italic text-5xl text-marble">An Architecture of Stillness</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3">
            {BENTO.map((b) => (
              <div key={b.label} className={`relative overflow-hidden group ${b.span}`}>
                <img src={b.img} alt={b.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-500 flex items-center justify-center">
                  <span className="font-sans uppercase tracking-[0.3em] text-xs text-marble opacity-0 group-hover:opacity-100 transition-opacity duration-500">{b.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12 border-y border-slate/30">
        <div className="mx-auto max-w-4xl text-center">
          <div className="font-serif text-gold text-7xl leading-none">“</div>
          <blockquote className="mt-4 font-serif italic text-3xl md:text-5xl text-marble leading-tight">
            We believe in elevation — not just in altitude, but in every sense encountered here.
          </blockquote>
          <div className="mt-8 font-sans text-xs uppercase tracking-[0.3em] text-gold">— The Penthouse, Lomé</div>
        </div>
      </section>

      <section className="py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <SectionEyebrow>The Details</SectionEyebrow>
            <h2 className="mt-4 font-serif italic text-5xl text-marble">Composed With Intent</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Wine, title: 'Handblown Glassware', body: 'Each glass crafted by a Togolese artisan.' },
              { icon: Music, title: 'Downtempo Soundtrack', body: 'Curated in-house, volume calibrated to mood.' },
              { icon: Leaf, title: 'Living Greenery', body: 'Monstera in polished concrete pots throughout.' },
              { icon: Moon, title: 'Golden Hour Service', body: 'Operations begin as the sun sets.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="glass border-l-2 border-copper p-8 hover:border-gold transition">
                <Icon size={24} className="text-gold" />
                <h3 className="mt-6 font-serif text-2xl text-marble">{title}</h3>
                <p className="mt-3 text-sm text-marble/60 font-body leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
