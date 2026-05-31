import { Link } from '@tanstack/react-router';
import { Instagram, Facebook, MapPin, Clock, MessageCircle } from 'lucide-react';
import { SITE } from '@/data/penthouse';

export function Footer() {
  return (
    <footer className="bg-obsidian border-t border-gold/30 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20 grid md:grid-cols-3 gap-12">
        <div>
          <div className="font-serif text-gold text-2xl" style={{ letterSpacing: '0.3em' }}>THE PENTHOUSE</div>
          <p className="mt-6 font-serif italic text-marble/70 text-lg leading-relaxed">{SITE.tagline}</p>
        </div>

        <div className="md:px-6">
          <div className="label-eyebrow mb-6">Navigate</div>
          <ul className="space-y-3 font-sans text-sm text-marble/70">
            <li><Link to="/experience" className="hover:text-gold transition">The Experience</Link></li>
            <li><Link to="/menu" className="hover:text-gold transition">Menu</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition">Gallery</Link></li>
            <li><Link to="/reservations" className="hover:text-gold transition">Reservations</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="label-eyebrow mb-6">Find Us</div>
          <ul className="space-y-4 font-body text-sm text-marble/70">
            <li className="flex items-start gap-3"><MapPin size={16} className="text-gold mt-0.5" /> {SITE.address}</li>
            <li className="flex items-start gap-3"><MessageCircle size={16} className="text-gold mt-0.5" /> {SITE.whatsappDisplay}</li>
            <li className="flex items-start gap-3"><Clock size={16} className="text-gold mt-0.5" /> {SITE.hours}<br />Closed Monday</li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="#" className="text-marble/60 hover:text-gold transition" aria-label="Instagram"><Instagram size={18} /></a>
            <a href="#" className="text-marble/60 hover:text-gold transition" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs font-sans uppercase tracking-[0.15em] text-marble/40">
          <div>© {new Date().getFullYear()} The Penthouse — Lomé</div>
          <div className="italic font-serif tracking-normal text-marble/50">Crafted for the elevated few</div>
        </div>
      </div>
    </footer>
  );
}
