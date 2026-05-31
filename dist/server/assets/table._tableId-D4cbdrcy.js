import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle, Minus, Plus } from "lucide-react";
import { M as MENU_ITEMS, C as CATEGORIES } from "./penthouse-C0IPQeh4.js";
import { u as useCart } from "./useCart-62ZjjGoE.js";
import { C as CartBar, a as CartDrawer } from "./CartDrawer-Dnqq7iCZ.js";
import { R as Route } from "./router-CVErQ04m.js";
import "zustand";
import "zustand/middleware";
import "@tanstack/react-query";
import "@tanstack/react-router";
const QR_CATS = CATEGORIES.filter((c) => c.id !== "classic");
function TableOrder() {
  const {
    tableId
  } = Route.useParams();
  const [active, setActive] = useState("signature");
  const [openCart, setOpenCart] = useState(false);
  const [sent, setSent] = useState(false);
  const cart = useCart();
  const items = MENU_ITEMS.filter((i) => i.category === active);
  const count = cart.items.reduce((s, i) => s + i.qty, 0);
  if (sent) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-obsidian flex flex-col items-center justify-center px-6 text-center", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        scale: 0
      }, animate: {
        scale: 1
      }, transition: {
        type: "spring"
      }, children: /* @__PURE__ */ jsx(CheckCircle, { size: 72, className: "text-gold" }) }),
      /* @__PURE__ */ jsx("h2", { className: "mt-8 font-serif italic text-4xl text-marble", children: "Order received." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-marble/70 font-body max-w-sm", children: "Our team will be with you shortly." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 glass border border-gold/30 px-6 py-3 font-sans text-xs uppercase tracking-[0.3em] text-gold", children: [
        "Table ",
        tableId.toUpperCase()
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: () => setSent(false), className: "btn-ghost-gold mt-10", children: "Order Again" })
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-obsidian pb-32", children: [
    /* @__PURE__ */ jsxs("header", { className: "text-center py-8 border-b border-slate/40", children: [
      /* @__PURE__ */ jsx("div", { className: "font-serif text-gold text-xl tracking-[0.3em]", children: "THE PENTHOUSE" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 inline-block glass border border-gold/30 px-5 py-1.5 font-sans text-[10px] uppercase tracking-[0.3em] text-gold", children: [
        "Table ",
        tableId.toUpperCase()
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-0 bg-obsidian/95 backdrop-blur z-20 border-b border-slate/40", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsx("div", { className: "flex gap-1 px-4 py-3 whitespace-nowrap", children: QR_CATS.map((c) => /* @__PURE__ */ jsx("button", { onClick: () => setActive(c.id), className: `px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] transition ${active === c.id ? "text-gold border-b-2 border-gold" : "text-marble/60"}`, children: c.label.replace(" Cocktails", "") }, c.id)) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "px-4 py-6 space-y-3 max-w-xl mx-auto", children: items.map((it) => {
      const inCart = cart.items.find((c) => c.id === it.id);
      return /* @__PURE__ */ jsxs("div", { className: "glass border-l-2 border-copper p-4 flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("div", { className: "font-sans text-marble", children: it.name }),
          /* @__PURE__ */ jsxs("div", { className: "text-gold font-serif text-lg mt-1", children: [
            it.price.toLocaleString(),
            " XOF"
          ] })
        ] }),
        inCart ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => cart.dec(it.id), className: "w-8 h-8 border border-gold text-gold", children: /* @__PURE__ */ jsx(Minus, { size: 14, className: "mx-auto" }) }),
          /* @__PURE__ */ jsx("span", { className: "w-6 text-center text-marble font-serif", children: inCart.qty }),
          /* @__PURE__ */ jsx("button", { onClick: () => cart.add({
            id: it.id,
            name: it.name,
            price: it.price
          }), className: "w-8 h-8 border border-gold text-gold", children: /* @__PURE__ */ jsx(Plus, { size: 14, className: "mx-auto" }) })
        ] }) : /* @__PURE__ */ jsx("button", { onClick: () => cart.add({
          id: it.id,
          name: it.name,
          price: it.price
        }), className: "px-4 py-2 border border-gold text-gold font-sans text-[10px] uppercase tracking-[0.2em] hover:bg-gold hover:text-obsidian transition", children: "Add" })
      ] }, it.id);
    }) }),
    count > 0 && !openCart && /* @__PURE__ */ jsx(CartBar, { count, total: cart.total(), onClick: () => setOpenCart(true) }),
    /* @__PURE__ */ jsx(CartDrawer, { open: openCart, onClose: () => setOpenCart(false), mode: "reception", tableId, onSubmitted: () => setSent(true) })
  ] });
}
export {
  TableOrder as component
};
