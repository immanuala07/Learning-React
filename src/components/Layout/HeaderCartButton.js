import { useContext } from 'react';

import CartContext from '../../store/cart-context';
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    return <button className={classes.button} onClick={props.onClick}>
        <span classes={classes.icon}>
            {/* This is a regular react component which holds the svg */}
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={ classes.badge }>{ numberOfCartItems }</span>
    </button>
};

export default HeaderCartButton;
