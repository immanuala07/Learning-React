import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';

/*
Define a variable outside the component,
so that it doesn't change and it's not re-initialized.
*/
let isInital = true;

function App () {
  const dispatch = useDispatch();
  // ui is exposed in store/index.js within the configureStore
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // useEffect allows us to run side effects.
  useEffect(() => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending!',
      message: 'Sending cart data successfully!'
    }));

    const sendCartData = async () => {
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

      /*
        We are not interested in any response.
        So we no need to get to the response data,
        instead knowing that we don't have an error is enough.
      */
      // const responseData = await response.json();

      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!'
        })
      );
    };

    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!'
        })
      );
    });

    /*
    Below variable outside the component,
    so that it doesn't change and it's not re-initialized.
    */
    if (isInital) {
      isInital = false;
      return;
    }

    /*
      The dispatch function is actually also a dependency now.
      The dispatch function created by use dispatch.
      We can safely add it to the dependencies array
      because React Redux will ensure
      that dispatch function which will never change.
      So this dispatch will never trigger this useeffect and
      for completeness sake we should add it
      to get rid of these yellow squiggly lines.
    */
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
