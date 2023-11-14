import { z } from 'zod'

export const registrationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
  password2: z.string().min(5),
})
