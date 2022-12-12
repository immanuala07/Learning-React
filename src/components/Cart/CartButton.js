import { useDispatch, useSelector } from 'react-redux';

import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  // This hook returns a reference to the dispatch function from the Redux store.
  // You may use it to dispatch actions as needed.
  const dispatch = useDispatch();

  const cartQuantity = useSelector(state => state.cart.totalQuantity);

  const toggleCartHandler = () => {
    // Dispatch action with action creator
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
