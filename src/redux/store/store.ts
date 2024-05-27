 
import userReducer from '../slices/userSlice'
import authReducer from '../slices/authSlice'
import blogReducer from '../slices/blogSlice'

import { configureStore } from '@reduxjs/toolkit'

export const makeStore = () => {
  return configureStore({
    reducer: {
      user:userReducer,
      blog:blogReducer,
      auth:authReducer
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
 
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']