import { Component, Fragment } from 'react';

import Users from './Users';
import UsersContext from '../store/users-context';

import classes from './UserFinder.module.css';

class UserFinder extends Component {
  /*
  The static keyword defines a static method or property for a class.
  Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance.
  Static methods are often used to create utility functions for an application,
  whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.
  
  Example:
  class Point {
    static displayName = "Point";
  }
  
  const p1 = new Point(5, 5);
  p1.displayName;                   // Output: undefined
  console.log(Point.displayName);   // Output: "Point"
  */
  
  /*
  The contextType property is used to consume a context created with React.createContext().
  When the property is specified for a React component,
  you can access the current value of the context using this.context inside lifecycle methods of the component.
  
  This rule checks the following improper usages of contexts:
  a) Values other than the context objects returned by React.createContext() are assigned to the contextType property.
  Note that you should use the context object itself, not the Consumer or Provider property of the context object.
  b) Context objects are assigned to the legacy contextTypes property instead of the contextType.
  
  In the above cases, React outputs warning messages and wrong values may be accessed at this.context.
  */
  
  /*
  The static contextType assignment was introduced in v16.6.0 as a way to use context outside of render method.
  The only difference between Consumer and static context is the fact that using contextType allows you use context outside of render method too
  */
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }

  // The componentDidMount() method is called after the component is rendered.
  // This is where you run statements that requires that the component is already placed in the DOM.
  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users });
  }

  // componentDidUpdate() method is called after the component is updated in the DOM.
  componentDidUpdate(prevProps, prevState) {
    // Just to avoid the infinite loop to excute the below code always
    // so we have added the IF condtion to check whether the previous state and the present are different or not.
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  // Below function access the event object as parameter
  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

export default UserFinder;
