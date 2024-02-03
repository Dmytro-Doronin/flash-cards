import { z } from 'zod'


import { addCardModalSchema } from "./addCardModal.validation.ts";

export type AddCardModalFormValues = z.infer<typeof addCardModalSchema>
