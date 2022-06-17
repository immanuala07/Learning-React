import { useEffect, useState } from "react";

/*
Hooks are reusable functions.
When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.
Custom Hooks should always start with "use" so that react identifies this as a custom hook. Example: useFetch.

A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
*/
const useCounter = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    //Return of custom hook function
    return counter;
};

export default useCounter;
