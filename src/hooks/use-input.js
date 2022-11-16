import { useState } from "react";

// Keep in mind that the hook (and custom hooks in general) should be generic.
// It's not limited to one specfic input.
const useInput = (validateValue) => {
    // Use the value for every keystroke on name textfield
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = ((event) => {
        setIsTouched(true);
    });

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;
