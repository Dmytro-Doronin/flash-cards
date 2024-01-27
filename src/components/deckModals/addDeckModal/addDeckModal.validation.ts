import { z } from 'zod'

export const addDeckModalSchema = z.object({
  name: z.string().min(3).max(300),
  isPrivate: z.boolean(),
})
