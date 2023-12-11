import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type User = {
  key?: string
  avatar?: string
  birth: string
  name: string
  email: string
}

type UserState = {
  users: User[]
}

const userInitialState: UserState = {
  users: [],
}

export const userSlice = createSlice({
  name: 'users',
  initialState: userInitialState,
  reducers: {
    create: (state, action: PayloadAction<User>) => {
      const getUserAndSetKey = action.payload
      getUserAndSetKey.key = action.payload.email

      state.users.push(action.payload)
    },
  },
})

export const { create } = userSlice.actions
export default userSlice.reducer
