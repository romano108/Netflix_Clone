import React from 'react';
import NavigationOptions from './NavigationOptions';

const NavigationBar = () => {
  return (
    <>
      <div className="w-full shadow-md place-content-between h-20 flex items-center">
        <div className="m-2">Logo</div>
        <div>
          <NavigationOptions />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
