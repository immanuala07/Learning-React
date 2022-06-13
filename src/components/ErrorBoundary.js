import { Component } from "react";

class ErrorBoundary extends Component {
    constructor() {
        super();

        // Assigns the initial this.state
        this.state = { hasError: false };
    }

    /**
     * The componentDidCatch() method is invoked if some error occurs during the rendering phase of any lifecycle methods or any children components.
     * This method is used to implement the Error Boundaries for the React application.
     * It is called during the commit phase, so unlike getDerivedStateFromError() which was called during the render phase, side-effects are allowed in this method. 
     * This method is also used to log errors.
     * 
     * Syntax:
     * componentDidCatch(error, info)
     * 
     * Parameters: It accepts two parameters i.e, error, and info as described below:
     * error: It is the error that was thrown by the descendant component.
     * info: It stores the componentStack trace of which component has thrown this error.
     */
    componentDidCatch(error) {
        // Initialise state using this.setState()
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;