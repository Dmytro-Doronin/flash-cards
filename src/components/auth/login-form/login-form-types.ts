import { z } from 'zod'

import { loginSchema } from './login-form-validation.ts'

export type FormValues = z.infer<typeof loginSchema>
