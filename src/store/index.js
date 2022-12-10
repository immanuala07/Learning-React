import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

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
  reducer: {
    // Even we add multiple slices of state here using key pair value within the object
    counter: counterReducer,
    auth: authReducer
  }
});

export default store;
