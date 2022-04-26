import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      {/* Making the Context dynamic */}
      {/* in dynamic context, we dont just pass data to the components but also the functions */}
      <Navigation />
    </header>
  );
};

export default MainHeader;
