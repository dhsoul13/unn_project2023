/* eslint-disable eqeqeq */
import LikePage from 'components/pages/LikePage';
import { useElemForList } from 'hooks/useElemForList';
import { request } from 'network';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuthInfo } from 'store/reducers/authreducer/selection';

const LikeContainer = () => {
  const info = useSelector(getAuthInfo);
  const { data, loading, deleteElem } = useElemForList('like', info.id);

  return (
    <>
      <LikePage data={data} loading={loading} deleteF={deleteElem} />
    </>
  );
};

export default LikeContainer;
