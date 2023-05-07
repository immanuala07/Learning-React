import { useState } from "react";

let globalState = {};
let listeners = [];
let actions = {};

/*
Here, we are creating the global state management store and managing state globally.

When custom hook uses useState, the component that uses the
custom hook will re render when state in that
custom hook will trigger a re render.

In custom hook, we will share logic and data by managing
the data outside of the hook because inside of the hook
it would not be shared.
It would be included to each component.
Each component would get it's own data.
But managing it outside of the hook every file imports
this file or something from that file gets the same shared data.
*/
const useStore = () => {
  /*
  useState allows us to manage a state and whenever we update that state
  any component that uses useState will re render.
  
  useState provides a mechanisim to re-render the components.

  useState(globalState)[1] - fetching or interested in updating function
  */
  const setState = useState(globalState)[1];

  const dispatch = (actionIdentifier) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

  useEffect(() => {
    listeners.push(setState);

    return () => {
      // run the cleanup function to remove the listener when the component unmounts or removed
      listeners = listeners.filter((li) => li !== setState);
    };
  }, [setState, dispatch]);
};

export const initStore = (userActions, initialActions) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
