import { useRaitingCount } from 'hooks/useRaitingCount';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ShopPage from '../../pages/ShopPage';

const ShopContainer: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { loading, raitingObj, resultDate } = useRaitingCount({});
  const [showReturn, setShowReturn] = useState(false);

  const src = searchParams.get('filter');

  useEffect(() => {
    if (src) {
      setShowReturn(true);
      console.log(JSON.parse(src));
    } else {
      setShowReturn(false);
    }
  }, [src]);

  return (
    <>
      <ShopPage data={resultDate} loading={loading} showReturn={showReturn} />
    </>
  );
};

export default ShopContainer;
