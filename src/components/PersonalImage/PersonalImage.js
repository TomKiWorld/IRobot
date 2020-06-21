import React from 'react';

const PersonalImage = ({ name }) => {
  return (
    <section>
      <h2 className='light-green'>Hello <span className='sega'>{name}</span></h2>
      <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
          <img alt={`Sorry ${name}, Please try again`} src={`https://robohash.org/${name}?size=200x200`} />
      </div>
      <p className='light-green'>Meet your personal <span className='sega'>robot</span></p>
    </section>
  );
}

export default PersonalImage;
