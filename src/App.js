import React, { Fragment } from "react";
// Its ok to omit the above React import in modern React projects
// you can always add it as well though.
// We can always import React from React since it's required 
// for the JSX is transformation at behind the scenes

import Header from "./components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Header />
    </Fragment>
  );
}

export default App;
