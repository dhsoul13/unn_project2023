type TQuestionValue = {
  name: string;
  email: string;
  question: string;
};

export interface IQuestionPage {
  value: TQuestionValue;
  onSubmit: (value: any, action: any) => void;
}
