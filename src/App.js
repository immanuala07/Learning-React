import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import { Transition } from "react-transition-group";

class App extends Component {
  // Initialising the state value
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  // Function to set state value
  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  // Function to set state value
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>

        <button
          className="Button"
          onClick={() => {
            this.setState((prevState) => ({
              showBlock: !prevState.showBlock,
            }));
          }}
        >
          Toggle
        </button>
        <br />

        {/*
        The <Transition> component will describe a transition
        from one component state to another over time with a simple declarative API.
        Most commonly it's used to animate the mounting and unmounting of a component,
        but can also be used to describe in-place transition states as well.
        
        It does not alter the behavior of the component it renders,
        it only tracks "enter" and "exit" states for the components.
        It's up to you to give meaning and effect to those states.
        For example we can add styles to a component when it enters or exits.

        There are 4 main states a Transition can be in:
          a) 'entering'
          b) 'entered'
          c) 'exiting'
          d) 'exited'

        in - Transition state is toggled via the 'in' prop which shows the component; triggers the enter or exit states
        
        When true the component begins the "Enter" stage. 
        During this stage, the component will shift from its current transition state,
        to 'entering' for the duration of the transition and then to the 'entered' stage once it's complete.

        timeout - The duration of the transition, in milliseconds. Required unless addEndListener is provided.
          timeout: number | { enter?: number, exit?: number, appear?: number }

        mountOnEnter - By default the child component is mounted immediately along with the parent Transition component.
          If you want to "lazy mount" the component on the first in={true} you can set mountOnEnter.
          After the first enter transition the component will stay mounted, even on "exited", unless you also specify unmountOnExit.

        unmountOnExit - By default the child component stays mounted after it reaches the 'exited' state.
          Set unmountOnExit if you'd prefer to unmount the component after it finishes exiting.
        */}
        <Transition
          in={this.state.showBlock}
          timeout={1000}
          mountOnEnter
          unmountOnExit

          // Callback fired before the "entering" status is applied. 
          onEnter={() => console.log('onEnter')}
          
          // Callback fired after the "entering" status is applied.
          onEntering={() => console.log('onEntering')}
          
          // Callback fired after the "entered" status is applied.
          onEntered={() => console.log('onEntered')}
          
          // Callback fired before the "exiting" status is applied.
          onExit={() => console.log('onExit')}
          
          // Callback fired after the "exiting" status is applied.
          onExiting={() => console.log('onExiting')}
          
          // Callback fired after the "exited" status is applied.
          onExited={() => console.log('onExited')}
        >
          {(state) => ( // states are of 4 stages, i.e; entering, entered, exiting & exited.
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                // exiting is the state of the component in the Transition Component.
                opacity: state === "exiting" ? 0 : 1,
              }}
            />
          )}
        </Transition>

        <Modal
          show={this.state.modalIsOpen}
          closed={this.closeModal}
        />

        {this.state.modalIsOpen ? (
          // show prop is always true  
          <Backdrop show />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
