export interface IAuthInitial {
  isAuth: boolean;
  isAdmin: boolean;
  info: {
    username: string;
    id: string | number;
  };
}

export interface IAuthAction {
  isAuth: boolean;
  isAdmin: boolean;
  info: any;
}
