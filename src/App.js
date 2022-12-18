import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App () {
  // ui is exposed in store/index.js within the configureStore
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  // useEffect allows us to run side effects.
  useEffect(() => {
    /*
    HTTP request methods:
      GET - The HTTP GET method requests a representation of the specified resource. Requests using GET should only be used to request data (they shouldn't include data).
      PATCH - The HTTP PATCH request method applies partial modifications to a resource.
      DELETE - The HTTP DELETE request method deletes the specified resource.
      TRACE - The HTTP TRACE method performs a message loop-back test along the path to the target resource, providing a useful debugging mechanism.
      
      POST - The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header.
      PUT - The HTTP PUT request method creates a new resource or replaces a representation of the target resource with the request payload.
    
      In POST request, the new data will not be added in a list of data, but it will override existing data.
      In PUT request, we will override the existing cart with the incoming data.
    */
    fetch('https://react-http-1e116-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart)
    });
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
