import { baseApi } from '../base.service.ts'

import { CreateUser, LoginType, User } from './auth.types.ts'

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
      invalidatesTags: ['me'],
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/login',
      }),
    }),
    me: builder.query<User, void>({
      providesTags: ['me'],
      query: () => '/v1/auth/me',
    }),
  }),
})

export const { useSignUpMutation, useLoginMutation, useMeQuery } = authService
