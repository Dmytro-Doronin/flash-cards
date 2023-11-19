import { z } from 'zod'

export const createNewPasswordSchema = z.object({
  createNewPassword: z.string().min(3),
})
