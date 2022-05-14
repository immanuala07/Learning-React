import {useRef, useState} from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        // Converts to number using unary operator
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return <form className={classes.form} onSubmit={submitHandler}>
        {/* Passing the default html tag element properties as 'input' props to this react component */}
        {/* Since we passing an object to the input component so we are using double flower brackets'{{}}' */}

        {/* 
        ********* Fixing Form Input IDs *********
        With the current implementation of MealItemForm, every MealItem <Input /> receives the same id, as I do the following in the code I show in the previous lecture:
        <Input
            label='Amount'
            input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }}
        />
        
        This works but it has two major disadvantages which are not immediately obvious (and hence unfortunately slipped through during the recordings):
        1. Clicking on ANY label will always select the same, first input element - even if that's not the one belonging to the actual MeatItem
        2. Screenreaders won't be able to connect labels + inputs correctly (since all labels point at the same input)

        Everything shown in the videos works as shown and fixing this is optional, but since fixing this is easy, you might want to consider making the below adjustments:

        One possible workaround is to accept an id prop on the MealItemForm component and use that to create a unique id per <Input />:

        <Input
            label='Amount'
            input={{
                id: 'amount_' + props.id, // this changed!
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }}
        />
        We just have to make sure that the id props is passed correctly to <MealItemForm /> when that component is being used (i.e. inside of the MealItem component):

        <MealItemForm id={props.id} />
        Last but not least, for that to work, we should also pass id as a prop to MealItem, hence inside of the AvailableMeals component, we should create <MealItem /> elements like this:

        <MealItem
            id={meal.id} // this is new!
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
        */}
        <Input
            ref={amountInputRef}
            label="amount"
            input={{
                id: 'amount_' + props.id, // Fixed Form Input IDs
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}
        />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>;
};

export default MealItemForm;
