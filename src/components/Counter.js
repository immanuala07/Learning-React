import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {

  // This hook returns a reference to the dispatch function from the Redux store.
  // You may use it to dispatch actions as needed.
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // Dispatch action  with action creator
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    // Dispatch action  with action creator and payload as the parameter within the action creator
    dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 5 }
  };

  const decrementHandler = () => {
    // Dispatch action  with action creator
    dispatch(counterActions.decrement());
  };

  /*
  const result: any = useSelector(selector: Function, equalityFn?: Function)
  
  Allows you to extract data from the Redux store state, using a selector function.

  The selector will be called with the entire Redux store state as its only argument. The selector will be run whenever the function component renders
  (unless its reference hasn't changed since a previous render of the component so that a cached result can be returned by the hook without re-running the selector).
  useSelector() will also subscribe to the Redux store, and run your selector whenever an action is dispatched.

  We may call useSelector() multiple times within a single function component.
  Each call to useSelector() creates an individual subscription to the Redux store.
  Because of the React update batching behavior used in React Redux v7,
  a dispatched action that causes multiple useSelector()s in the same component to return new values should only result in a single re-render.
  */
  const counter = useSelector(state => state.counter.counter);

  const show = useSelector(state => state.counter.showCounter);

  const toggleCounterHandler = () => {
    // Dispatch action with action creator
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

/*
import { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

  incrementHandler () {
    this.props.increment();
  }

  decrementHandler () {
    this.props.decrement();
  }

  toggleCounterHandler () { }

  render () {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

// This function is equivalent to useSelector() hook of functional components in react.
// Hooks are not unable in class based components.
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
};

// This function is equivalent to useDispatch() hook of functional components in react.
// Hooks are not unable in class based components.
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatch is a function which is in variable form.
    // dispatch function takes action object as parameter.
    increment: () => dispatch({ type: 'increment' }),
    decrement: () => dispatch({ type: 'decrement' })
  };
};

/*
The connect() function connects a React component to a Redux store.

It provides its connected component with the pieces of the data it needs from the store,
and the functions it can use to dispatch actions to the store.

It does not modify the component class passed to it;
instead, it returns a new, connected component class that wraps the component you passed in.

function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)

The mapStateToProps and mapDispatchToProps deals with your Redux store’s state and dispatch, respectively.
state and dispatch will be supplied to your mapStateToProps or mapDispatchToProps functions as the first argument.

The returns of mapStateToProps and mapDispatchToProps are referred to internally as stateProps and dispatchProps, respectively.
They will be supplied to mergeProps, if defined, as the first and the second argument, where the third argument will be ownProps.
The combined result, commonly referred to as mergedProps, will then be supplied to your connected component.
*/

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
