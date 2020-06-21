import React from 'react';

import FindInput from '../../components/FindInput/FindInput';
import ErrorBoundry from '../../components/ErrorBoundry/ErrorBoundry';
import PersonalImage from '../../components/PersonalImage/PersonalImage';

const Personal = ({ onNameChange, name }) => {
  const image = name ? <PersonalImage name={name} /> : 
  <main className='light-green container'>
    <p>Please type your name to find your Personal</p>
    <p className='sega'>Robot</p>
  </main>;
  return (
    <main className='container'>
      <FindInput 
        onNameChange={onNameChange}
        name={name}
      />
      <ErrorBoundry>
        {image}
      </ErrorBoundry>
    </main>
  );
};

export default Personal;
