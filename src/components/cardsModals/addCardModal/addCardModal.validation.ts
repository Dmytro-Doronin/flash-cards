import { z } from 'zod'

export const addCardModalSchema = z.object({
  question: z.string().min(3).max(300),
  answer: z.string().min(3).max(300),
})
