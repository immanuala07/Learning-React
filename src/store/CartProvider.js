import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = ((state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
        );

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            // Adds the older items to const varable
            updatedItems = [...state.items];

            // Updates the existing items with selected order which already present in cart
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            // The concat() method is used to merge two or more arrays.
            // This method does not change the existing arrays, but instead returns a new array.
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return defaultCartState;
});


const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);    

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item })
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
