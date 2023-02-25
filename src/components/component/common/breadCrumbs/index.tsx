import { GetStrBreadCrumbs } from 'helpers/getStrBreadCrumbs';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BreadCrumbs: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="breadcrumbs">
      <GetStrBreadCrumbs str={location.pathname} navigate={navigate} />
    </div>
  );
};

export default BreadCrumbs;
