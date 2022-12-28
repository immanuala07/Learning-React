import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

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
export const fetchCartData = (cart) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-1e116-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();
            return data;
        };

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
        } catch (error) {
            uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!'
            })
        }
    };
};


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
export const sendCartData = (cart) => {
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
