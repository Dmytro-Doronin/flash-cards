import { ErrorUtils } from '../../utils/ErrorUtils.ts'
import { baseApi } from '../base.service.ts'

// import { profileType } from './profile.types.ts'

export const profileService = baseApi.injectEndpoints({
  endpoints: builder => ({
    avatarUpdate: builder.mutation<any, FormData>({
      query: body => ({
        body,
        method: 'PATCH',
        url: '/v1/auth/me',
        formData: true,
      }),
      transformErrorResponse: response => ErrorUtils(response),
      invalidatesTags: ['me'],
    }),
    changeName: builder.mutation<any, FormData>({
      query: body => ({
        body,
        method: 'PATCH',
        url: '/v1/auth/me',
        formData: true,
      }),
      transformErrorResponse: response => ErrorUtils(response),
      invalidatesTags: ['me'],
    }),
  }),
})

export const { useAvatarUpdateMutation, useChangeNameMutation } = profileService
