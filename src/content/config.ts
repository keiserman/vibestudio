import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    test: z.string(),
    image: z.string(),
  }),
});

export const collections = { projects };
