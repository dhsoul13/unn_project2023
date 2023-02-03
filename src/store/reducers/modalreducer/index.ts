/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { IValueModalReducer } from './interface';

const initialState: IValueModalReducer = {
  isActiveModal: false,
  title: '',
  text: '',
  form: false,
};

const modalreducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, action) {
      state.isActiveModal = true;
      state.title = action.payload.title;
      state.text = action.payload.text;
      state.form = action.payload.form;
    },
    deleteModal(state) {
      state.isActiveModal = false;
      state.title = '';
      state.text = '';
      state.form = false;
    },
  },
});

export const { showModal, deleteModal } = modalreducer.actions;

export default modalreducer.reducer;
