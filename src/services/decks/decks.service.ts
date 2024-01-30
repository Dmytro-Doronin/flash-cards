// import { ConfirmType } from '../../components/deckModals/addDeckModal/DeckModal.tsx'

import { ErrorUtils } from '../../utils/ErrorUtils.ts'
import { baseApi } from '../base.service.ts'

import { CardResponseType, DecksResponseType, GetCardsArgs, GetDecksArgs } from './decks.types.ts'

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDeck: builder.query<DecksResponseType, GetDecksArgs | void>({
      query: args => {
        return {
          url: 'v2/decks',
          params: args ?? {},
        }
      },
      providesTags: ['Decks'],
    }),
    getMaxAndMinDeck: builder.query<{ min: number; max: number }, void>({
      query: () => {
        return {
          url: 'v2/decks/min-max-cards',
        }
      },
    }),
    addNewDeck: builder.mutation<void, FormData>({
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/decks',
        formData: true,
      }),
      transformErrorResponse: response => ErrorUtils(response),
      invalidatesTags: ['Decks'],
    }),
    deleteDeck: builder.mutation<void, { id: string }>({
      query: ({ id }) => ({
        method: 'DELETE',
        url: `/v1/decks/${id}`,
        formData: true,
      }),
      transformErrorResponse: response => ErrorUtils(response),
      invalidatesTags: ['Decks'],
    }),
    editDeck: builder.mutation<void, { id: string; FormData: FormData }>({
      query: data => ({
        body: data.FormData,
        method: 'PATCH',
        url: `/v1/decks/${data.id}`,
        formData: true,
      }),
      transformErrorResponse: response => ErrorUtils(response),
      invalidatesTags: ['Decks'],
    }),
    getAllCards: builder.query<CardResponseType, { id: string; params: GetCardsArgs | void }>({
      query: args => {
        return {
          url: `/v1/decks/${args.id}`,
          params: args.params ?? {},
        }
      },
      providesTags: ['Decks'],
    }),
  }),
})

export const {
  useGetDeckQuery,
  useGetMaxAndMinDeckQuery,
  useAddNewDeckMutation,
  useDeleteDeckMutation,
  useEditDeckMutation,
  useGetAllCardsQuery,
} = decksService
