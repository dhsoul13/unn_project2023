import Search from 'assets/svgs/search';
import React from 'react';
import { ISearchInput } from './interface';

const SearchInput: React.FC<ISearchInput> = ({ value, onChange, exit }) => {
  console.log(value);

  return (
    <div className="search">
      <input
        type={'text'}
        className={'search__input'}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <div className="search__icon">
        {value === '' ? (
          <Search />
        ) : (
          <span
            onClick={() => {
              exit();
            }}>
            x
          </span>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
