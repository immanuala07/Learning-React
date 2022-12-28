import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0
    },
    reducers: {
        replaceCart (state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart (state, action) {
            // action.payload is passed through the action creator
            const newItem = action.payload;

            const existingItem = state.items.find(item => item.id === newItem.id);
            // increase overall quantity of items in cart.
            state.totalQuantity++;


            if (!existingItem) {
                /*
                Below, we want our state items to push a new item into the array,
                and that would be absolutely bad if you're using just Redux,
                because push() manipulates the existing array in the existing state.
                And that's a must not do, but with Redux Toolkit,
                as explained before, we don't have that problem
                because their Redux Toolkit internally ensures
                that this will not manipulate/change the existing state
                but that it instead transforms/updates this into an operation
                which updates the state in an immutable way.
                So we can use push here when working with Redux Toolkit.
                */
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart (state, action) {
            // action.payload is passed through the action creator
            const id = action.payload;

            const existingItem = state.items.find(item => item.id === id);
            // reduce overall quantity of items in cart.
            state.totalQuantity--;

            if (existingItem.quantity === 1) {
                /*
                we want to remove the item from the array,
                And we can do this by filtering out that one item that we wanna remove.
                That overwrites the array of items with a new array where this item
                which we wanna remove will be missing.
 
                And it will it be missing because we filter item where the item.id !== id.
                So, we keep all the items, where the ids do not match the one id
                we're trying to remove item where the id is equal,
                we'll filter that out and remove it therefore.
                That's how we can update these items
                to remove the one item that should be removed
                from the array whilst keeping all the other items.
                And that logic should work.
                
                Ignoring the id item and retaining the whitelisted items
                */

                state.items = state.items.filter(item => item.id !== id);
            } else {
                existingItem.quantity--;
            }
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;
