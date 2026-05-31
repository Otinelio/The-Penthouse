import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
const appCss = "/assets/styles-DoYFatzV.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0A0A0F" },
      { title: "THE PENTHOUSE — Rooftop Lounge in Lomé, Togo" },
      { name: "description", content: "Above the city. Beyond the ordinary. An exclusive rooftop lounge & cocktail bar in Lomé, Togo." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "THE PENTHOUSE" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Inter:wght@300;400;500&family=Jost:wght@300;400;500&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "fr", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { className: "bg-obsidian text-marble", children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$9 = () => import("./reception-Cf4DIaRE.js");
const Route$9 = createFileRoute("/reception")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./admin-8lB8aL29.js");
const Route$8 = createFileRoute("/admin")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./_public-CWTUzEwP.js");
const Route$7 = createFileRoute("/_public")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./_public.index-BuvX9qCM.js");
const Route$6 = createFileRoute("/_public/")({
  head: () => ({
    meta: [{
      title: "THE PENTHOUSE — Rooftop Lounge in Lomé, Togo"
    }, {
      name: "description",
      content: "A sanctuary above Lomé. Signature cocktails, refined tapas, and the city as your canvas."
    }, {
      property: "og:title",
      content: "THE PENTHOUSE — Above the city. Beyond the ordinary."
    }, {
      property: "og:description",
      content: "Exclusive rooftop lounge & cocktail bar in Lomé, Togo."
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./table._tableId-D4cbdrcy.js");
const Route$5 = createFileRoute("/table/$tableId")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./_public.reservations-DtriNaGA.js");
const Route$4 = createFileRoute("/_public/reservations")({
  head: () => ({
    meta: [{
      title: "Reservations — THE PENTHOUSE"
    }, {
      name: "description",
      content: "Reserve your evening above Lomé. Tables limited by design."
    }],
    links: [{
      rel: "canonical",
      href: "/reservations"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./_public.menu-CroCtoeM.js");
const Route$3 = createFileRoute("/_public/menu")({
  head: () => ({
    meta: [{
      title: "Menu — THE PENTHOUSE"
    }, {
      name: "description",
      content: "Signature cocktails crafted in-house. Refined tapas from local & global inspiration."
    }],
    links: [{
      rel: "canonical",
      href: "/menu"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./_public.gallery-BZiUgnSg.js");
const Route$2 = createFileRoute("/_public/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — THE PENTHOUSE"
    }, {
      name: "description",
      content: "The Penthouse through the lens. Interiors, cocktails, and the Lomé skyline."
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./_public.experience-Cy8A8PMd.js");
const Route$1 = createFileRoute("/_public/experience")({
  head: () => ({
    meta: [{
      title: "The Experience — THE PENTHOUSE"
    }, {
      name: "description",
      content: "A ritual above Lomé. Minimal luxury, Togolese soul, suspended above the city."
    }],
    links: [{
      rel: "canonical",
      href: "/experience"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./_public.contact-CXm_h7-h.js");
const Route = createFileRoute("/_public/contact")({
  head: () => ({
    meta: [{
      title: "Contact — THE PENTHOUSE"
    }, {
      name: "description",
      content: "Reach The Penthouse for reservations, private events, press, and partnerships."
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ReceptionRoute = Route$9.update({
  id: "/reception",
  path: "/reception",
  getParentRoute: () => Route$a
});
const AdminRoute = Route$8.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$a
});
const PublicRoute = Route$7.update({
  id: "/_public",
  getParentRoute: () => Route$a
});
const PublicIndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => PublicRoute
});
const TableTableIdRoute = Route$5.update({
  id: "/table/$tableId",
  path: "/table/$tableId",
  getParentRoute: () => Route$a
});
const PublicReservationsRoute = Route$4.update({
  id: "/reservations",
  path: "/reservations",
  getParentRoute: () => PublicRoute
});
const PublicMenuRoute = Route$3.update({
  id: "/menu",
  path: "/menu",
  getParentRoute: () => PublicRoute
});
const PublicGalleryRoute = Route$2.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => PublicRoute
});
const PublicExperienceRoute = Route$1.update({
  id: "/experience",
  path: "/experience",
  getParentRoute: () => PublicRoute
});
const PublicContactRoute = Route.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => PublicRoute
});
const PublicRouteChildren = {
  PublicContactRoute,
  PublicExperienceRoute,
  PublicGalleryRoute,
  PublicMenuRoute,
  PublicReservationsRoute,
  PublicIndexRoute
};
const PublicRouteWithChildren = PublicRoute._addFileChildren(PublicRouteChildren);
const rootRouteChildren = {
  PublicRoute: PublicRouteWithChildren,
  AdminRoute,
  ReceptionRoute,
  TableTableIdRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$5 as R,
  router as r
};
