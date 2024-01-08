import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'app',
  initialState: {
    message: '',
  },
  reducers: {
    setMessage: (state, action: PayloadAction<{ message: string }>) => {
      state.message = action.payload.message
    },
  },
})

export const appReducer = slice.reducer
export const appActions = slice.actions
