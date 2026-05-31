import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Maximize2, X, ChevronLeft, ChevronRight, Instagram } from 'lucide-react';
import { PageTransition, SectionEyebrow } from '@/components/penthouse/PageTransition';
import { GALLERY_IMAGES } from '@/data/penthouse';

export const Route = createFileRoute('/_public/gallery')({
  head: () => ({
    meta: [
      { title: 'Gallery — THE PENTHOUSE' },
      { name: 'description', content: 'The Penthouse through the lens. Interiors, cocktails, and the Lomé skyline.' },
    ],
    links: [{ rel: 'canonical', href: '/gallery' }],
  }),
  component: Gallery,
});

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const close = () => setOpen(null);
  const next = () => setOpen((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));
  const prev = () => setOpen((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));

  return (
    <PageTransition>
      <section className="pt-36 pb-12 px-6 lg:px-12 text-center">
        <SectionEyebrow>Gallery</SectionEyebrow>
        <h1 className="mt-6 font-serif italic text-5xl md:text-7xl text-marble">The Penthouse — <span className="text-gold">Through the Lens</span></h1>
      </section>

      <section className="px-6 lg:px-12 pb-32">
        <div className="mx-auto max-w-7xl columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {GALLERY_IMAGES.map((src, i) => (
            <div key={i} className="mb-4 break-inside-avoid relative group cursor-pointer" onClick={() => setOpen(i)}>
              <img src={src} alt={`Penthouse ${i + 1}`} className="w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/25 transition flex items-center justify-center">
                <Maximize2 size={24} className="text-marble opacity-0 group-hover:opacity-100 transition" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-gold/30 py-16 px-6 text-center">
        <Instagram size={28} className="text-gold mx-auto" />
        <h3 className="mt-6 font-serif italic text-3xl md:text-4xl text-marble">Follow the elevation</h3>
        <a href="#" className="mt-4 inline-block font-sans uppercase tracking-[0.3em] text-sm text-gold hover:underline">@thepenthouse.lome</a>
      </section>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-obsidian/98 flex items-center justify-center p-4"
            onClick={close}
          >
            <button className="absolute top-6 right-6 text-marble hover:text-gold p-2" onClick={close}><X size={28} /></button>
            <button className="absolute left-4 md:left-8 text-marble hover:text-gold p-2" onClick={(e) => { e.stopPropagation(); prev(); }}><ChevronLeft size={36} /></button>
            <button className="absolute right-4 md:right-8 text-marble hover:text-gold p-2" onClick={(e) => { e.stopPropagation(); next(); }}><ChevronRight size={36} /></button>
            <motion.img
              key={open}
              initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
              src={GALLERY_IMAGES[open]} alt="Expanded"
              className="max-h-[85vh] max-w-[90vw] object-contain border border-gold/20"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
