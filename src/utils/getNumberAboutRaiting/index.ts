/* eslint-disable no-restricted-globals */
interface IGetNumberAboutRaiting {
  numberSum: number | string | undefined;
  numberCount: number | string | undefined;
}

export const getNumberAboutRaiting = ({ numberSum, numberCount }: IGetNumberAboutRaiting) => {
  if (numberSum && numberCount) {
    const sum = Number(numberSum);
    const count = Number(numberCount);

    if (isNaN(sum) && isNaN(count)) {
      return 0;
    }

    return !isNaN(Number(sum / count)) ? Number(sum / count).toFixed(1) : 0;
  }
  return 0;
};
