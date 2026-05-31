import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle, ArrowRight } from "lucide-react";
import { P as PageTransition, S as SectionEyebrow } from "./PageTransition-jW4nmHoJ.js";
import { S as SITE } from "./penthouse-C0IPQeh4.js";
const TIMES = ["18:00", "19:00", "20:00", "21:00", "22:00"];
const OCCASIONS = ["None", "Birthday", "Anniversary", "Business", "Other"];
function Reservations() {
  const [form, setForm] = useState({
    name: "",
    phone: "+228 ",
    date: "",
    time: "20:00",
    guests: "2",
    occasion: "None",
    requests: ""
  });
  const [sent, setSent] = useState(false);
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  function send() {
    if (!form.name || !form.date) return;
    const msg = `RESERVATION REQUEST — THE PENTHOUSE

Name: ${form.name}
Date: ${form.date}
Time: ${form.time}
Guests: ${form.guests}
Occasion: ${form.occasion}
Requests: ${form.requests || "None"}
Phone: ${form.phone}`;
    try {
      const arr = JSON.parse(localStorage.getItem("penthouse-reservations") || "[]");
      arr.unshift({
        ...form,
        id: crypto.randomUUID(),
        status: "pending",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
      localStorage.setItem("penthouse-reservations", JSON.stringify(arr));
    } catch {
    }
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  }
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxs("section", { className: "pt-36 pb-12 px-6 lg:px-12 text-center", children: [
      /* @__PURE__ */ jsx(SectionEyebrow, { children: "Booking" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-serif italic text-5xl md:text-7xl text-marble", children: [
        "Reserve Your ",
        /* @__PURE__ */ jsx("span", { className: "text-gold", children: "Evening" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl mx-auto text-marble/70 font-body", children: "Tables are limited by design. Book ahead to secure your seat above Lomé." })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-6 lg:px-12 pb-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-2xl glass border border-gold/20 p-8 md:p-12", children: sent ? /* @__PURE__ */ jsxs(motion.div, { initial: {
      opacity: 0,
      scale: 0.9
    }, animate: {
      opacity: 1,
      scale: 1
    }, className: "text-center py-12", children: [
      /* @__PURE__ */ jsx(motion.div, { initial: {
        scale: 0
      }, animate: {
        scale: 1
      }, transition: {
        delay: 0.2,
        type: "spring"
      }, children: /* @__PURE__ */ jsx(CheckCircle, { size: 64, className: "text-gold mx-auto" }) }),
      /* @__PURE__ */ jsx("h3", { className: "mt-6 font-serif italic text-3xl text-marble", children: "Your request has been sent." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-marble/70 font-body", children: "We'll confirm within 2 hours." }),
      /* @__PURE__ */ jsx("button", { className: "btn-ghost-gold mt-8", onClick: () => setSent(false), children: "New Reservation" })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsx(Field, { label: "Full Name", children: /* @__PURE__ */ jsx("input", { className: "field", value: form.name, onChange: (e) => setForm({
        ...form,
        name: e.target.value
      }) }) }),
      /* @__PURE__ */ jsx(Field, { label: "Phone Number", children: /* @__PURE__ */ jsx("input", { className: "field", value: form.phone, onChange: (e) => setForm({
        ...form,
        phone: e.target.value
      }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsx(Field, { label: "Date", children: /* @__PURE__ */ jsx("input", { type: "date", min: today, className: "field", value: form.date, onChange: (e) => setForm({
          ...form,
          date: e.target.value
        }) }) }),
        /* @__PURE__ */ jsx(Field, { label: "Time", children: /* @__PURE__ */ jsx("select", { className: "field", value: form.time, onChange: (e) => setForm({
          ...form,
          time: e.target.value
        }), children: TIMES.map((t) => /* @__PURE__ */ jsx("option", { value: t, className: "bg-glass", children: t }, t)) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsx(Field, { label: "Guests", children: /* @__PURE__ */ jsxs("select", { className: "field", value: form.guests, onChange: (e) => setForm({
          ...form,
          guests: e.target.value
        }), children: [
          Array.from({
            length: 10
          }, (_, i) => i + 1).map((n) => /* @__PURE__ */ jsx("option", { value: String(n), className: "bg-glass", children: n }, n)),
          /* @__PURE__ */ jsx("option", { value: "10+", className: "bg-glass", children: "10+" })
        ] }) }),
        /* @__PURE__ */ jsx(Field, { label: "Occasion", children: /* @__PURE__ */ jsx("select", { className: "field", value: form.occasion, onChange: (e) => setForm({
          ...form,
          occasion: e.target.value
        }), children: OCCASIONS.map((o) => /* @__PURE__ */ jsx("option", { value: o, className: "bg-glass", children: o }, o)) }) })
      ] }),
      /* @__PURE__ */ jsx(Field, { label: "Special Requests", children: /* @__PURE__ */ jsx("textarea", { rows: 3, className: "field resize-none", value: form.requests, onChange: (e) => setForm({
        ...form,
        requests: e.target.value
      }) }) }),
      /* @__PURE__ */ jsxs("button", { onClick: send, className: "btn-gold w-full", children: [
        "Send via WhatsApp ",
        /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs font-sans text-marble/50 leading-relaxed", children: "Reservations are held for 15 minutes. Dress code: smart casual or above. No walk-ins guaranteed after 21:00." })
    ] }) }) })
  ] });
}
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsx("span", { className: "label-eyebrow", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-1", children })
  ] });
}
export {
  Reservations as component
};
