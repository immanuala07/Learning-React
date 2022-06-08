import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {
  /*
  The constructor method is a special method:
  It has to have the exact name "constructor"
  It is executed automatically when a new object is created
  It is used to initialize object properties
  The constructor method is called automatically when a new object is created.
  If you do not define a constructor method, JavaScript will add an empty constructor method.
  */
  constructor() {
    // The super keyword is used to call the constructor of its parent class
    // to access the parent's properties and methods.
    super();
    this.state = {
      showUsers: true,
    };
  }

  toggleUsersHandler() {
    // To set the state value we cannot use th below statement
    // this.state.showUsers = false;

    // Instead of using the above method we can use the below way of setting the state Value

    // To change a value in the state object, use the this.setState() method.
    // When a value in the state object changes, the component will re-render,
    // meaning that the output will change according to the new value(s).
    this.setState((curState) => {
      // If the state value is dependent on the last value then use this functuon form
      return { showUsers: !curState.showUsers };
    });
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        {/* By using javscript bind() function, we are making the toggleUsersHandler function to use the users object 
        instead of using the Button as object. */}
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {/* Using the state value */}
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

export default Users;
