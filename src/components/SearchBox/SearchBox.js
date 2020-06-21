import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        aria-label='search-robots'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={(event) => searchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBox;
