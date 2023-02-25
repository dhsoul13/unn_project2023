/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAuthAction, IAuthInitial } from './interface';

const initialState: IAuthInitial = {
  isAdmin: false,
  isAuth: false,
  info: {
    username: '',
    id: '',
  },
};

const authreducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isAuth(state, action: PayloadAction<IAuthAction>) {
      state.isAdmin = action.payload.isAdmin;
      state.isAuth = action.payload.isAuth;
      state.info = action.payload.info;
    },
  },
});

export const { isAuth } = authreducer.actions;
export const { name: AuthName } = authreducer;
export default authreducer.reducer;
