import { useState } from "react";


// Custom hooks are outsourcing stateful logic into reusable functions.
const useHttp = (requestConfig, applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = async () => {
        setIsLoading(true);
        setError(null);
        try {
            // The below fetch api function is able to work with both POST and GET request types
            const response = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : 'GET',
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
            });

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            applyData(data);
        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    };

    // return {
    //     isLoading: isLoading,
    //     error: error,
    //     sendRequest: sendRequest
    // };
    // Below object is the ES6 shortcut for the above object.
    return {
        isLoading,
        error,
        sendRequest
    };
};

export default useHttp;
