import { createFileRoute, Link } from '@tanstack/react-router';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { PageTransition, GoldDust, SectionEyebrow } from '@/components/penthouse/PageTransition';
import { TESTIMONIALS, SITE } from '@/data/penthouse';

export const Route = createFileRoute('/_public/')({
  head: () => ({
    meta: [
      { title: 'THE PENTHOUSE — Rooftop Lounge in Lomé, Togo' },
      { name: 'description', content: 'A sanctuary above Lomé. Signature cocktails, refined tapas, and the city as your canvas.' },
      { property: 'og:title', content: 'THE PENTHOUSE — Above the city. Beyond the ordinary.' },
      { property: 'og:description', content: 'Exclusive rooftop lounge & cocktail bar in Lomé, Togo.' },
    ],
    links: [{ rel: 'canonical', href: '/' }],
  }),
  component: Home,
});

const HERO_IMG = 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1920&q=80';

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.3]);

  return (
    <PageTransition>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <img src={HERO_IMG} alt="Rooftop lounge over Lomé at night" className="w-full h-[120%] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/60 to-obsidian" />
        </motion.div>
        <GoldDust count={10} />

        <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="label-eyebrow mb-8"
          >
            Lomé — Togo
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2 }}
            className="font-serif italic font-bold text-gold leading-none text-[clamp(3.5rem,10vw,8rem)]"
            style={{ letterSpacing: '0.02em' }}
          >
            THE PENTHOUSE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 font-sans text-marble/80 uppercase text-xs md:text-sm"
            style={{ letterSpacing: '0.4em' }}
          >
            A Sanctuary Above Lomé
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Link to="/reservations" className="btn-gold">Reserve a Table <ArrowRight size={14} /></Link>
            <Link to="/experience" className="btn-ghost-gold">Discover the Experience</Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold scroll-dot" />
        </div>
      </section>

      {/* AMBIANCE STRIP */}
      <section className="border-y border-gold/15 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-y-8 divide-y md:divide-y-0 md:divide-x divide-gold/20">
          {['HANDBLOWN GLASS COCKTAILS', 'SCULPTURAL LOW FURNITURE', 'LOMÉ FROM 30 FLOORS UP'].map((t) => (
            <div key={t} className="text-center px-6 py-4 md:py-2 font-sans text-xs uppercase text-marble/80" style={{ letterSpacing: '0.3em' }}>{t}</div>
          ))}
        </div>
      </section>

      {/* SIGNATURE EXPERIENCE */}
      <section className="py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <SectionEyebrow>Three Pillars</SectionEyebrow>
            <h2 className="mt-4 font-serif italic text-5xl md:text-6xl text-marble">The Signature Experience</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'The View', body: 'Floor-to-ceiling windows. The city as canvas.', img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80' },
              { title: 'The Cocktails', body: 'House creations in hand-blown glasses, curated by our mixologist.', img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80' },
              { title: 'The Service', body: 'Invisible yet present. Refined service, no interruption.', img: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80' },
            ].map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="glass border-t-2 border-copper hover:border-gold transition-all duration-500 group"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-8">
                  <h3 className="font-serif italic text-3xl text-gold">{c.title}</h3>
                  <p className="mt-4 text-marble/70 font-body leading-relaxed">{c.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOURS & ACCESS */}
      <section className="py-32 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80)', backgroundSize: 'cover' }} />
        <div className="relative mx-auto max-w-5xl grid md:grid-cols-2 gap-16">
          <div>
            <SectionEyebrow>Hours</SectionEyebrow>
            <h3 className="mt-4 font-serif italic text-4xl text-marble">When We Open</h3>
            <div className="mt-8 h-px w-16 bg-gold" />
            <div className="mt-8 space-y-3 font-body text-marble/80">
              <div className="flex justify-between border-b border-slate/40 pb-3"><span>Tuesday — Sunday</span><span className="text-gold">18:00 — 02:00</span></div>
              <div className="flex justify-between border-b border-slate/40 pb-3"><span>Monday</span><span className="text-marble/40">Closed</span></div>
            </div>
          </div>
          <div>
            <SectionEyebrow>Booking</SectionEyebrow>
            <h3 className="mt-4 font-serif italic text-4xl text-marble">Reserve Your Evening</h3>
            <div className="mt-8 h-px w-16 bg-gold" />
            <p className="mt-8 text-marble/70 leading-relaxed">Tables are limited by design. To guarantee the experience above Lomé, we recommend reserving in advance.</p>
            <Link to="/reservations" className="btn-gold mt-8">Reserve Now <ArrowRight size={14} /></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialCarousel />

      {/* MAP TEASER */}
      <section className="py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-5xl text-center">
          <SectionEyebrow>Location</SectionEyebrow>
          <h2 className="mt-4 font-serif italic text-5xl text-marble">Find Us Above the City</h2>
          <div className="mt-12 border border-gold/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7!2d1.2228!3d6.1725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnMjEuMCJOIDHCsDEzJzIyLjEiRQ!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              loading="lazy"
              title="Lomé Map"
            />
          </div>
          <div className="mt-6 flex items-center justify-center gap-3 font-sans text-sm text-marble/70">
            <MapPin size={16} className="text-gold" /> {SITE.address}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

function TestimonialCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="py-32 px-6 lg:px-12 border-y border-slate/30">
      <div className="mx-auto max-w-3xl text-center min-h-[280px] flex flex-col items-center justify-center relative">
        <div className="font-serif text-gold text-8xl leading-none">“</div>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="font-serif italic text-2xl md:text-3xl text-marble leading-relaxed"
          >
            {TESTIMONIALS[i].quote}
            <footer className="mt-8 font-sans text-xs uppercase tracking-[0.3em] text-gold not-italic">— {TESTIMONIALS[i].author}</footer>
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-12 flex gap-2">
          {TESTIMONIALS.map((_, k) => (
            <button key={k} onClick={() => setI(k)} className={`h-px w-8 transition-all ${k === i ? 'bg-gold' : 'bg-slate'}`} aria-label={`Quote ${k + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
