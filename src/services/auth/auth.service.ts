import { baseApi } from '../base.service.ts'

import { CreateUser } from './auth.types.ts'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation<void, CreateUser>({
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/sign-up',
      }),
    }),
  }),
})

export const { useSignUpMutation } = authService
