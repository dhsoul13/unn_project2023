type TFormModal = Array<{
  name: string;
  id: string;
  placeholder: string;
  title: string;
  type?: string;
}>;

export interface IValueModalReducer {
  isActiveModal: boolean;
  title: string;
  text: string;
  form: boolean;
}
