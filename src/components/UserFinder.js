import { Component, Fragment } from 'react';

import Users from './Users';
import UsersContext from '../store/users-context';

import classes from './UserFinder.module.css';

class UserFinder extends Component {
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
