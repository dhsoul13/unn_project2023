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
  raiting: number[];
  reviews: IReviews[];
  imgs: string[];
  discount: {
    isDiscount: boolean;
    count: number;
  };
  property: {
    storage: number;
    color: {
      title: string;
      codeColor: string;
    };
  };
}
