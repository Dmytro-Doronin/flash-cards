import { z } from 'zod'

import { registrationSchema } from './registrationForm.validation.ts'

export type RegistrationFormValues = z.infer<typeof registrationSchema>
