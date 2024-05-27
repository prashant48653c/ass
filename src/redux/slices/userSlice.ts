import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

 
const initialState: Record<string, any> = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<Record<string, any>>) => {
      return { ...state, ...action.payload }
    },
   
   
   
    
  },
})

export const { setUserInfo,  } = userSlice.actions

export const selectUserInfo = (state: RootState) => state.user

export default userSlice.reducer
