export type CreateUser = {
  html?: string
  name?: string
  password: string
  email: string
  subject?: string
  sendConfirmationEmail?: boolean
}

export type LoginType = {
  email: string
  password: string
  rememberMe: boolean
}

export type User = {
  avatar: string | null
  id: string
  email: string
  isEmailVerified: true
  name: string
  created: string
  updated: string
}
