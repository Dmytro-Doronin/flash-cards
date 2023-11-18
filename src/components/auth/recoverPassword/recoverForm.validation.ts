import { z } from 'zod'

export const recoverSchema = z.object({
  recoverEmail: z.string().email(),
})