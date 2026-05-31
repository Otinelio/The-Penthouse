import { Link, useRouterState } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV = [
  { to: '/experience', label: 'Experience' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reservations', label: 'Reservations' },
  { to: '/contact', label: 'Contact' },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : '1px solid transparent',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="font-serif text-gold text-xl md:text-2xl" style={{ letterSpacing: '0.3em' }}>
            THE PENTHOUSE
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className="relative font-sans text-[11px] uppercase tracking-[0.2em] text-marble/80 hover:text-gold transition-colors"
                >
                  {n.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gold"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link to="/reservations" className="btn-ghost-gold">Reserve Tonight</Link>
          </div>

          <button
            className="lg:hidden text-gold p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-obsidian/98 lg:hidden flex items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <Link to={n.to} className="font-serif text-3xl text-marble hover:text-gold transition">
                    {n.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link to="/reservations" className="btn-gold mt-6">Reserve Tonight</Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
