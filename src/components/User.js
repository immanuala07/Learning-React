import { Component } from 'react';
import classes from './User.module.css';

//--------- Class based components ---------
// JS class is not an object and it is a template for JS objects.
class User extends Component {
  /*
  The constructor method is a special method:
  It has to have the exact name "constructor"
  It is executed automatically when a new object is created
  It is used to initialize object properties
  The constructor method is called automatically when a new object is created.
  If you do not define a constructor method, JavaScript will add an empty constructor method.
  constructor() {}
  */

  // componentWillUnmount method is called when the component is about to be removed from the DOM.
  componentWillUnmount() {
    console.log('User will unmount!');
  }

  // React renders HTML to the web page by using a function called render().
  // Render function is to display the specified HTML code inside the specified HTML element.
  // Render() method, we can read props and state and return our JSX code to the root component of our app.
  // Render() method, we cannot change the state, and we cannot cause side effects(such as making an HTTP request to the webserver).
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

// (or)

//--------- Functional based components ---------
// const User = (props) => {
//   return <li className={classes.user}>{this.props.name}</li>;
// };

export default User;
