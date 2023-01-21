import OurShopPage from 'components/pages/OurShopPage';
import { useFindDate } from 'hooks/useFindDate';
import React from 'react';

const OurShopContainer = () => {
  const [find, handlerOnChange, handlerExit] = useFindDate();

  return (
    <>
      <OurShopPage value={find} onChange={handlerOnChange} exit={handlerExit} />
    </>
  );
};

export default OurShopContainer;
