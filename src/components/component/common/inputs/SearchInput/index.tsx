import Search from 'assets/svgs/search';
import React, { useState } from 'react';
import { ISearchInput } from './interface';

const SearchInput: React.FC<ISearchInput> = ({ value, onChange, exit }) => {
  const [showSearchDisplay, setShowSearchDisplay] = useState<boolean>(false);

  const handlerFocus = () => {
    setShowSearchDisplay(true);
  };

  const handlerBlur = () => {
    setShowSearchDisplay(false);
  };

  return (
    <div className="search">
      {showSearchDisplay ? (
        <>
          {' '}
          <div className="search__result">
            <ul>
              <li>1313</li>
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
      <input
        type={'text'}
        className={'search__input'}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onFocus={handlerFocus}
        onBlur={handlerBlur}
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
