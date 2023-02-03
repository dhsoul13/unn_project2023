import { Rating, styled } from '@mui/material';
import React from 'react';
import { IStars } from './interface';

const StyleRaiting = styled(Rating)({
  color: '#4e8eff',
});

const Stars: React.FC<IStars> = ({ value, onChange }) => (
  <div className="stars">
    <div className="stars__content">
      <StyleRaiting
        value={value}
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
        size="large"
      />
    </div>
  </div>
);

export default Stars;
