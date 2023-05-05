import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

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

/*
Before we dispatched always with action creators,
So that the function that return an action object with a type and so on.

Now in cart-slice.js, we are dispatching a function that returns another function.
The great thing about Redux, when using Redux toolkit,
It doesn't just accept action objects with a type property.
Instead, it also accepts the action creators that return functions.
If it is noticed that we are dispatching an action which is actually a function, instead of action object.
So Redux will execute that function for us.

There's a common pattern that we wanna have action creators
that can perform side effects and that can then dispatch other actions,
which will eventually reach the reducers as part of a flow of side-effects,
or as a flow of steps that should be taken.
And that's what we have here.
So we can use a function that returns another function,
as a action as well.
That is built into Redux when using Redux toolkit.

This approach will keep our components lean, to not have too much logic in them.
And by moving that logic to this action creator function,
we did achieved this.
*/
export const sendCartData = (cart) => { // Action Creator Thunk
    return async (dispatch) => {
        // Dispatch action with action creator
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending!',
            message: 'Sending cart data successfully!'
        }));

        const sendRequest = (async () => {
            /*
            HTTP request methods:
                GET - The HTTP GET method requests a representation of the specified resource. Requests using GET should only be used to request data (they shouldn't include data).
                PATCH - The HTTP PATCH request method applies partial modifications to a resource.
                DELETE - The HTTP DELETE request method deletes the specified resource.
                TRACE - The HTTP TRACE method performs a message loop-back test along the path to the target resource, providing a useful debugging mechanism.
                
                POST - The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.
                PUT - The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload.
                
                In POST request, the new data will not be added in a list of data, but it will override existing data.
                In PUT request, we will override the existing cart with the incoming data.
            */
            const response = await fetch(
                'https://react-http-1e116-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                }
            );

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        });

        try {
            await sendRequest();
            // Dispatch action with action creator
            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!'
                })
            );
        }
        catch (error) {
            // Dispatch action with action creator
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!'
                })
            );
        }
    };
};

export const cartActions = cartSlice.actions;

export default cartSlice;
