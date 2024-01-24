import { baseApi } from '../base.service.ts'

import { DecksResponseType, GetDecksArgs } from './decks.types.ts'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDeck: builder.query<DecksResponseType, GetDecksArgs | void>({
      query: args => {
        return {
          url: 'v1/decks',
          params: args ?? {},
        }
      },
    }),
  }),
})

export const { useGetDeckQuery } = decksService
