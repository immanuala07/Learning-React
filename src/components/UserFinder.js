import { Component, Fragment, useState, useEffect } from 'react';

import Users from './Users';

import classes from './UserFinder.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: DUMMY_USERS,
      searchTerm: '',
    };
  }

  // The componentDidMount() method is called after the component is rendered.
  // This is where you run statements that requires that the component is already placed in the DOM.
  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  // componentDidUpdate() method is called after the component is updated in the DOM.
  componentDidUpdate(prevProps, prevState) {
    // Just to avoid the infinite loop to excute the below code always
    // so we have added the IF condtion to check whether the previous state and the present are different or not.
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: DUMMY_USERS.filter((user) => {
          user.name.includes(this.state.searchTerm);
        }),
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
