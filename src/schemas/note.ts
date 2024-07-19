import { z } from "zod"

export const noteSchema = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string(),
  description: z.string(),
  createdAt: z.string(),
})

export type Note = z.infer<typeof noteSchema>
