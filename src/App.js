import React, { Fragment } from "react";
// Its ok to omit the above React import in modern React projects
// you can always add it as well though.
// We can always import React from React since it's required 
// for the JSX is transformation at behind the scenes

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
