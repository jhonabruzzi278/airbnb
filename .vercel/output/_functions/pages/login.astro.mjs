import { c as createComponent, a as createAstro, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from "../chunks/astro/server_DFM0Vk-K.mjs";
import "kleur/colors";
import { a as $$InternalUIComponentRenderer, $ as $$DefaultLayout } from "../chunks/DefaultLayout_BJAp9j5Q.mjs";
import { renderers } from "../renderers.mjs";
const $$Astro = createAstro();
const $$SignIn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SignIn;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "sign-in" })}`;
}, "C:/TRABAJOS/rentas/airbnb/node_modules/@clerk/astro/components/interactive/SignIn.astro", void 0);
const prerender = false;
const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Sign In - Your Account" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4"> <div class="max-w-md w-full"> <!-- Header --> <div class="text-center mb-8"> <h1 class="text-3xl font-bold text-gray-900">Welcome back</h1> <p class="mt-2 text-gray-600">Sign in to your account</p> </div> <!-- Sign In Form --> <div class="bg-white py-8 px-6 shadow-lg rounded-lg border border-gray-100"> ${renderComponent($$result2, "SignIn", $$SignIn, { "path": "/login" })} </div> <!-- Footer Links --> <div class="mt-6 text-center"> <p class="text-sm text-gray-600">
Don't have an account?
<a href="/register" class="text-pink-600 hover:text-pink-500 font-medium transition-colors">
Sign up here
</a> </p> <div class="mt-4"> <a href="/" class="text-sm text-gray-500 hover:text-gray-700 transition-colors">
← Back to home
</a> </div> </div> </div> </div> ` })}`;
}, "C:/TRABAJOS/rentas/airbnb/src/pages/login.astro", void 0);
const $$file = "C:/TRABAJOS/rentas/airbnb/src/pages/login.astro";
const $$url = "/login";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
