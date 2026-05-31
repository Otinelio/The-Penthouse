import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Minus, Plus, ArrowRight } from "lucide-react";
import { u as useCart, a as addOrder } from "./useCart-62ZjjGoE.js";
import { S as SITE } from "./penthouse-C0IPQeh4.js";
function buildOrderWhatsAppMessage(guestName, items, total) {
  const lines = items.map((i) => `• ${i.name} × ${i.qty} — ${(i.price * i.qty).toLocaleString()} XOF`);
  return `ORDER — THE PENTHOUSE

Name: ${guestName}
${lines.join("\n")}

Total: ${total.toLocaleString()} XOF`;
}
function openWhatsAppOrder(guestName, items, total) {
  const msg = buildOrderWhatsAppMessage(guestName, items, total);
  window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
}
function CartBar({ count, total, onClick }) {
  return /* @__PURE__ */ jsxs(
    motion.button,
    {
      initial: { y: 80 },
      animate: { y: 0 },
      onClick,
      className: "fixed bottom-6 left-4 right-4 max-w-xl mx-auto bg-gold text-obsidian py-4 flex items-center justify-between px-6 font-sans uppercase tracking-[0.2em] text-sm z-30 shadow-lg",
      children: [
        /* @__PURE__ */ jsxs("span", { children: [
          count,
          " item",
          count > 1 ? "s" : ""
        ] }),
        /* @__PURE__ */ jsxs("span", { children: [
          total.toLocaleString(),
          " XOF"
        ] })
      ]
    }
  );
}
function CartDrawer({ open, onClose, mode, tableId, onSubmitted }) {
  const cart = useCart();
  const [name, setName] = useState("");
  function submit() {
    if (!name.trim() || cart.items.length === 0) return;
    if (mode === "reception" && tableId) {
      addOrder({
        id: crypto.randomUUID(),
        tableId: tableId.toUpperCase(),
        guestName: name.trim(),
        items: cart.items,
        total: cart.total(),
        status: "pending",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    } else {
      openWhatsAppOrder(name.trim(), cart.items, cart.total());
    }
    cart.clear();
    setName("");
    onClose();
    onSubmitted();
  }
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { y: "100%" },
      animate: { y: 0 },
      exit: { y: "100%" },
      transition: { type: "tween", duration: 0.3 },
      className: "fixed inset-x-0 bottom-0 bg-glass border-t border-gold/30 z-40 max-h-[90vh] overflow-y-auto",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-xl mx-auto p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif italic text-2xl text-gold", children: "Your Order" }),
          /* @__PURE__ */ jsx("button", { onClick: onClose, className: "text-marble", "aria-label": "Close", children: /* @__PURE__ */ jsx(X, { size: 22 }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-6", children: cart.items.map((i) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center border-b border-slate/40 pb-3", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-marble font-sans", children: i.name }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-marble/60", children: [
              i.qty,
              " × ",
              i.price.toLocaleString(),
              " XOF"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => cart.dec(i.id),
                className: "w-7 h-7 border border-slate text-marble",
                "aria-label": "Decrease",
                children: /* @__PURE__ */ jsx(Minus, { size: 12, className: "mx-auto" })
              }
            ),
            /* @__PURE__ */ jsx("span", { className: "w-6 text-center", children: i.qty }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => cart.add({ id: i.id, name: i.name, price: i.price }),
                className: "w-7 h-7 border border-slate text-marble",
                "aria-label": "Increase",
                children: /* @__PURE__ */ jsx(Plus, { size: 12, className: "mx-auto" })
              }
            )
          ] })
        ] }, i.id)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between font-serif text-xl text-marble border-t border-gold/40 pt-4", children: [
          /* @__PURE__ */ jsx("span", { children: "Total" }),
          /* @__PURE__ */ jsxs("span", { className: "text-gold", children: [
            cart.total().toLocaleString(),
            " XOF"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "block mt-6", children: [
          /* @__PURE__ */ jsx("span", { className: "label-eyebrow", children: "Guest Name" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              className: "field mt-1",
              value: name,
              onChange: (e) => setName(e.target.value),
              placeholder: "Required"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: submit, className: "btn-gold w-full mt-6 flex items-center justify-center gap-2", disabled: !name.trim(), children: mode === "reception" ? "Send to Reception" : /* @__PURE__ */ jsxs(Fragment, { children: [
          "Order via WhatsApp ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] }) })
      ] })
    }
  ) });
}
export {
  CartBar as C,
  CartDrawer as a
};
