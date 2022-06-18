import React from 'react';
import useCounter from '../hooks/use-conter';

import Card from './Card';

const BackwardCounter = () => {
  // Below custom hook useCounter is sent with parameter as false for decrement counter.
  const counter = useCounter(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
