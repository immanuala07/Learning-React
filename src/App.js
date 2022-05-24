import React, {useState, useCallback} from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  // The React useCallback Hook returns a memoized callback function.

  // The useCallback hook is used when you have a component in which the child is rerendering again and again without need.

  // Pass an inline callback and an array of dependencies.
  // useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    // We cannot use prevShowParagraph as dependency in the useCallback since its scope is within this function.
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggling</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
