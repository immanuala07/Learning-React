import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
  console.log(props.show);
  const cssClasses = ['Backdrop', props.show ? 'BackdropOpen' : 'BackdropClosed'];
  
  // JS join() returns an array as a string.
  return <div className={cssClasses.join(' ')}></div>
};

export default backdrop;
