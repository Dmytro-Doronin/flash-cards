import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// import { Tab } from '../../services/decks/decks.types.ts'

const slice = createSlice({
  name: 'card',
  initialState: {
    authorId: undefined as string | undefined,
    currentPage: 1,
    maxCard: undefined as number | undefined,
    minCard: 0,
    perPage: 10,
    search: '',
  },
  reducers: {
    resetCurrentPage: state => {
      state.currentPage = 1
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setMaxQuestion: (state, action: PayloadAction<number | undefined>) => {
      state.maxCard = action.payload
    },
    setMinQuestion: (state, action: PayloadAction<number>) => {
      state.minCard = action.payload
    },
    setQuestionPerPage: (state, action: PayloadAction<number>) => {
      state.perPage = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  },
})

export const cardReducer = slice.reducer
export const cardActions = slice.actions
