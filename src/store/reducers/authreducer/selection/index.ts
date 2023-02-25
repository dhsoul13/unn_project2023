import { RootStateType } from 'store';

export const getAuth = (state: RootStateType) => state.auth.isAuth;
export const getIsAdmin = (state: RootStateType) => state.auth.isAdmin;
export const getAuthId = (state: RootStateType) => state.auth.info.id;
export const getAuthInfo = (state: RootStateType) => ({
  username: state.auth.info.username,
  id: state.auth.info.id,
});
