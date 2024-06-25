import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { USERTYPE } from '@/helper/types';


 

const initialState: { current: USERTYPE; isOwner: boolean } = {
  current: {} as USERTYPE,
  isOwner: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<USERTYPE>) => {
      state.current = action.payload;  
    },
    setCurrentUserInfo: (state, action: PayloadAction<USERTYPE>) => {
      state.current = action.payload; 
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
