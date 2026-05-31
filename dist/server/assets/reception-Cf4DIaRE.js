import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Volume2, VolumeX, Download } from "lucide-react";
import { P as PinGate } from "./PinGate-Bf9RarNy.js";
import { l as loadOrders, s as saveOrders } from "./useCart-62ZjjGoE.js";
import "zustand";
import "zustand/middleware";
function ReceptionDashboard() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");
  const [now, setNow] = useState(Date.now());
  const [sound, setSound] = useState(true);
  const prevIdsRef = useRef(/* @__PURE__ */ new Set());
  useEffect(() => {
    const refresh = () => {
      const o = loadOrders();
      const ids = new Set(o.map((x) => x.id));
      const isNew = o.some((x) => !prevIdsRef.current.has(x.id) && x.status === "pending");
      if (isNew && prevIdsRef.current.size > 0 && sound) chime();
      prevIdsRef.current = ids;
      setOrders(o);
    };
    refresh();
    const t = setInterval(refresh, 5e3);
    const tick = setInterval(() => setNow(Date.now()), 3e4);
    window.addEventListener("orders-updated", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      clearInterval(t);
      clearInterval(tick);
      window.removeEventListener("orders-updated", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [sound]);
  function updateStatus(id, status) {
    const next = loadOrders().map((o) => o.id === id ? {
      ...o,
      status
    } : o);
    saveOrders(next);
    setOrders(next);
  }
  const filtered = filter === "all" ? orders : orders.filter((o) => o.status === filter);
  const today = (/* @__PURE__ */ new Date()).toDateString();
  const todays = orders.filter((o) => new Date(o.timestamp).toDateString() === today);
  const revenue = todays.filter((o) => o.status !== "cancelled").reduce((s, o) => s + o.total, 0);
  const pendingCount = orders.filter((o) => o.status === "pending").length;
  function exportSummary() {
    const text = todays.map((o) => {
      const items = o.items.map((i) => `  ${i.qty}× ${i.name} — ${(i.qty * i.price).toLocaleString()} XOF`).join("\n");
      return `[${o.tableId}] ${o.guestName} — ${o.status}
${items}
  Total: ${o.total.toLocaleString()} XOF
`;
    }).join("\n");
    const blob = new Blob([`THE PENTHOUSE — Shift Summary ${today}

${text}

TOTAL REVENUE: ${revenue.toLocaleString()} XOF`], {
      type: "text/plain"
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `penthouse-shift-${today}.txt`;
    a.click();
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-obsidian text-marble", children: [
    /* @__PURE__ */ jsxs("header", { className: "border-b border-slate/40 px-6 py-5 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-serif text-gold text-xl tracking-[0.3em]", children: "THE PENTHOUSE" }),
        /* @__PURE__ */ jsx("div", { className: "label-eyebrow mt-1", children: "Reception — Live Orders" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
        /* @__PURE__ */ jsx(LiveClock, {}),
        /* @__PURE__ */ jsx("button", { onClick: () => setSound((s) => !s), className: "text-gold p-2 border border-slate hover:border-gold transition", title: "Toggle chime", children: sound ? /* @__PURE__ */ jsx(Volume2, { size: 18 }) : /* @__PURE__ */ jsx(VolumeX, { size: 18 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-6 py-6 grid md:grid-cols-3 gap-4 border-b border-slate/40", children: [
      /* @__PURE__ */ jsx(Stat, { label: "Orders Today", value: String(todays.length) }),
      /* @__PURE__ */ jsx(Stat, { label: "Revenue Today", value: `${revenue.toLocaleString()} XOF` }),
      /* @__PURE__ */ jsx(Stat, { label: "Pending", value: String(pendingCount) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-6 py-4 flex items-center justify-between border-b border-slate/40 flex-wrap gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: ["all", "pending", "confirmed", "delivered"].map((f) => /* @__PURE__ */ jsx("button", { onClick: () => setFilter(f), className: `px-4 py-2 font-sans text-[11px] uppercase tracking-[0.2em] transition ${filter === f ? "bg-gold text-obsidian" : "border border-slate text-marble/70 hover:border-gold"}`, children: f }, f)) }),
      /* @__PURE__ */ jsxs("button", { onClick: exportSummary, className: "btn-ghost-gold !py-2 !px-4 !text-[10px]", children: [
        /* @__PURE__ */ jsx(Download, { size: 14 }),
        " Export Summary"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: /* @__PURE__ */ jsxs(AnimatePresence, { children: [
      filtered.length === 0 && /* @__PURE__ */ jsx("div", { className: "col-span-full text-center py-24 text-marble/40 font-serif italic text-xl", children: "No orders to display." }),
      filtered.map((o) => /* @__PURE__ */ jsxs(motion.div, { layout: true, initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        scale: 0.95
      }, className: "glass border-l-2 border-gold p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("div", { className: "font-serif text-gold text-2xl", children: o.tableId }),
          /* @__PURE__ */ jsx(StatusPill, { status: o.status })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 font-sans text-marble", children: o.guestName }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-marble/50 mt-1", children: elapsed(o.timestamp, now) }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-1 text-sm border-t border-slate/40 pt-3", children: o.items.map((i) => /* @__PURE__ */ jsxs("li", { className: "flex justify-between text-marble/80", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            i.qty,
            "× ",
            i.name
          ] }),
          /* @__PURE__ */ jsx("span", { children: (i.qty * i.price).toLocaleString() })
        ] }, i.id)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between font-serif text-lg text-gold border-t border-slate/40 pt-3 mt-3", children: [
          /* @__PURE__ */ jsx("span", { children: "Total" }),
          /* @__PURE__ */ jsxs("span", { children: [
            o.total.toLocaleString(),
            " XOF"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-2 flex-wrap", children: [
          o.status === "pending" && /* @__PURE__ */ jsx("button", { onClick: () => updateStatus(o.id, "confirmed"), className: "flex-1 px-3 py-2 border border-gold text-gold text-[10px] uppercase tracking-widest hover:bg-gold hover:text-obsidian transition", children: "Confirm" }),
          o.status !== "delivered" && o.status !== "cancelled" && /* @__PURE__ */ jsx("button", { onClick: () => updateStatus(o.id, "delivered"), className: "flex-1 px-3 py-2 border border-slate text-marble text-[10px] uppercase tracking-widest hover:border-gold transition", children: "Delivered" }),
          o.status !== "cancelled" && o.status !== "delivered" && /* @__PURE__ */ jsx("button", { onClick: () => updateStatus(o.id, "cancelled"), className: "px-3 py-2 border border-slate text-marble/50 text-[10px] uppercase tracking-widest hover:border-red-500 hover:text-red-500 transition", children: "Cancel" })
        ] })
      ] }, o.id))
    ] }) })
  ] });
}
function Stat({
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { className: "border border-slate/40 p-5", children: [
    /* @__PURE__ */ jsx("div", { className: "label-eyebrow", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 font-serif text-3xl text-marble", children: value })
  ] });
}
function StatusPill({
  status
}) {
  const map = {
    pending: ["#f59e0b", "Pending"],
    confirmed: ["#3b82f6", "Confirmed"],
    delivered: ["#10b981", "Delivered"],
    cancelled: ["#6b7280", "Cancelled"]
  };
  const [color, label] = map[status];
  return /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] text-marble/80", children: [
    /* @__PURE__ */ jsx("span", { className: "w-2 h-2 rounded-full", style: {
      background: color
    } }),
    label
  ] });
}
function LiveClock() {
  const [t, setT] = useState(/* @__PURE__ */ new Date());
  useEffect(() => {
    const i = setInterval(() => setT(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(i);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "font-serif text-2xl text-gold tabular-nums", children: t.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }) });
}
function elapsed(iso, now) {
  const diff = Math.max(0, Math.floor((now - new Date(iso).getTime()) / 6e4));
  if (diff < 1) return "just now";
  if (diff < 60) return `${diff} min ago`;
  const h = Math.floor(diff / 60);
  return `${h}h ${diff % 60}m ago`;
}
function chime() {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    const ctx = new AC();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g);
    g.connect(ctx.destination);
    o.frequency.value = 880;
    o.type = "sine";
    g.gain.setValueAtTime(1e-4, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.15, ctx.currentTime + 0.05);
    g.gain.exponentialRampToValueAtTime(1e-4, ctx.currentTime + 0.6);
    o.start();
    o.stop(ctx.currentTime + 0.7);
  } catch {
  }
}
const SplitComponent = () => /* @__PURE__ */ jsx(PinGate, { pin: "2025", title: "Reception Access", children: /* @__PURE__ */ jsx(ReceptionDashboard, {}) });
export {
  SplitComponent as component
};
