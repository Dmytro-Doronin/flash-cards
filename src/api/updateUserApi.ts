import { profileType } from '../services/profile/profileService.types.ts'

import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { MutationDefinition } from '@reduxjs/toolkit/query'

type UpdateUserApiType = profileType & {
  callback: MutationTrigger<
    MutationDefinition<
      profileType,
      BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
      'me',
      void,
      'baseApi'
    >
  >
}

export const updateUserApi = async ({ name, avatar, email, callback }: UpdateUserApiType) => {
  try {
    await callback({ name, avatar, email })
  } catch (e) {
    console.log(e)
  }
}
