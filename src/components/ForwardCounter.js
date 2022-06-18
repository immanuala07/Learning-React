import React from 'react';

import Card from './Card';
import useCounter from '../hooks/use-conter';

const ForwardCounter = () => {
  // Below custom hook useCounter is sent with empty parameter, since the default parameter is true for increment counter.
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
