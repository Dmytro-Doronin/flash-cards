import { baseApi } from '../base.service.ts'

import { profileType } from './profileService.types.ts'

export const profileService = baseApi.injectEndpoints({
  endpoints: builder => ({
    userUpdate: builder.mutation<void, void>({
      invalidatesTags: ['me'],
      query: body => ({
        body,
        method: 'PATCH',
        url: '/v1/auth/me',
        headers: {
          'Content-Type': 'multipart/form-data;',
        },
        formData: true,
      }),
    }),
  }),
})

export const { useUserUpdateMutation } = profileService
