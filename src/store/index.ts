import { configureStore } from '@reduxjs/toolkit';
import { IReducer } from './interface';
import { reducers } from './reducers';
import alertreducer from './reducers/alertreducer';
import modalreducer from './reducers/modalreducer';

export const store = configureStore({
  reducer: {
    ...reducers,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
