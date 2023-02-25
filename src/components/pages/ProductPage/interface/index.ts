export interface IProduct {
  loading: boolean;
  data: any;
  loadingReviews: boolean;
  dataReviws: any;
  handlerShowReviews: () => void;
  handlerCloseReviews: () => void;
  isMore: boolean;
  globalRaiting: object;
}
