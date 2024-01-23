import { baseApi } from '../base.service.ts'

import { DecksResponseType, GetDecksArgs } from './decks.types.ts'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDeck: builder.query<DecksResponseType, GetDecksArgs | void>({
      query: () => '/v2/decks',
    }),
  }),
})

export const { useGetDeckQuery } = decksService
