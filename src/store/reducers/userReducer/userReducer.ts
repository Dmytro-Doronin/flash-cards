import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserTypeSlice } from './userReducer.types.ts'

const initialState: UserTypeSlice = {
  user: {
    avatar: '',
    id: '',
    email: '',
    isEmailVerified: false,
    name: '',
    created: '',
    updated: '',
  },
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserTypeSlice>) => {
      const newObj = action.payload

      state.user = { ...state.user, ...newObj }

      // state = { ...state, ...action.payload }
    },
  },
})

export const {addUser} = slice.actions
export const userReducer = slice.reducer
