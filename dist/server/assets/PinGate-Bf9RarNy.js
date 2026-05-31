import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
function PinGate({ pin, title, children }) {
  const [entered, setEntered] = useState("");
  const [ok, setOk] = useState(false);
  const [shake, setShake] = useState(false);
  if (ok) return /* @__PURE__ */ jsx(Fragment, { children });
  function press(d) {
    if (entered.length >= 4) return;
    const next = entered + d;
    setEntered(next);
    if (next.length === 4) {
      setTimeout(() => {
        if (next === pin) setOk(true);
        else {
          setShake(true);
          setTimeout(() => {
            setEntered("");
            setShake(false);
          }, 500);
        }
      }, 150);
    }
  }
  function back() {
    setEntered((e) => e.slice(0, -1));
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-obsidian flex flex-col items-center justify-center px-6", children: [
    /* @__PURE__ */ jsx("div", { className: "font-serif text-gold text-2xl tracking-[0.3em] mb-2", children: "THE PENTHOUSE" }),
    /* @__PURE__ */ jsx("div", { className: "label-eyebrow mb-12", children: title }),
    /* @__PURE__ */ jsx(motion.div, { animate: shake ? { x: [-8, 8, -8, 8, 0] } : {}, transition: { duration: 0.4 }, className: "flex gap-3 mb-12", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsx("div", { className: `w-4 h-4 rounded-full border ${entered.length > i ? "bg-gold border-gold" : "border-slate"}` }, i)) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3 w-72", children: [
      ["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((d) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => press(d),
          className: "aspect-square text-2xl font-serif text-marble border border-slate hover:border-gold hover:text-gold transition",
          children: d
        },
        d
      )),
      /* @__PURE__ */ jsx("button", { onClick: back, className: "aspect-square font-sans text-xs uppercase tracking-widest text-marble/60 hover:text-gold transition", children: "Del" }),
      /* @__PURE__ */ jsx("button", { onClick: () => press("0"), className: "aspect-square text-2xl font-serif text-marble border border-slate hover:border-gold hover:text-gold transition", children: "0" }),
      /* @__PURE__ */ jsx("div", {})
    ] })
  ] });
}
export {
  PinGate as P
};
