import { z, defineCollection } from "astro:content"

const blogCollection = defineCollection({
        type: "content",
        schema: z.object({
  draft: z.boolean(),
  title: z.string().max(70),
  snippet: z.string().max(140),
  publishDate: z.string().transform((str) => new Date(str)),
  image: z.object({
    src: z.string().url(),
    alt: z.string(),
    width: z.any().optional(),
    height: z.any().optional(),
  }),
  category: z.any().optional(),
  author: z.string(),
  tags: z.array(z.string()).optional(),
})
      })
const formsCollection = defineCollection({
        type: "data",
        schema: z.object({
  jsonSchema: z.any().optional(),
  uiSchema: z.any().optional(),
  formData: z.any().optional(),
  alerts: z.any().optional(),
})
      })

export const collections = {
  'blog': blogCollection,
'forms': formsCollection
}