import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, Minus, Plus } from "lucide-react";
import { P as PageTransition, S as SectionEyebrow } from "./PageTransition-jW4nmHoJ.js";
import { C as CartBar, a as CartDrawer } from "./CartDrawer-Dnqq7iCZ.js";
import { M as MENU_ITEMS, C as CATEGORIES } from "./penthouse-C0IPQeh4.js";
import { u as useCart } from "./useCart-62ZjjGoE.js";
import "zustand";
import "zustand/middleware";
function Menu() {
  const [active, setActive] = useState("signature");
  const [openCart, setOpenCart] = useState(false);
  const [sent, setSent] = useState(false);
  const cart = useCart();
  const items = MENU_ITEMS.filter((i) => i.category === active);
  const currentLabel = CATEGORIES.find((c) => c.id === active)?.label;
  const count = cart.items.reduce((s, i) => s + i.qty, 0);
  if (sent) {
    return /* @__PURE__ */ jsx(PageTransition, { children: /* @__PURE__ */ jsxs("div", { className: "min-h-[60vh] flex flex-col items-center justify-center px-6 text-center py-32", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        scale: 0
      }, animate: {
        scale: 1
      }, transition: {
        type: "spring"
      }, children: /* @__PURE__ */ jsx(CheckCircle, { size: 72, className: "text-gold" }) }),
      /* @__PURE__ */ jsx("h2", { className: "mt-8 font-serif italic text-4xl text-marble", children: "Order sent." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-marble/70 font-body max-w-sm", children: "Complete your order on WhatsApp — we'll confirm shortly." }),
      /* @__PURE__ */ jsx("button", { onClick: () => setSent(false), className: "btn-ghost-gold mt-10", children: "Order Again" })
    ] }) });
  }
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxs("section", { className: "pt-36 pb-16 px-6 lg:px-12 text-center", children: [
      /* @__PURE__ */ jsx(SectionEyebrow, { children: "The List" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-6 font-serif italic text-6xl md:text-8xl text-gold", children: "The Menu" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl mx-auto text-marble/70 font-body", children: "Signature cocktails crafted in-house. Refined tapas from local & global inspiration." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-20 z-30 bg-obsidian/95 backdrop-blur border-y border-slate/30", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 overflow-x-auto", children: /* @__PURE__ */ jsx("div", { className: "flex gap-2 md:gap-8 justify-start md:justify-center py-4 whitespace-nowrap", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxs("button", { onClick: () => setActive(c.id), className: "relative font-sans uppercase text-[11px] tracking-[0.2em] px-3 py-2 text-marble/70 hover:text-gold transition", children: [
      c.label,
      active === c.id && /* @__PURE__ */ jsx(motion.span, { layoutId: "menu-underline", className: "absolute -bottom-0 left-2 right-2 h-[2px] bg-gold" })
    ] }, c.id)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 px-6 lg:px-12 pb-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "font-serif italic text-3xl text-marble mb-10", children: currentLabel }),
      /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        y: -20
      }, transition: {
        duration: 0.4
      }, className: "space-y-4", children: items.map((it) => {
        const inCart = cart.items.find((c) => c.id === it.id);
        return /* @__PURE__ */ jsxs("div", { className: "glass border-l-2 border-copper p-6 md:p-8 flex justify-between items-start gap-6 hover:border-gold transition", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-sans text-lg text-marble", children: it.name }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-marble/60 font-body leading-relaxed", children: it.description }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 font-serif text-gold text-xl", children: [
              it.price.toLocaleString(),
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-xs tracking-widest", children: "XOF" })
            ] })
          ] }),
          inCart ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 shrink-0", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => cart.dec(it.id), className: "w-8 h-8 border border-gold text-gold flex items-center justify-center", "aria-label": "Decrease", children: /* @__PURE__ */ jsx(Minus, { size: 14 }) }),
            /* @__PURE__ */ jsx("span", { className: "w-6 text-center text-marble font-serif", children: inCart.qty }),
            /* @__PURE__ */ jsx("button", { onClick: () => cart.add({
              id: it.id,
              name: it.name,
              price: it.price
            }), className: "w-8 h-8 border border-gold text-gold flex items-center justify-center", "aria-label": "Increase", children: /* @__PURE__ */ jsx(Plus, { size: 14 }) })
          ] }) : /* @__PURE__ */ jsx("button", { onClick: () => cart.add({
            id: it.id,
            name: it.name,
            price: it.price
          }), className: "shrink-0 px-4 py-2 border border-gold text-gold font-sans text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-obsidian transition", children: "Add" })
        ] }, it.id);
      }) }, active) })
    ] }) }),
    count > 0 && !openCart && /* @__PURE__ */ jsx(CartBar, { count, total: cart.total(), onClick: () => setOpenCart(true) }),
    /* @__PURE__ */ jsx(CartDrawer, { open: openCart, onClose: () => setOpenCart(false), mode: "whatsapp", onSubmitted: () => setSent(true) })
  ] });
}
export {
  Menu as component
};
