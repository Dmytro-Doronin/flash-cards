import { z } from 'zod'

import { changeNameFormSchema } from './changeNameForm.validation.ts'

export type FormValues = z.infer<typeof changeNameFormSchema>
