import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Wine, Music, Leaf, Moon } from "lucide-react";
import { P as PageTransition, S as SectionEyebrow } from "./PageTransition-jW4nmHoJ.js";
const BENTO = [{
  label: "View",
  img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
  span: "md:col-span-2 md:row-span-2"
}, {
  label: "Light",
  img: "https://images.unsplash.com/photo-1519214605650-76a613ee3245?w=600&q=80",
  span: ""
}, {
  label: "Material",
  img: "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?w=600&q=80",
  span: ""
}, {
  label: "Sound",
  img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80",
  span: "md:col-span-2"
}, {
  label: "Presence",
  img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80",
  span: ""
}];
function Experience() {
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsx("section", { className: "pt-36 pb-24 px-6 lg:px-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "The Experience" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-serif italic text-5xl md:text-7xl text-marble leading-[1.05]", children: [
          "More Than a Venue — ",
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "A Ritual" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-marble/70 font-body leading-relaxed text-lg max-w-md", children: "The Penthouse is not designed to impress. It is designed to elevate. A minimal expression of luxury, woven with Togolese soul, suspended above the rhythm of Lomé. Every detail — the weight of the glass, the warmth of the copper, the calibration of the soundtrack — is composed for one purpose: the slow unwinding of an extraordinary evening." })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0,
        scale: 1.05
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 1.2
      }, className: "aspect-[4/5] overflow-hidden border border-gold/20", children: /* @__PURE__ */ jsx("img", { src: "https://images.unsplash.com/photo-1574096145257-fc4d44935f9c?w=900&q=80", alt: "Interior", className: "w-full h-full object-cover" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 px-6 lg:px-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "The Space" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-serif italic text-5xl text-marble", children: "An Architecture of Stillness" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3", children: BENTO.map((b) => /* @__PURE__ */ jsxs("div", { className: `relative overflow-hidden group ${b.span}`, children: [
        /* @__PURE__ */ jsx("img", { src: b.img, alt: b.label, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110", loading: "lazy" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gold/0 group-hover:bg-gold/20 transition-colors duration-500 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "font-sans uppercase tracking-[0.3em] text-xs text-marble opacity-0 group-hover:opacity-100 transition-opacity duration-500", children: b.label }) })
      ] }, b.label)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-32 px-6 lg:px-12 border-y border-slate/30", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "font-serif text-gold text-7xl leading-none", children: "“" }),
      /* @__PURE__ */ jsx("blockquote", { className: "mt-4 font-serif italic text-3xl md:text-5xl text-marble leading-tight", children: "We believe in elevation — not just in altitude, but in every sense encountered here." }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 font-sans text-xs uppercase tracking-[0.3em] text-gold", children: "— The Penthouse, Lomé" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-32 px-6 lg:px-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "The Details" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-serif italic text-5xl text-marble", children: "Composed With Intent" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [{
        icon: Wine,
        title: "Handblown Glassware",
        body: "Each glass crafted by a Togolese artisan."
      }, {
        icon: Music,
        title: "Downtempo Soundtrack",
        body: "Curated in-house, volume calibrated to mood."
      }, {
        icon: Leaf,
        title: "Living Greenery",
        body: "Monstera in polished concrete pots throughout."
      }, {
        icon: Moon,
        title: "Golden Hour Service",
        body: "Operations begin as the sun sets."
      }].map(({
        icon: Icon,
        title,
        body
      }) => /* @__PURE__ */ jsxs("div", { className: "glass border-l-2 border-copper p-8 hover:border-gold transition", children: [
        /* @__PURE__ */ jsx(Icon, { size: 24, className: "text-gold" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-6 font-serif text-2xl text-marble", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-marble/60 font-body leading-relaxed", children: body })
      ] }, title)) })
    ] }) })
  ] });
}
export {
  Experience as component
};
