import { renderers } from "./renderers.mjs";
import { c as createExports } from "./chunks/entrypoint_xQvDO3fV.mjs";
import { manifest } from "./manifest_399cPW6H.mjs";
const serverIslandMap = /* @__PURE__ */ new Map();
;
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/cars/category/_category_.astro.mjs");
const _page2 = () => import("./pages/cars/_slug_.astro.mjs");
const _page3 = () => import("./pages/cars.astro.mjs");
const _page4 = () => import("./pages/categories/_category_.astro.mjs");
const _page5 = () => import("./pages/contact.astro.mjs");
const _page6 = () => import("./pages/listing/_slug_.astro.mjs");
const _page7 = () => import("./pages/listing.astro.mjs");
const _page8 = () => import("./pages/login.astro.mjs");
const _page9 = () => import("./pages/profile.astro.mjs");
const _page10 = () => import("./pages/index.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/cars/category/[category].astro", _page1],
  ["src/pages/cars/[slug].astro", _page2],
  ["src/pages/cars/index.astro", _page3],
  ["src/pages/categories/[category].astro", _page4],
  ["src/pages/contact.astro", _page5],
  ["src/pages/listing/[slug].astro", _page6],
  ["src/pages/listing/index.astro", _page7],
  ["src/pages/login.astro", _page8],
  ["src/pages/profile.astro", _page9],
  ["src/pages/index.astro", _page10]
]);
const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  actions: () => import("./_noop-actions.mjs"),
  middleware: () => import("./_astro-internal_middleware.mjs")
});
const _args = {
  "middlewareSecret": "dbb4d4c4-bf71-42d0-812c-b7b9c279352a",
  "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
