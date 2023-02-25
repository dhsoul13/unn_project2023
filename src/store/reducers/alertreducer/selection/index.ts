import { RootStateType } from 'store';

export const getAlertSelection = (state: RootStateType) => ({
  ...state.alert,
});
