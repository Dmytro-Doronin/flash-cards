import { z } from 'zod'

import { addDeckModalSchema } from './addDeckModal.validation.ts'

export type AddDeckModalFormValues = z.infer<typeof addDeckModalSchema>
