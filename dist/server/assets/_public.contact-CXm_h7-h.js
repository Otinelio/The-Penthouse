import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { MapPin, MessageCircle, Clock, Mail, ArrowRight } from "lucide-react";
import { P as PageTransition, S as SectionEyebrow } from "./PageTransition-jW4nmHoJ.js";
import { S as SITE } from "./penthouse-C0IPQeh4.js";
import "motion/react";
const SUBJECTS = ["General Inquiry", "Private Event", "Press", "Partnership", "Other"];
function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "General Inquiry",
    message: ""
  });
  function send() {
    if (!form.name || !form.message) return;
    const msg = `INQUIRY — THE PENTHOUSE
From: ${form.name}
Contact: ${form.contact}
Subject: ${form.subject}
Message: ${form.message}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank");
  }
  return /* @__PURE__ */ jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxs("section", { className: "pt-36 pb-12 px-6 lg:px-12 text-center", children: [
      /* @__PURE__ */ jsx(SectionEyebrow, { children: "Reach Us" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-serif italic text-5xl md:text-7xl text-marble", children: [
        "Get in ",
        /* @__PURE__ */ jsx("span", { className: "text-gold", children: "Touch" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "px-6 lg:px-12 pb-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl grid lg:grid-cols-2 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "Contact" }),
        /* @__PURE__ */ jsx(Info, { icon: MapPin, title: "Address", text: SITE.address }),
        /* @__PURE__ */ jsx(Info, { icon: MessageCircle, title: "WhatsApp", text: SITE.whatsappDisplay }),
        /* @__PURE__ */ jsx(Info, { icon: Clock, title: "Hours", text: `${SITE.hours} — Closed Monday` }),
        /* @__PURE__ */ jsx(Info, { icon: Mail, title: "Email", text: SITE.email }),
        /* @__PURE__ */ jsx("div", { className: "border border-gold/20 mt-12", children: /* @__PURE__ */ jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7!2d1.2228!3d6.1725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1", width: "100%", height: "280", style: {
          border: 0,
          filter: "invert(90%) hue-rotate(180deg)"
        }, loading: "lazy", title: "Map" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "glass border border-gold/20 p-8 md:p-12 space-y-8", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "Send a Message" }),
        /* @__PURE__ */ jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsx("span", { className: "label-eyebrow", children: "Name" }),
          /* @__PURE__ */ jsx("input", { className: "field mt-1", value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsx("span", { className: "label-eyebrow", children: "Email or Phone" }),
          /* @__PURE__ */ jsx("input", { className: "field mt-1", value: form.contact, onChange: (e) => setForm({
            ...form,
            contact: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsx("span", { className: "label-eyebrow", children: "Subject" }),
          /* @__PURE__ */ jsx("select", { className: "field mt-1", value: form.subject, onChange: (e) => setForm({
            ...form,
            subject: e.target.value
          }), children: SUBJECTS.map((s) => /* @__PURE__ */ jsx("option", { className: "bg-glass", children: s }, s)) })
        ] }),
        /* @__PURE__ */ jsxs("label", { className: "block", children: [
          /* @__PURE__ */ jsx("span", { className: "label-eyebrow", children: "Message" }),
          /* @__PURE__ */ jsx("textarea", { rows: 5, className: "field mt-1 resize-none", value: form.message, onChange: (e) => setForm({
            ...form,
            message: e.target.value
          }) })
        ] }),
        /* @__PURE__ */ jsxs("button", { onClick: send, className: "btn-gold w-full", children: [
          "Send Inquiry ",
          /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
        ] })
      ] })
    ] }) })
  ] });
}
function Info({
  icon: Icon,
  title,
  text
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 border-b border-slate/40 pb-6", children: [
    /* @__PURE__ */ jsx(Icon, { size: 20, className: "text-gold mt-1" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "label-eyebrow", children: title }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 font-serif text-2xl text-marble", children: text })
    ] })
  ] });
}
export {
  Contact as component
};
