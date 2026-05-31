import { jsx } from "react/jsx-runtime";
import { motion } from "motion/react";
function PageTransition({ children }) {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -12 },
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      children
    }
  );
}
function GoldDust({ count = 8 }) {
  return /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: Array.from({ length: count }).map((_, i) => /* @__PURE__ */ jsx(
    "span",
    {
      className: "gold-dust",
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${6 + Math.random() * 4}s`
      }
    },
    i
  )) });
}
function SectionEyebrow({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "label-eyebrow", children });
}
export {
  GoldDust as G,
  PageTransition as P,
  SectionEyebrow as S
};
