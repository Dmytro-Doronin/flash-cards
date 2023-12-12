import { baseApi } from '../base.service.ts'

import { CreateUser, LoginType } from './auth.types.ts'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation<void, CreateUser>({
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/sign-up',
      }),
    }),
    login: builder.mutation<void, LoginType>({
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/login',
      }),
    }),
  }),
})

export const { useSignUpMutation, useLoginMutation } = authService
