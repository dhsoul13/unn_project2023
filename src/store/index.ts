import { configureStore } from '@reduxjs/toolkit';
import { IReducer } from './interface';
import alertreducer from './reducers/alertreducer';
import modalreducer from './reducers/modalreducer';

const store = configureStore<IReducer>({
  reducer: {
    alert: alertreducer,
    modal: modalreducer,
  },
});

export default store;
