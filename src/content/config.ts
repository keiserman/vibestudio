import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    gallery: z.array(z.string()).optional(),
  }),
});

export const collections = { projects };
