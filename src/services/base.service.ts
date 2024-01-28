import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithReauth } from './auth/baseQueryWithReauth.ts'

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes: ['me', 'Decks'],
})
