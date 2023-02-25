interface IReviews {
  id: number;
  user: number | string;
  text?: string;
}

export interface IProduct {
  id: string;
  type: string;
  title: string;
  price: number;
  count: number;
  brand: string;
  tegs: string[];
  reviews: IReviews[];
  imgs: string[];
  color: {
    title: string;
    codeColor: string;
  };
  discount: {
    isDiscount: boolean;
    count: number;
  };
  property: {
    storage: number;
  };
}
