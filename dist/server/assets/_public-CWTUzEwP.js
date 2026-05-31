import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRouterState, Link, Outlet } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { X, Menu, MapPin, MessageCircle, Clock, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { S as SITE } from "./penthouse-C0IPQeh4.js";
const NAV = [
  { to: "/experience", label: "Experience" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [path]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "header",
      {
        className: "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        style: {
          background: scrolled ? "rgba(10,10,15,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "1px solid transparent"
        },
        children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-12 h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "font-serif text-gold text-xl md:text-2xl", style: { letterSpacing: "0.3em" }, children: "THE PENTHOUSE" }),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-10", children: NAV.map((n) => {
            const active = path === n.to;
            return /* @__PURE__ */ jsxs(
              Link,
              {
                to: n.to,
                className: "relative font-sans text-[11px] uppercase tracking-[0.2em] text-marble/80 hover:text-gold transition-colors",
                children: [
                  n.label,
                  active && /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      layoutId: "nav-underline",
                      className: "absolute -bottom-2 left-0 right-0 h-[2px] bg-gold"
                    }
                  )
                ]
              },
              n.to
            );
          }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsx(Link, { to: "/reservations", className: "btn-ghost-gold", children: "Reserve Tonight" }) }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "lg:hidden text-gold p-2",
              onClick: () => setOpen((v) => !v),
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-40 bg-obsidian/98 lg:hidden flex items-center justify-center",
        children: /* @__PURE__ */ jsxs("nav", { className: "flex flex-col items-center gap-8", children: [
          NAV.map((n, i) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.1 + i * 0.07 },
              children: /* @__PURE__ */ jsx(Link, { to: n.to, className: "font-serif text-3xl text-marble hover:text-gold transition", children: n.label })
            },
            n.to
          )),
          /* @__PURE__ */ jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.5 }, children: /* @__PURE__ */ jsx(Link, { to: "/reservations", className: "btn-gold mt-6", children: "Reserve Tonight" }) })
        ] })
      }
    ) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-obsidian border-t border-gold/30 mt-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-12 py-20 grid md:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-serif text-gold text-2xl", style: { letterSpacing: "0.3em" }, children: "THE PENTHOUSE" }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 font-serif italic text-marble/70 text-lg leading-relaxed", children: SITE.tagline })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:px-6", children: [
        /* @__PURE__ */ jsx("div", { className: "label-eyebrow mb-6", children: "Navigate" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3 font-sans text-sm text-marble/70", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/experience", className: "hover:text-gold transition", children: "The Experience" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/menu", className: "hover:text-gold transition", children: "Menu" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/gallery", className: "hover:text-gold transition", children: "Gallery" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/reservations", className: "hover:text-gold transition", children: "Reservations" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-gold transition", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "label-eyebrow mb-6", children: "Find Us" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4 font-body text-sm text-marble/70", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 16, className: "text-gold mt-0.5" }),
            " ",
            SITE.address
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(MessageCircle, { size: 16, className: "text-gold mt-0.5" }),
            " ",
            SITE.whatsappDisplay
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Clock, { size: 16, className: "text-gold mt-0.5" }),
            " ",
            SITE.hours,
            /* @__PURE__ */ jsx("br", {}),
            "Closed Monday"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 mt-6", children: [
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-marble/60 hover:text-gold transition", "aria-label": "Instagram", children: /* @__PURE__ */ jsx(Instagram, { size: 18 }) }),
          /* @__PURE__ */ jsx("a", { href: "#", className: "text-marble/60 hover:text-gold transition", "aria-label": "Facebook", children: /* @__PURE__ */ jsx(Facebook, { size: 18 }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-slate/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-12 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs font-sans uppercase tracking-[0.15em] text-marble/40", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " The Penthouse — Lomé"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "italic font-serif tracking-normal text-marble/50", children: "Crafted for the elevated few" })
    ] }) })
  ] });
}
function PublicLayout() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-obsidian text-marble", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  PublicLayout as component
};
