import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
 counter: 0,
 showCounter: true
};

/*
 A function that accepts an initial state, an object full of reducer functions, and a "slice name",
 and automatically generates action creators and action types that correspond to the reducers and state.
 The reducer argument is passed to createReducer().
*/
const counterSlice = createSlice({
 // Name of the slice
 name: 'counter',
 // The initial state for the reducer
 initialState: initialCounterState,
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
   // action.payload is passed through the action creator in counter.js
   state.counter = state.counter + action.payload;
  },
  toggleCounter (state) {
   state.showCounter = !state.showCounter;
  }
 }
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
