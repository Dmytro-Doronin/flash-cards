import {z} from 'zod'

import { createNewPasswordSchema } from './createNewPassword.validation.ts'

export type CreateNewPasswordFormValues = z.infer<typeof createNewPasswordSchema>
