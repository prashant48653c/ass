import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store/store'

interface AuthState {
  username: string,
  email: string,
  password: string
}

interface LoginState {
  email: string,
  password: string
}

interface AuthSliceState {
  signup: AuthState,
  login: LoginState
}

const initialState: AuthSliceState = {
  signup: {
    username: '',
    email: '',
    password: ''
  },
  login: {
    email: '',
    password: ''
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<Partial<AuthState>>) => {
      state.signup = { ...state.signup, ...action.payload }
    },
    setLoginData: (state, action: PayloadAction<Partial<LoginState>>) => {
      state.login = { ...state.login, ...action.payload }
    },
  },
})

export const { setUserData, setLoginData } = authSlice.actions

export const selectSignupData = (state: RootState) => state.auth.signup
export const selectLoginData = (state: RootState) => state.auth.login

export default authSlice.reducer
