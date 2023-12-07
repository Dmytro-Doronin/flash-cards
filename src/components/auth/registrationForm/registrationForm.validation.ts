import { z } from 'zod'

const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

export const registrationSchema = z.object({
  email: z
    .string()
    .email()
    .refine(data => pattern.test(data), { message: 'Invalid email format' }),
  password: z.string().min(6).max(20),
  confirmPassword: z.string().min(6).max(20),
  name: z.string().min(3).max(10),
})
export const registrationWithPasswordConfirmationSchema = registrationSchema.refine(
  data => {
    // Сравниваем значения полей password и confirmPassword
    return data.password === data.confirmPassword
  },
  {
    message: 'Passwords do not match',
  }
)
