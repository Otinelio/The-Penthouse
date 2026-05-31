import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Plus, Trash2, Save } from "lucide-react";
import { P as PinGate } from "./PinGate-Bf9RarNy.js";
import { C as CATEGORIES, M as MENU_ITEMS, G as GALLERY_IMAGES, T as TESTIMONIALS, S as SITE } from "./penthouse-C0IPQeh4.js";
import "motion/react";
const SECTIONS = [{
  id: "menu",
  label: "Menu"
}, {
  id: "reservations",
  label: "Reservations"
}, {
  id: "gallery",
  label: "Gallery"
}, {
  id: "testimonials",
  label: "Testimonials"
}, {
  id: "settings",
  label: "Settings"
}];
function useLocal(key, initial) {
  const [v, setV] = useState(() => {
    if (typeof window === "undefined") return initial;
    try {
      const s = localStorage.getItem(key);
      return s ? JSON.parse(s) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(v));
  }, [key, v]);
  return [v, setV];
}
function AdminDashboard() {
  const [section, setSection] = useState("menu");
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-obsidian text-marble flex flex-col md:flex-row", children: [
    /* @__PURE__ */ jsxs("aside", { className: "md:w-64 md:min-h-screen border-r border-slate/40 p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "font-serif text-gold text-xl tracking-[0.3em]", children: "THE PENTHOUSE" }),
      /* @__PURE__ */ jsx("div", { className: "label-eyebrow mt-1", children: "Admin" }),
      /* @__PURE__ */ jsx("nav", { className: "mt-10 flex md:flex-col gap-2 overflow-x-auto", children: SECTIONS.map((s) => /* @__PURE__ */ jsx("button", { onClick: () => setSection(s.id), className: `text-left px-4 py-3 font-sans uppercase text-[11px] tracking-[0.2em] transition whitespace-nowrap ${section === s.id ? "bg-gold text-obsidian" : "text-marble/70 hover:text-gold"}`, children: s.label }, s.id)) })
    ] }),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 p-6 md:p-12", children: [
      section === "menu" && /* @__PURE__ */ jsx(MenuMgmt, {}),
      section === "reservations" && /* @__PURE__ */ jsx(ReservationsLog, {}),
      section === "gallery" && /* @__PURE__ */ jsx(GalleryMgmt, {}),
      section === "testimonials" && /* @__PURE__ */ jsx(TestimonialsMgmt, {}),
      section === "settings" && /* @__PURE__ */ jsx(SettingsMgmt, {})
    ] })
  ] });
}
function H({
  children
}) {
  return /* @__PURE__ */ jsx("h2", { className: "font-serif italic text-4xl text-marble mb-8", children });
}
function MenuMgmt() {
  const [items, setItems] = useLocal("penthouse-menu", MENU_ITEMS);
  const [draft, setDraft] = useState({
    category: "signature",
    price: 0
  });
  function add() {
    if (!draft.name || !draft.price) return;
    setItems([...items, {
      id: crypto.randomUUID(),
      name: draft.name,
      description: draft.description || "",
      category: draft.category,
      price: Number(draft.price)
    }]);
    setDraft({
      category: "signature",
      price: 0
    });
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(H, { children: "Menu Management" }),
    /* @__PURE__ */ jsxs("div", { className: "glass border border-gold/20 p-6 mb-8 grid md:grid-cols-5 gap-3", children: [
      /* @__PURE__ */ jsx("input", { placeholder: "Name", className: "field", value: draft.name || "", onChange: (e) => setDraft({
        ...draft,
        name: e.target.value
      }) }),
      /* @__PURE__ */ jsx("input", { placeholder: "Description", className: "field md:col-span-2", value: draft.description || "", onChange: (e) => setDraft({
        ...draft,
        description: e.target.value
      }) }),
      /* @__PURE__ */ jsx("select", { className: "field", value: draft.category, onChange: (e) => setDraft({
        ...draft,
        category: e.target.value
      }), children: CATEGORIES.map((c) => /* @__PURE__ */ jsx("option", { value: c.id, className: "bg-glass", children: c.label }, c.id)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx("input", { type: "number", placeholder: "Price", className: "field", value: draft.price || "", onChange: (e) => setDraft({
          ...draft,
          price: Number(e.target.value)
        }) }),
        /* @__PURE__ */ jsx("button", { onClick: add, className: "px-4 border border-gold text-gold hover:bg-gold hover:text-obsidian", children: /* @__PURE__ */ jsx(Plus, { size: 16 }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: items.map((it, idx) => /* @__PURE__ */ jsxs("div", { className: "glass border-l-2 border-copper p-4 grid md:grid-cols-12 gap-3 items-center", children: [
      /* @__PURE__ */ jsx("input", { className: "field md:col-span-3", value: it.name, onChange: (e) => {
        const c = [...items];
        c[idx] = {
          ...it,
          name: e.target.value
        };
        setItems(c);
      } }),
      /* @__PURE__ */ jsx("input", { className: "field md:col-span-4", value: it.description, onChange: (e) => {
        const c = [...items];
        c[idx] = {
          ...it,
          description: e.target.value
        };
        setItems(c);
      } }),
      /* @__PURE__ */ jsx("select", { className: "field md:col-span-2", value: it.category, onChange: (e) => {
        const c = [...items];
        c[idx] = {
          ...it,
          category: e.target.value
        };
        setItems(c);
      }, children: CATEGORIES.map((c) => /* @__PURE__ */ jsx("option", { value: c.id, className: "bg-glass", children: c.label }, c.id)) }),
      /* @__PURE__ */ jsx("input", { type: "number", className: "field md:col-span-2", value: it.price, onChange: (e) => {
        const c = [...items];
        c[idx] = {
          ...it,
          price: Number(e.target.value)
        };
        setItems(c);
      } }),
      /* @__PURE__ */ jsx("button", { onClick: () => {
        if (confirm("Delete this item?")) setItems(items.filter((_, i) => i !== idx));
      }, className: "md:col-span-1 text-marble/50 hover:text-red-500 transition justify-self-end", children: /* @__PURE__ */ jsx(Trash2, { size: 16 }) })
    ] }, it.id)) })
  ] });
}
function ReservationsLog() {
  const [res, setRes] = useLocal("penthouse-reservations", []);
  function setStatus(id, status) {
    setRes(res.map((r) => r.id === id ? {
      ...r,
      status
    } : r));
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(H, { children: "Reservations" }),
    res.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-marble/50 font-serif italic text-xl", children: "No reservations yet." }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: res.map((r) => /* @__PURE__ */ jsxs("div", { className: "glass border-l-2 border-gold p-6 grid md:grid-cols-6 gap-4 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "font-serif text-gold text-xl", children: r.name }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
        r.date,
        " ",
        /* @__PURE__ */ jsx("span", { className: "text-gold", children: r.time })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
        r.guests,
        " guests"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "text-sm text-marble/60", children: r.occasion }),
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-marble/60", children: r.status }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx("button", { onClick: () => setStatus(r.id, "confirmed"), className: "px-3 py-1 text-[10px] border border-gold text-gold uppercase tracking-widest hover:bg-gold hover:text-obsidian", children: "Confirm" }),
        /* @__PURE__ */ jsx("button", { onClick: () => setStatus(r.id, "completed"), className: "px-3 py-1 text-[10px] border border-slate text-marble uppercase tracking-widest hover:border-gold", children: "Done" })
      ] })
    ] }, r.id)) })
  ] });
}
function GalleryMgmt() {
  const [imgs, setImgs] = useLocal("penthouse-gallery", GALLERY_IMAGES);
  const [draft, setDraft] = useState("");
  function move(i, dir) {
    const c = [...imgs];
    const t = c[i + dir];
    if (!t) return;
    c[i + dir] = c[i];
    c[i] = t;
    setImgs(c);
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(H, { children: "Gallery" }),
    /* @__PURE__ */ jsxs("div", { className: "glass border border-gold/20 p-4 flex gap-3 mb-8", children: [
      /* @__PURE__ */ jsx("input", { className: "field", placeholder: "Image URL", value: draft, onChange: (e) => setDraft(e.target.value) }),
      /* @__PURE__ */ jsx("button", { onClick: () => {
        if (draft) {
          setImgs([...imgs, draft]);
          setDraft("");
        }
      }, className: "px-4 border border-gold text-gold hover:bg-gold hover:text-obsidian", children: /* @__PURE__ */ jsx(Plus, { size: 16 }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: imgs.map((src, i) => /* @__PURE__ */ jsxs("div", { className: "relative border border-slate group", children: [
      /* @__PURE__ */ jsx("img", { src, alt: "", className: "w-full aspect-square object-cover" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-obsidian/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => move(i, -1), className: "px-2 py-1 border border-gold text-gold text-xs", children: "↑" }),
          /* @__PURE__ */ jsx("button", { onClick: () => move(i, 1), className: "px-2 py-1 border border-gold text-gold text-xs", children: "↓" })
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setImgs(imgs.filter((_, k) => k !== i)), className: "text-red-400", children: /* @__PURE__ */ jsx(Trash2, { size: 16 }) })
      ] })
    ] }, i)) })
  ] });
}
function TestimonialsMgmt() {
  const [list, setList] = useLocal("penthouse-testimonials", TESTIMONIALS);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(H, { children: "Testimonials" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      list.map((t, i) => /* @__PURE__ */ jsxs("div", { className: "glass border-l-2 border-copper p-6 space-y-3", children: [
        /* @__PURE__ */ jsx("textarea", { className: "field resize-none", rows: 2, value: t.quote, onChange: (e) => {
          const c = [...list];
          c[i] = {
            ...t,
            quote: e.target.value
          };
          setList(c);
        } }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("input", { className: "field flex-1", value: t.author, onChange: (e) => {
            const c = [...list];
            c[i] = {
              ...t,
              author: e.target.value
            };
            setList(c);
          } }),
          /* @__PURE__ */ jsx("button", { onClick: () => setList(list.filter((_, k) => k !== i)), className: "px-3 text-marble/50 hover:text-red-500", children: /* @__PURE__ */ jsx(Trash2, { size: 16 }) })
        ] })
      ] }, i)),
      /* @__PURE__ */ jsxs("button", { onClick: () => setList([...list, {
        quote: "New testimonial...",
        author: "Author"
      }]), className: "btn-ghost-gold", children: [
        /* @__PURE__ */ jsx(Plus, { size: 14 }),
        " Add Testimonial"
      ] })
    ] })
  ] });
}
function SettingsMgmt() {
  const [s, setS] = useLocal("penthouse-settings", {
    whatsapp: SITE.whatsapp,
    hours: SITE.hours,
    tagline: SITE.tagline,
    fullyBooked: false
  });
  const [saved, setSaved] = useState(false);
  function save() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2e3);
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(H, { children: "Settings" }),
    /* @__PURE__ */ jsxs("div", { className: "glass border border-gold/20 p-8 space-y-6 max-w-xl", children: [
      /* @__PURE__ */ jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsx("span", { className: "label-eyebrow", children: "WhatsApp Number" }),
        /* @__PURE__ */ jsx("input", { className: "field mt-1", value: s.whatsapp, onChange: (e) => setS({
          ...s,
          whatsapp: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsx("span", { className: "label-eyebrow", children: "Opening Hours" }),
        /* @__PURE__ */ jsx("input", { className: "field mt-1", value: s.hours, onChange: (e) => setS({
          ...s,
          hours: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsx("span", { className: "label-eyebrow", children: "Tagline" }),
        /* @__PURE__ */ jsx("input", { className: "field mt-1", value: s.tagline, onChange: (e) => setS({
          ...s,
          tagline: e.target.value
        }) })
      ] }),
      /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
        /* @__PURE__ */ jsx("input", { type: "checkbox", checked: s.fullyBooked, onChange: (e) => setS({
          ...s,
          fullyBooked: e.target.checked
        }), className: "accent-[var(--color-gold)] w-4 h-4" }),
        /* @__PURE__ */ jsx("span", { className: "font-sans text-sm uppercase tracking-[0.2em] text-marble/80", children: "Fully Booked Tonight" })
      ] }),
      /* @__PURE__ */ jsxs("button", { onClick: save, className: "btn-gold", children: [
        /* @__PURE__ */ jsx(Save, { size: 14 }),
        " ",
        saved ? "Saved" : "Save Settings"
      ] })
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsx(PinGate, { pin: "4812", title: "Admin Access", children: /* @__PURE__ */ jsx(AdminDashboard, {}) });
export {
  SplitComponent as component
};
