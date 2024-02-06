import { z } from 'zod'

import { rateSchema } from './rateRadioGroup.validation.ts'

export type FormValues = z.infer<typeof rateSchema>
