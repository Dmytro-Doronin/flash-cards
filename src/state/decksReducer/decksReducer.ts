import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Tab } from '../../services/decks/decks.types.ts'

const slice = createSlice({
  name: 'decks',
  initialState: {
    authorId: undefined as string | undefined,
    currentPage: 1,
    currentTab: 'all' as Tab,
    maxCard: undefined as number | undefined,
    minCard: 0,
    perPage: 10,
    search: '',
  },
  reducers: {
    resetCurrentPage: state => {
      state.currentPage = 1
    },
    resetFilters: state => {
      state.authorId = undefined
      state.currentPage = 1
      state.maxCard = undefined
      state.minCard = 0
      state.search = ''
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setCurrentTab: (state, action: PayloadAction<{ authorId?: string; tab: Tab }>) => {
      state.currentTab = action.payload.tab
      state.authorId = action.payload.authorId
    },
    setMaxCard: (state, action: PayloadAction<number>) => {
      state.maxCard = action.payload
    },
    setMinCard: (state, action: PayloadAction<number>) => {
      state.maxCard = action.payload
    },
    setPerPage: (state, action: PayloadAction<number>) => {
      state.perPage = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  },
})

export const decksReducer = slice.reducer
export const deckActions = slice.actions
