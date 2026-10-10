import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every field here mirrors public/admin/config.yml — keep the two in sync.

const news = defineCollection({
  loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    lang: z.enum(['ne', 'en']).default('ne'),
    cover: z.string().optional(),
    // Set these when the item is coverage from another outlet.
    source: z.string().optional(),
    sourceUrl: z.string().url().optional().or(z.literal('')),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const videos = defineCollection({
  loader: glob({ base: './src/content/videos', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    show: z.string().optional(),
    youtube: z.string().url(),
    date: z.coerce.date(),
    category: z.enum(['interview', 'campaign', 'documentary', 'talk']).default('interview'),
    summary: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news, videos };
