import React from 'react';
import './information.css';

const Information = () => {
  return (
    <div className='information'>
      <div className='information-title'>
        <h1 className='title'>Locator</h1>
      </div>
      <p className='info-text'>
        The Locator application detected some strange objects in Earth.<br></br>
        To get more information about them, please click on the map to place
        your location.
      </p>
    </div>
  );
};

export default Information;
