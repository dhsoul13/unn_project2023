import React from 'react';

const PhoneMainInfo: React.FC<{
  data: any;
  className: string;
}> = ({ data, className }) => (
  <>
    <div className={`${className}__info-spechial-current`}>
      <h3 className={`${className}__storage spechial-title`}>
        <span>Внутрення память: </span>
        {data?.property?.storage}GB
      </h3>
      <h3 className={`${className}__color spechial-title`}>
        <span>Цвет: </span>
        {data?.color?.title}
      </h3>
      <h3></h3>
    </div>
    <div className={`${className}__info-spechial-another `}>
      <h3></h3>
    </div>
  </>
);

export default PhoneMainInfo;
