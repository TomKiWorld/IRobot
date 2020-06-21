import React from 'react';

const Header = ({ onRouteChange, resetSearch, resetName }) => {
  return (
    <header>
      <nav className='main-nav'>
        <button 
          className='bg-light-green br3 pa3 ma1 bw0 grow'
          onClick={() => {
            onRouteChange('list');
            resetName('');
            }}
          >Robots list</button>
        <button 
          className='bg-light-green br3 pa3 ma1 bw0 grow'
          onClick={() => {
            onRouteChange('personal');
            resetSearch('');
            }}
        >Personal Robot</button>
      </nav>
      <h1 className='sega title'>IRobot</h1>
    </header>
  );
}

export default Header;
