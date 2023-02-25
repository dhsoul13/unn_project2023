import SearchPage from 'components/pages/SearchPage';
import { useSerch } from 'hooks/useSerch';
import React, { useEffect } from 'react';

const SearchContainer = () => {
  const [handlerSerchData, data] = useSerch();

  return (
    <>
      <SearchPage data={data} handlerSerchData={handlerSerchData} />
    </>
  );
};

export default SearchContainer;
