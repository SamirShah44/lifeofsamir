import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Long-form writeups for each shipped product.
const cases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cases' }),
  schema: z.object({
    title: z.string(),
    caseId: z.string(),                                  // e.g. "CASE-001"
    tagline: z.string(),
    summary: z.string(),
    status: z.enum(['live', 'dev', 'soon']).default('dev'),
    stack: z.array(z.string()).default([]),
    links: z.array(z.object({ label: z.string(), url: z.string() })).default([]),
    order: z.number().default(99),
    draft: z.boolean().default(false),
  }),
});

// OpenGL / C++ tutorials and devlogs.
const tutorials = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tutorials' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    number: z.number(),                                  // 1, 2, 3...
    kind: z.enum(['video', 'article']).default('article'),
    duration: z.string().optional(),                     // "12:45" or "5 min read"
    youtube: z.string().optional(),                      // video ID only
    topics: z.array(z.string()).default([]),
    published: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { cases, tutorials };
