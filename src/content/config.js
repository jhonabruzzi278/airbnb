import { defineCollection, z } from 'astro:content';

const rentalsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    location: z.string(),
    price_per_night: z.number(),
    max_guests: z.number(),
    bedrooms: z.number(),
    bathrooms: z.number(),
    category: z.string(),
    room_type: z.string(),
    amenities: z.array(z.string()),
    main_image: z.string(),
  })
});


const carsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    model: z.string(),
    year: z.number(),
    price_per_day: z.number(),
    max_passengers: z.number(),
    transmission: z.string(), // "manual" | "automatic"
    fuel_type: z.string(), // "gasoline" | "diesel" | "electric" | "hybrid"
    category: z.string(), // "economy" | "luxury" | "suv" | "sports" | "electric"
    location: z.string(),
    features: z.array(z.string()),
    main_image: z.string(),
    mileage: z.number(), // km per liter or efficiency rating
    doors: z.number(),
    available: z.boolean().default(true),
  })
});

export const collections = {
  'rentals': rentalsCollection,
  'cars': carsCollection,
};