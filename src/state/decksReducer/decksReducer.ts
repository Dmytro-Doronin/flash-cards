import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'decks',
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
    resetFilters: state => {

    }
  }
})