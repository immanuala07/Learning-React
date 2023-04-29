import React, { Component } from 'react';

import './List.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class List extends Component {
    state = {
        items: [1, 2, 3]
    }

    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            };
        });
    }

    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== selIndex)
            };
        });
    }

    render () {
        const listItems = this.state.items.map((item, index) => (
          /*    
            CSSTransition applies a pair of class names during the appear, enter, and exit states of the transition.
            The first class is applied and then a second *-active class in order to activate the CSS transition.
            After the transition, matching *-done class names are applied to persist the transition state.

            When the in prop is set to true, the child component will first receive the class example-enter,
            then the example-enter-active will be added in the next tick.
            CSSTransition forces a reflow between before adding the example-enter-active.
            This is an important trick because it allows us to transition between example-enter
            and example-enter-active even though they were added immediately one after another.
            Most notably, this is what makes it possible for us to animate appearance.
          */
          <CSSTransition
            key={index}
            classNames="fade"
            timeout={300}
          >
            <li
              key={index}
              className="ListItem"
              onClick={() => this.removeItemHandler(index)}
            >
              {item}
            </li>
          </CSSTransition>
        ));

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                <ul className="List">
                    {/* 
                    The <TransitionGroup> component manages a set of transition components (<Transition> and <CSSTransition>) in a list.
                    Like with the transition components, <TransitionGroup> is a state machine for managing the mounting
                    and unmounting of components over time.
                    
                    Note that <TransitionGroup> does not define any animation behavior!
                    Exactly how a list item animates is up to the individual transition component.
                    This means we can mix and match animations across different list items.
                   
                   component - <TransitionGroup> renders a <div> by default.
                        we can change this behavior by providing a component prop.
                        If we use React v16+ and would like to avoid a wrapping <div> element we can pass in component={null}.
                        This is useful if the wrapping div borks our css styles.
                   */}
                    <TransitionGroup component='ul' className='List'>
                        {listItems}
                    </TransitionGroup>
                </ul>
            </div>
        );
    }
}

export default List;
