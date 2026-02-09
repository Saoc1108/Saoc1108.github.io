import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: image().optional(), 
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    pubDate: z.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  'projects': projectsCollection,
};