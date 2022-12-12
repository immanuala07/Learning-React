import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
    // In useSelector(), ui and cart will be used to access the state values.
    reducer: { ui: uiSlice.reducer, cart: cartSlice.reducer }
});

export default store;
