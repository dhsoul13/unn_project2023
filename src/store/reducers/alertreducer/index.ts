/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EAlertReducer, IValueAlertReducer } from './interface';

const initialState: IValueAlertReducer = {
  isActive: false,
  status: EAlertReducer.info,
  text: '',
};

const alertreducer = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    showAlert(
      state,
      action: PayloadAction<{
        status: EAlertReducer.error;
        text: string;
      }>
    ) {
      state.isActive = true;
      state.status = action.payload.status;
      state.text = action.payload.text;
    },

    closeAlert(state) {
      state.isActive = false;
      state.status = EAlertReducer.info;
      state.text = '';
    },
  },
});

export const { showAlert, closeAlert } = alertreducer.actions;

export default alertreducer.reducer;
