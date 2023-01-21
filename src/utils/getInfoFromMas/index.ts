/* eslint-disable arrow-body-style */
// eslint-disable-next-line import/prefer-default-export
export const getInfoFromMas = ({ mas, param }: { mas: Array<object>; param: string }) => {
  if (param === 'discount') {
    return mas.filter((el: any) => el?.discount?.isDiscount);
  }
  return mas.filter((el: any) => el?.param);
};
