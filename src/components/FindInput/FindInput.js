import React from 'react';

const FindInput = ({ onNameChange }) => {
  return (
    <div className='pa2'>
      <input
        aria-label='set-name'
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='Type your name'
        onChange={(event) => onNameChange(event.target.value)}
      />
    </div>
  );
}

export default FindInput;
