import { Route } from "react-router-dom";

import Welcome from './components/Welcome';
import Products from './components/Product';

function App () {
  return (
    <div>
      {/*
      Route is a component that allows us to define a certain path,
      and then the React component that should be loaded
      when that path becomes active in the URL.
      
      Path prop in <Route><Route/>: The path pattern to match against the URL to determine
      if this route matches a URL, link href, or form action.
      */}
      <Route path="/welcome">
        <Welcome />
      </Route>

      {/*
      Route is a component that allows us to define a certain path,
      and then the React component that should be loaded
      when that path becomes active in the URL.
      
      Path prop in <Route><Route/>: The path pattern to match against the URL to determine
      if this route matches a URL, link href, or form action.
      */}
      <Route path="/products">
        <Products />
      </Route>
    </div>
  );
}

export default App;
