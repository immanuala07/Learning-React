import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { sendCartData, fetchCartData } from './store/cart-actions';
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

  // useEffect allows us to run side effects when this component was rendered for the first time.
  useEffect(() => {
    // To fetch the data into chart on the initial load.
    dispatch(fetchCartData());
  }, [dispatch]);

  // useEffect allows us to run side effects.
  useEffect(() => {
    /*
    Below variable outside the component,
    so that it doesn't change and it's not re-initialized.
    */
    if (isInital) {
      isInital = false;
      return;
    }

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
    dispatch(sendCartData(cart));

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
