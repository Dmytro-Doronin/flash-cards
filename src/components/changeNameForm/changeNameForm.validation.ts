import { z } from 'zod'

export const changeNameFormSchema = z.object({
  name: z.string().min(3).max(30),
})
