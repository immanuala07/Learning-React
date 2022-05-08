import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    return <form className={classes.form}>
        {/* Passing the default html tag element properties as 'input' props to this react component */}
        {/* Since we passing an object to the input component so we are using double flower brackets'{{}}' */}
        <Input label="amount" input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button>+ Add</button>
    </form>;
};

export default MealItemForm;
