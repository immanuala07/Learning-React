import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>
                {props.label}
            </label>
            {/* Spread operator is used to set the default html tag element props whch are passed from the 'Input' react component 
            instead of setting it individually here using props. */}
            {/* Refer to MealItemForm.js of Input component from line number 8 to 15. */}
            <input {...props.input} />
        </div>
    );
};

export default Input;
