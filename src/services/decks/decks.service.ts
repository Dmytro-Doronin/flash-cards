import { baseApi } from '../base.service.ts'

import { DecksResponseType, GetDecksArgs } from './decks.types.ts'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDeck: builder.query<DecksResponseType, GetDecksArgs | void>({
      query: args => {
        return {
          url: 'v2/decks',
          params: args ?? {},
        }
      },
    }),
    getMaxAndMinDeck: builder.query<{ min: number; max: number }, void>({
      query: () => {
        return {
          url: 'v2/decks/min-max-cards',
        }
      },
    }),
  }),
})

export const { useGetDeckQuery, useGetMaxAndMinDeckQuery } = decksService
