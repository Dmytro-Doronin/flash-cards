import { z } from 'zod'

export const rateSchema = z.object({
  rate: z.string(),
})
