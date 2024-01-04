import { ErrorUtils } from '../../utils/ErrorUtils.ts'
import { baseApi } from '../base.service.ts'

import { CreateUser, DataFromLoginType, LoginType, NewPasswordType, RecoverPasswordType, User } from "./auth.types.ts";

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation<void, CreateUser>({
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/sign-up',
      }),
    }),
    login: builder.mutation<DataFromLoginType, LoginType>({
      invalidatesTags: ['me'],
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/login',
      }),
      transformErrorResponse: response => ErrorUtils(response),
    }),
    me: builder.query<User, void>({
      providesTags: ['me'],
      query: () => '/v1/auth/me',
    }),
    logOut: builder.mutation<void, void>({
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/logout',
      }),
      transformErrorResponse: response => ErrorUtils(response),
    }),
    recoverPassword: builder.mutation<void, RecoverPasswordType>({
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/recover-password',
      }),
    }),
    newPassword: builder.mutation<void, NewPasswordType>({
      query: body => ({
        body: { password: body.password },
        method: 'POST',
        url: `/v1/auth/reset-password/${body.hash}`,
      }),
    }),
  }),
})

export const {
  useSignUpMutation,
  useLoginMutation,
  useMeQuery,
  useLogOutMutation,
  useRecoverPasswordMutation,
  useNewPasswordMutation,
} = authService
