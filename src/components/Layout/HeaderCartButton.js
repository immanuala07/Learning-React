import {useContext, useEffect, useState} from 'react';

import CartContext from '../../store/cart-context';
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    // we'll need to reevaluate
    // and re - render this component
    // when that animation class is added conditionally.
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    // Object de-structuring to pull out the items, to get them out of my cart
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

    // It is used to change my btnClasses
    // to include the bump animation class,
    // and then I wanna set a timer which removes that class again
    // so that when it's added again in the future, it again plays.
    useEffect(() => {
        // Avoid the Cart button bump on inital load or when cart has zero items.
        if (items.length === 0) {
            return;
        }

        // we'll need to reevaluate
        // and re - render this component
        // when that animation class is added conditionally.
        setBtnIsHighlighted(true);

        // This makes the bump animation on every item added to cart so that the css class toggles to add and remove 'classes.bump'
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        //  Added a cleanup function to clear the above timer in case that component should be removed.
        //  But, this can't happen in this application, the button is always there.

        // But it's still a good practice to clean up any timers or any other side effects that might be ongoing
        // because you started them in useEffect.

        // if we return a function in useEffect, this will be called automatically
        // as a cleanup function by React.
        // We are clearing the old timer and make sure that a new timer is set.
        return () => {
            clearTimeout(timer);
        };
    }, [items])


    return (<button className={btnClasses} onClick={props.onClick}>
        <span classes={classes.icon}>
            {/* This is a regular react component which holds the svg */}
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>);
};

export default HeaderCartButton;
