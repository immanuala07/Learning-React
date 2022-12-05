// In an application there can be only one central data store and there cannot be more than one central data store.
import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true
};

/*
 A function that accepts an initial state, an object full of reducer functions, and a "slice name",
 and automatically generates action creators and action types that correspond to the reducers and state.
 The reducer argument is passed to createReducer().
*/
createSlice({
  // Name of the slice
  name: 'counter',
  // The initial state for the reducer
  initialState,
  // An object of "case reducers". Key names will be used to generate actions.
  reducers: {
    // A "builder callback" function used to add more reducers, or
    // an additional object of "case reducers", where the keys should be other
    // action types
    increment (state) {
      state.counter++;
    },
    decrement (state) {
      state.counter--;
    },
    increase (state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCounter (state) {
      state.showCounter = !state.showCounter;
    }
  }
});

/*
Reducer function will produce new state snapshots.
The reducer function has to go of spitting out a new state snapshot whenever an action reaches it.
Reducer functions is a pure function i.e; same input always should produce exactly the same output.
There is no side effects inside of that function.
We must not send a http request or write something to local storage or fetch something from local storage.

state - Previous state value
action - Current or latest state value
*/
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: true
    }
  }

  if (action.type === 'increaseBy5') {
    return {
      // Added payload to Action with action.amount (to fetch latest amount value) for generic approach
      counter: state.counter + action.amount,
      showCounter: true
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: true
    }
  }

  if (action.type === 'toggle') {
    return {
      showCounter: !state.showCounter,
      counter: state.counter
    }
  }

  return state;
};

// Create a new store and also point the reducer function as variable in the parameter.
const store = createStore(counterReducer);

export default store;
