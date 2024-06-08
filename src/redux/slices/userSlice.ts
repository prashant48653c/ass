import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';

// Define the UserInfo interface
interface UserInfo {
  _id: string;
  password: string;
  email: string;
  [key: string]: any; // Allows for additional properties
}

const initialState: { current: UserInfo; isOwner: boolean } = {
  current: {} as UserInfo,
  isOwner: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.current = action.payload; // Directly update the `current` field
    },
    setCurrentUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.current = action.payload; // This might be redundant with setUserInfo
    },
    setIsOwner: (state, action: PayloadAction<boolean>) => {
      state.isOwner = action.payload;
    }
  },
});

export const { setUserInfo, setCurrentUserInfo, setIsOwner } = userSlice.actions;

export const selectUserInfo = (state: RootState) => state.user.current;
export const selectCurrentUserInfo = (state: RootState) => state.user.current;
export const selectIsOwner = (state: RootState) => state.user.isOwner;

export default userSlice.reducer;
