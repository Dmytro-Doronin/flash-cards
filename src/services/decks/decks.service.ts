// import { ConfirmType } from '../../components/deckModals/addDeckModal/DeckModal.tsx'

import { ErrorUtils } from '../../utils/ErrorUtils.ts'
import { baseApi } from '../base.service.ts'

import {
  Card,
  CardResponseType,
  CreateCardsType,
  DecksResponseType,
  DeckType,
  GetCardsArgs,
  GetDecksArgs, GetLearnDeckType
} from "./decks.types.ts";

export const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDeck: builder.query<DecksResponseType, GetDecksArgs | void>({
      query: args => {
        return {
          url: 'v2/decks',
          params: args ?? {},
        }
      },
      transformErrorResponse: response => ErrorUtils(response),
      providesTags: ['Decks'],
    }),
    getDeckById: builder.query<DeckType, { id: string }>({
      query: args => {
        return {
          url: `v1/decks/${args.id}`,
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
    getAllCards: builder.query<CardResponseType, { id: string; params?: GetCardsArgs | void }>({
      query: args => {
        return {
          url: `/v1/decks/${args.id}/cards`,
          params: args.params ?? {},
        }
      },
      providesTags: ['Cards'],
    }),
    addNewCard: builder.mutation<CreateCardsType, { id: string; FormData: FormData }>({
      query: body => ({
        body: body.FormData,
        method: 'POST',
        url: `/v1/decks/${body.id}/cards`,
        formData: true,
      }),
      transformErrorResponse: response => ErrorUtils(response),
      invalidatesTags: ['Cards'],
    }),
    editCard: builder.mutation<CreateCardsType, { id: string; data: FormData }>({
      query: body => ({
        body: body.data,
        method: 'PATCH',
        url: `/v1/cards/${body.id}`,
        formData: true,
      }),
      transformErrorResponse: response => ErrorUtils(response),
      invalidatesTags: ['Cards'],
    }),
    deleteCard: builder.mutation<CreateCardsType, { id: string }>({
      query: body => ({
        method: 'DELETE',
        url: `/v1/cards/${body.id}`,
      }),
      transformErrorResponse: response => ErrorUtils(response),
      invalidatesTags: ['Cards'],
    }),
    changeGradeCard: builder.mutation<
      Card,
      { id: string; data: { cardId: string; grade: number } }
    >({
      query: body => ({
        body: body.data,
        method: 'POST',
        url: `/v1/decks/${body.id}/learn`,
        formData: true,
      }),
      transformErrorResponse: response => ErrorUtils(response),
      invalidatesTags: ['Cards', 'Learn'],
    }),
    getLearnCards: builder.query<Card, { id: string; params?: GetLearnDeckType | void }>({
      query: args => {
        return {
          url: `/v1/decks/${args.id}/learn`,
          params: args.params ?? {},
        }
      },
      providesTags: ['Learn'],
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
  useGetDeckByIdQuery,
  useAddNewCardMutation,
  useEditCardMutation,
  useDeleteCardMutation,
  useChangeGradeCardMutation,
  useGetLearnCardsQuery,
} = decksService
