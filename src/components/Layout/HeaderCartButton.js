import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = props => {
    return <button className={classes.button}>
        <span classes={classes.icon}>
            {/* This is a regular react component which holds the svg */}
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
};

export default HeaderCartButton;
