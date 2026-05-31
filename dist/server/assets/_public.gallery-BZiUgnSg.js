import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Maximize2, Instagram, X, ChevronLeft, ChevronRight } from "lucide-react";
import { P as PageTransition, S as SectionEyebrow } from "./PageTransition-jW4nmHoJ.js";
import { G as GALLERY_IMAGES } from "./penthouse-C0IPQeh4.js";
function Gallery() {
  const [open, setOpen] = useState(null);
  const close = () => setOpen(null);
  const next = () => setOpen((i) => i === null ? null : (i + 1) % GALLERY_IMAGES.length);
  const prev = () => setOpen((i) => i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxs("section", { className: "pt-36 pb-12 px-6 lg:px-12 text-center", children: [
      /* @__PURE__ */ jsx(SectionEyebrow, { children: "Gallery" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-serif italic text-5xl md:text-7xl text-marble", children: [
        "The Penthouse — ",
        /* @__PURE__ */ jsx("span", { className: "text-gold", children: "Through the Lens" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-6 lg:px-12 pb-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]", children: GALLERY_IMAGES.map((src, i) => /* @__PURE__ */ jsxs("div", { className: "mb-4 break-inside-avoid relative group cursor-pointer", onClick: () => setOpen(i), children: [
      /* @__PURE__ */ jsx("img", { src, alt: `Penthouse ${i + 1}`, className: "w-full object-cover", loading: "lazy" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gold/0 group-hover:bg-gold/25 transition flex items-center justify-center", children: /* @__PURE__ */ jsx(Maximize2, { size: 24, className: "text-marble opacity-0 group-hover:opacity-100 transition" }) })
    ] }, i)) }) }),
    /* @__PURE__ */ jsxs("section", { className: "border-y border-gold/30 py-16 px-6 text-center", children: [
      /* @__PURE__ */ jsx(Instagram, { size: 28, className: "text-gold mx-auto" }),
      /* @__PURE__ */ jsx("h3", { className: "mt-6 font-serif italic text-3xl md:text-4xl text-marble", children: "Follow the elevation" }),
      /* @__PURE__ */ jsx("a", { href: "#", className: "mt-4 inline-block font-sans uppercase tracking-[0.3em] text-sm text-gold hover:underline", children: "@thepenthouse.lome" })
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open !== null && /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, exit: {
      opacity: 0
    }, className: "fixed inset-0 z-[100] bg-obsidian/98 flex items-center justify-center p-4", onClick: close, children: [
      /* @__PURE__ */ jsx("button", { className: "absolute top-6 right-6 text-marble hover:text-gold p-2", onClick: close, children: /* @__PURE__ */ jsx(X, { size: 28 }) }),
      /* @__PURE__ */ jsx("button", { className: "absolute left-4 md:left-8 text-marble hover:text-gold p-2", onClick: (e) => {
        e.stopPropagation();
        prev();
      }, children: /* @__PURE__ */ jsx(ChevronLeft, { size: 36 }) }),
      /* @__PURE__ */ jsx("button", { className: "absolute right-4 md:right-8 text-marble hover:text-gold p-2", onClick: (e) => {
        e.stopPropagation();
        next();
      }, children: /* @__PURE__ */ jsx(ChevronRight, { size: 36 }) }),
      /* @__PURE__ */ jsx(motion.img, { initial: {
        opacity: 0,
        scale: 0.97
      }, animate: {
        opacity: 1,
        scale: 1
      }, src: GALLERY_IMAGES[open], alt: "Expanded", className: "max-h-[85vh] max-w-[90vw] object-contain border border-gold/20", onClick: (e) => e.stopPropagation() }, open)
    ] }) })
  ] });
}
export {
  Gallery as component
};
