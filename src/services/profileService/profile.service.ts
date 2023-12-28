import { baseApi } from '../base.service.ts'

// import { profileType } from './profileService.types.ts'

export const profileService = baseApi.injectEndpoints({
  endpoints: builder => ({
    avatarUpdate: builder.mutation<any, FormData>({
      query: body => ({
        body,
        method: 'PATCH',
        url: '/v1/auth/me',
        formData: true,
      }),
      invalidatesTags: ['me'],
    }),
    changeName: builder.mutation<any, FormData>({
      query: body => ({
        body,
        method: 'PATCH',
        url: '/v1/auth/me',
        formData: true,
      }),
      invalidatesTags: ['me'],
    }),
  }),
})

export const { useAvatarUpdateMutation, useChangeNameMutation } = profileService
