import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type UpdateAvatarType = {
  key?: string
  avatar: string
}

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
    updateAvatar: (state, action: PayloadAction<UpdateAvatarType>) => {
      if (!action.payload.key) {
        return
      }

      const userIndex = state.users.findIndex(
        (user) => user.key === action.payload.key,
      )

      state.users[userIndex].avatar = action.payload.avatar
    },
  },
})

export const { create, updateAvatar } = userSlice.actions
export default userSlice.reducer
