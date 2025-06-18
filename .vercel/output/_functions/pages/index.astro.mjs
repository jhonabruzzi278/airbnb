import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, r as renderTemplate, e as renderComponent } from "../chunks/astro/server_DFM0Vk-K.mjs";
import "kleur/colors";
import { $ as $$DefaultLayout } from "../chunks/DefaultLayout_BJAp9j5Q.mjs";
import { $ as $$Hero } from "../chunks/Hero_Burgx2dU.mjs";
import "clsx";
import { $ as $$ListingCard } from "../chunks/ListingCard_CzaDEJ0a.mjs";
import { g as getCollection } from "../chunks/_astro_content_CBbM8Xgr.mjs";
/* empty css                                 */
import { renderers } from "../renderers.mjs";
const $$Astro$1 = createAstro();
const $$FeatureCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FeatureCard;
  const { title, description, iconSvg, bgColor, iconColor } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-center group"> <div${addAttribute(`${bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`, "class")}> <div${addAttribute(`w-10 h-10 ${iconColor}`, "class")}>${unescapeHTML(iconSvg)}</div> </div> <h3 class="text-xl lg:text-2xl font-semibold text-gray-900 mb-4">${title}</h3> <p class="text-gray-600 leading-relaxed">${description}</p> </div>`;
}, "C:/TRABAJOS/rentas/airbnb/src/components/FeatureCard.astro", void 0);
const $$Astro = createAstro();
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const { title, subtitle, centered = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mb-12 lg:mb-16 ${centered ? "text-center" : ""}`, "class")}> <h2 class="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6"> ${title} </h2> ${subtitle && renderTemplate`<p class="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"> ${subtitle} </p>`} </div>`;
}, "C:/TRABAJOS/rentas/airbnb/src/components/SectionHeader.astro", void 0);
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const rentals = await getCollection("rentals");
  const featuredRentals = rentals.slice(0, 8);
  const checkIcon = `<svg class="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>`;
  const clockIcon = `<svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>`;
  const lockIcon = `<svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
</svg>`;
  return renderTemplate`${renderComponent($$result, "DefaultLayout", $$DefaultLayout, { "title": "Rentas - Your Perfect Stay & Ride Awaits", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })}  ${maybeRenderHead()}<section class="py-12 lg:py-20 bg-gray-50" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Featured Properties", "subtitle": "Handpicked selection of our best properties to inspire your next getaway", "data-astro-cid-j7pv25f6": true })} <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-6 lg:gap-8" data-astro-cid-j7pv25f6> ${featuredRentals.map((rental) => renderTemplate`<div class="group" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "ListingCard", $$ListingCard, { "price": rental.data.price_per_night.toString(), "image": rental.data.main_image, "location": rental.data.location, "slug": rental.slug, "data-astro-cid-j7pv25f6": true })} </div>`)} </div> <div class="text-center mt-10 lg:mt-12" data-astro-cid-j7pv25f6> <a href="/listing" class="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>View All Properties</span> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-j7pv25f6> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-j7pv25f6></path> </svg> </a> </div> </div> </section>  <section class="py-12 lg:py-20 bg-white" data-astro-cid-j7pv25f6> <div class="max-w-7xl mx-auto px-4" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "SectionHeader", $$SectionHeader, { "title": "Why Choose Rentas?", "subtitle": "We make finding and booking your perfect stay or ride simple, secure, and enjoyable", "data-astro-cid-j7pv25f6": true })} <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "title": "Verified Quality", "description": "All properties and vehicles are carefully inspected and verified for quality and safety standards.", "iconSvg": checkIcon, "bgColor": "bg-pink-100", "iconColor": "text-pink-600", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "title": "24/7 Support", "description": "Get help whenever you need it with our round-the-clock customer support team.", "iconSvg": clockIcon, "bgColor": "bg-blue-100", "iconColor": "text-blue-600", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "FeatureCard", $$FeatureCard, { "title": "Secure Booking", "description": "Your payments and personal information are always protected with bank-level security.", "iconSvg": lockIcon, "bgColor": "bg-green-100", "iconColor": "text-green-600", "data-astro-cid-j7pv25f6": true })} </div> </div> </section>  <section class="py-16 lg:py-24 relative overflow-hidden" data-astro-cid-j7pv25f6> <!-- Background Image with Overlay --> <div class="absolute inset-0" data-astro-cid-j7pv25f6> <img src="/home-footer.webp" alt="Background" class="w-full h-full object-cover" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-black/60" data-astro-cid-j7pv25f6></div> </div> <!-- Content --> <div class="relative z-10 max-w-4xl mx-auto px-4 text-center" data-astro-cid-j7pv25f6> <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6" data-astro-cid-j7pv25f6>Ready to Start Your Journey?</h2> <p class="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-astro-cid-j7pv25f6>
Join thousands of satisfied customers who have found their perfect stays and rides with us.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-j7pv25f6> <a href="/listing" class="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105" data-astro-cid-j7pv25f6>
Find Your Stay
</a> <a href="/cars" class="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105" data-astro-cid-j7pv25f6>
Rent Your Ride
</a> </div> </div> </section> ` })} `;
}, "C:/TRABAJOS/rentas/airbnb/src/pages/index.astro", void 0);
const $$file = "C:/TRABAJOS/rentas/airbnb/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
