// In an application there can be only one central data store and there cannot be more than one central data store.
// import { createStore } from 'redux';
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
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
Create a new store and also point the reducer function as variable in the parameter.
But if we have bigger applications with multiple state slices,we would face a problem
because there can only be one reducer passed to createStore().

When we have multiple slices, we have multiple reducers which we access with .reducer on the different slices.
*/
// const store = createStore(counterReducer);

/*
A friendly abstraction over the standard Redux createStore() function.
ConfigureStore like createStore creates a store but it makes merging multiple reducers
into one reducer easier.

In configureStore(), we can pass an object not a reducer function but an object.
It's a configuration object expected by configureStore.
A configuration object where we then set a reducer property is
an expected property by configureStore().
Redux wants one main reducer function, which is responsible for the global state.
*/
const store = configureStore({
  reducer: counterSlice.reducer
});

export default store;
