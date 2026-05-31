import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useScroll, useTransform, motion, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { P as PageTransition, G as GoldDust, S as SectionEyebrow } from "./PageTransition-jW4nmHoJ.js";
import { S as SITE, T as TESTIMONIALS } from "./penthouse-C0IPQeh4.js";
const HERO_IMG = "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1920&q=80";
function Home() {
  const heroRef = useRef(null);
  const {
    scrollY
  } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.3]);
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative h-screen w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxs(motion.div, { style: {
        y
      }, className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("img", { src: HERO_IMG, alt: "Rooftop lounge over Lomé at night", className: "w-full h-[120%] object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/60 to-obsidian" })
      ] }),
      /* @__PURE__ */ jsx(GoldDust, { count: 10 }),
      /* @__PURE__ */ jsxs(motion.div, { style: {
        opacity
      }, className: "relative z-10 h-full flex flex-col items-center justify-center text-center px-6", children: [
        /* @__PURE__ */ jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1
        }, className: "label-eyebrow mb-8", children: "Lomé — Togo" }),
        /* @__PURE__ */ jsx(motion.h1, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1.1,
          delay: 0.2
        }, className: "font-serif italic font-bold text-gold leading-none text-[clamp(3.5rem,10vw,8rem)]", style: {
          letterSpacing: "0.02em"
        }, children: "THE PENTHOUSE" }),
        /* @__PURE__ */ jsx(motion.p, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, transition: {
          duration: 1,
          delay: 0.6
        }, className: "mt-6 font-sans text-marble/80 uppercase text-xs md:text-sm", style: {
          letterSpacing: "0.4em"
        }, children: "A Sanctuary Above Lomé" }),
        /* @__PURE__ */ jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 1,
          delay: 0.9
        }, className: "mt-12 flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/reservations", className: "btn-gold", children: [
            "Reserve a Table ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/experience", className: "btn-ghost-gold", children: "Discover the Experience" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "w-px h-12 bg-gradient-to-b from-transparent to-gold/60" }),
        /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-gold scroll-dot" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "border-y border-gold/15 py-12", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-y-8 divide-y md:divide-y-0 md:divide-x divide-gold/20", children: ["HANDBLOWN GLASS COCKTAILS", "SCULPTURAL LOW FURNITURE", "LOMÉ FROM 30 FLOORS UP"].map((t) => /* @__PURE__ */ jsx("div", { className: "text-center px-6 py-4 md:py-2 font-sans text-xs uppercase text-marble/80", style: {
      letterSpacing: "0.3em"
    }, children: t }, t)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-32 px-6 lg:px-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "Three Pillars" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-serif italic text-5xl md:text-6xl text-marble", children: "The Signature Experience" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
        title: "The View",
        body: "Floor-to-ceiling windows. The city as canvas.",
        img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80"
      }, {
        title: "The Cocktails",
        body: "House creations in hand-blown glasses, curated by our mixologist.",
        img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80"
      }, {
        title: "The Service",
        body: "Invisible yet present. Refined service, no interruption.",
        img: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80"
      }].map((c, i) => /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 40
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        margin: "-80px"
      }, transition: {
        duration: 0.7,
        delay: i * 0.15
      }, className: "glass border-t-2 border-copper hover:border-gold transition-all duration-500 group", children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/5] overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: c.img, alt: c.title, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", loading: "lazy" }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif italic text-3xl text-gold", children: c.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-marble/70 font-body leading-relaxed", children: c.body })
        ] })
      ] }, c.title)) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-32 px-6 lg:px-12 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-5", style: {
        backgroundImage: "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80)",
        backgroundSize: "cover"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-5xl grid md:grid-cols-2 gap-16", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(SectionEyebrow, { children: "Hours" }),
          /* @__PURE__ */ jsx("h3", { className: "mt-4 font-serif italic text-4xl text-marble", children: "When We Open" }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 h-px w-16 bg-gold" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-3 font-body text-marble/80", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b border-slate/40 pb-3", children: [
              /* @__PURE__ */ jsx("span", { children: "Tuesday — Sunday" }),
              /* @__PURE__ */ jsx("span", { className: "text-gold", children: "18:00 — 02:00" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between border-b border-slate/40 pb-3", children: [
              /* @__PURE__ */ jsx("span", { children: "Monday" }),
              /* @__PURE__ */ jsx("span", { className: "text-marble/40", children: "Closed" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(SectionEyebrow, { children: "Booking" }),
          /* @__PURE__ */ jsx("h3", { className: "mt-4 font-serif italic text-4xl text-marble", children: "Reserve Your Evening" }),
          /* @__PURE__ */ jsx("div", { className: "mt-8 h-px w-16 bg-gold" }),
          /* @__PURE__ */ jsx("p", { className: "mt-8 text-marble/70 leading-relaxed", children: "Tables are limited by design. To guarantee the experience above Lomé, we recommend reserving in advance." }),
          /* @__PURE__ */ jsxs(Link, { to: "/reservations", className: "btn-gold mt-8", children: [
            "Reserve Now ",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(TestimonialCarousel, {}),
    /* @__PURE__ */ jsx("section", { className: "py-32 px-6 lg:px-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl text-center", children: [
      /* @__PURE__ */ jsx(SectionEyebrow, { children: "Location" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-serif italic text-5xl text-marble", children: "Find Us Above the City" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 border border-gold/30", children: /* @__PURE__ */ jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7!2d1.2228!3d6.1725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnMjEuMCJOIDHCsDEzJzIyLjEiRQ!5e0!3m2!1sen!2sus!4v1700000000000", width: "100%", height: "400", style: {
        border: 0,
        filter: "invert(90%) hue-rotate(180deg)"
      }, loading: "lazy", title: "Lomé Map" }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-center gap-3 font-sans text-sm text-marble/70", children: [
        /* @__PURE__ */ jsx(MapPin, { size: 16, className: "text-gold" }),
        " ",
        SITE.address
      ] })
    ] }) })
  ] });
}
function TestimonialCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6e3);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsx("section", { className: "py-32 px-6 lg:px-12 border-y border-slate/30", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center min-h-[280px] flex flex-col items-center justify-center relative", children: [
    /* @__PURE__ */ jsx("div", { className: "font-serif text-gold text-8xl leading-none", children: "“" }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(motion.blockquote, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, exit: {
      opacity: 0,
      y: -20
    }, transition: {
      duration: 0.6
    }, className: "font-serif italic text-2xl md:text-3xl text-marble leading-relaxed", children: [
      TESTIMONIALS[i].quote,
      /* @__PURE__ */ jsxs("footer", { className: "mt-8 font-sans text-xs uppercase tracking-[0.3em] text-gold not-italic", children: [
        "— ",
        TESTIMONIALS[i].author
      ] })
    ] }, i) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 flex gap-2", children: TESTIMONIALS.map((_, k) => /* @__PURE__ */ jsx("button", { onClick: () => setI(k), className: `h-px w-8 transition-all ${k === i ? "bg-gold" : "bg-slate"}`, "aria-label": `Quote ${k + 1}` }, k)) })
  ] }) });
}
export {
  Home as component
};
