import { defineCollection, z } from 'astro:content';

const ledger = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const recipes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    voice: z.string().default('Gorrick'),
    source: z.string().optional(),
    appears_in: z.string().optional(), // e.g. "Book 1, Chapter 3" — links the recipe to the chapter scene where the dish is served
    draft: z.boolean().default(false),
  }),
});

export const collections = { ledger, recipes };
