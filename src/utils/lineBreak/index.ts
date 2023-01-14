/* eslint-disable import/prefer-default-export */
interface IBreakType {
  text: string;
  number: number;
}

export const lineBreakeFun = ({ text, number }: IBreakType) => {
  const addPoint: Array<string> = ['.', '.', '.'];
  const newText: Array<string> = text.split('');
  if (newText.length < number) {
    return text;
  }
  return newText.splice(0, number).concat(addPoint).join('');
};
