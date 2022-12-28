import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsVisible: false, notification: null },
    reducers: {
        toggle (state) {
            /*
             Below, we are writing the mutating code.
             because we have learnt that when using Redux Toolkit, we are not really mutating the state,
             even though it looks like we do, but instead Redux Toolkit will kind of capture this code
             and use another third party library to ensure that this is actually translated to some immutable code
             which creates a new state object instead of manipulating the existing one.
            */
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification (state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
