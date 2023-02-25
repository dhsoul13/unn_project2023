/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ETypeModal, IModalAction, IValueModalReducer } from './interface';

const initialState: IValueModalReducer = {
  isActiveModal: false,
  typeActiveModal: ETypeModal.none,
  content: '',
};

const modalreducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state, action: PayloadAction<IModalAction>) {
      state.isActiveModal = true;
      state.typeActiveModal = action.payload.type;
      state.content = action.payload.content;
    },
    deleteModal(state) {
      state.isActiveModal = false;
    },
  },
});

export const { showModal, deleteModal } = modalreducer.actions;
export const { name: ModalName } = modalreducer;
export default modalreducer.reducer;
