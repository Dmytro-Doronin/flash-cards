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
  isEmailVerified: boolean
  name: string
  created: string
  updated: string
}

export type RecoverPasswordType = {
  html?: string
  email: string
  subject?: string
}

export type NewPasswordType = {
  hash?: string
  password: string
}

export type DataFromLoginType = {
  accessToken: string
}
