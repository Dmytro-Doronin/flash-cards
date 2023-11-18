import { z } from 'zod'

import { recoverSchema } from './recoverForm.validation.ts'

export type RecoverFormValues = z.infer<typeof recoverSchema>
