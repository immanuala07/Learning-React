import React from 'react';

import './Modal.css';

const modal = (props) => {

  console.log(props.show); // entering, entered, exiting & exited

  return (
    /*
    The <Transition> component will describe a transition
    from one component state to another over time with a simple declarative API.
    Most commonly it's used to animate the mounting and unmounting of a component,
    but can also be used to describe in-place transition states as well.
    
    It does not alter the behavior of the component it renders,
    it only tracks "enter" and "exit" states for the components.
    It's up to you to give meaning and effect to those states.
    For example we can add styles to a component when it enters or exits.

    There are 4 main states a Transition can be in:
      a) 'entering'
      b) 'entered'
      c) 'exiting'
      d) 'exited'

    in - Transition state is toggled via the 'in' prop which shows the component; triggers the enter or exit states
    When true the component begins the "Enter" stage. 
    During this stage, the component will shift from its current transition state,
    to 'entering' for the duration of the transition and then to the 'entered' stage once it's complete.

    timeout - The duration of the transition, in milliseconds. Required unless addEndListener is provided.
      timeout: number | { enter?: number, exit?: number, appear?: number }

    mountOnEnter - By default the child component is mounted immediately along with the parent Transition component.
      If you want to "lazy mount" the component on the first in={true} you can set mountOnEnter.
      After the first enter transition the component will stay mounted, even on "exited", unless you also specify unmountOnExit.

    unmountOnExit - By default the child component stays mounted after it reaches the 'exited' state.
      Set unmountOnExit if you'd prefer to unmount the component after it finishes exiting.
    */
    <Transition
      in={props.show}
      timeout={300}
      mountOnEnter
      unmountOnExit
    >
      {(state) => {
        const cssClasses = [
          "Modal",
          // states are of 4 stages, i.e; entering, entered, exiting & exited.
          state === "entering"
            ? "ModalOpen"
            // states are of 4 stages, i.e; entering, entered, exiting & exited.
            : state === "exiting"
            ? "ModalClosed"
            : null,
        ];

        return (
          // JS join() returns an array as a string.
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button
              className="Button"
              onClick={props.closed}
            >
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
