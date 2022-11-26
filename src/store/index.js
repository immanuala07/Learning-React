// In an application there can be only one central data store and there cannot be more than one central data store.
import { createStore } from 'redux';

/*
Reducer function will produce new state snapshots.
The reducer function has to go of spitting out a new state snapshot whenever an action reaches it.
Reducer functions is a pure function i.e; same input always should produce exactly the same output.
There is no side effects inside of that function.
We must not send a http request or write something to local storage or fetch something from local storage.

state - Previous state value
action - Current or latest state value
*/
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    }
  }

  return state;
};

// Create a new store and also point the reducer function as variable in the parameter.
const store = createStore(counterReducer);

export default store;
