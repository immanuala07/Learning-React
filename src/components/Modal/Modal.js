import React from 'react';

import './Modal.css';
import { CSSTransition } from 'react-transition-group';

// Individually set the transition for appear, enter and exit of the component or html elements.
const animationTiming = { enter: 400, exit: 1000 };

const modal = (props) => {

  console.log(props.show); // entering, entered, exiting & exited

  return (
    /*    
    CSSTransition applies a pair of class names during the appear, enter, and exit states of the transition.
    The first class is applied and then a second *-active class in order to activate the CSS transition.
    After the transition, matching *-done class names are applied to persist the transition state.

    When the in prop is set to true, the child component will first receive the class example-enter,
    then the example-enter-active will be added in the next tick.
    CSSTransition forces a reflow between before adding the example-enter-active.
    This is an important trick because it allows us to transition between example-enter
    and example-enter-active even though they were added immediately one after another.
    Most notably, this is what makes it possible for us to animate appearance.

      .my-node-enter {
        opacity: 0;
      }

      .my-node-enter-active {
        opacity: 1;
        transition: opacity 200ms;
      }

      .my-node-exit {
        opacity: 1;
      }

      .my-node-exit-active {
        opacity: 0;
        transition: opacity 200ms;
      }

    *-active classes represent which styles you want to animate to,
    so it's important to add transition declaration only to them,
    otherwise transitions might not behave as intended! This might not be obvious when the transitions are symmetrical,
    i.e. when *-enter-active is the same as *-exit,
    like in the example above (minus transition), but it becomes apparent in more complex transitions.

    Note: If you're using the appear prop, make sure to define styles for .appear-* classes as well.
    */
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      mountOnEnter
      unmountOnExit
      /*
      classNames get merged with different css classes defined based on the different states of CSS transiton
      on the component or html element and these css classes are defined in global css or individual css file.
      */
      classNames='fade-slide'
    >
      {/* JS join() returns an array as a string. */}
      <div className='Modal'>
        <h1>A Modal</h1>
        <button
          className="Button"
          onClick={props.closed}
        >
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default modal;
