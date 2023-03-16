import { useEffect } from 'react';
import { Outlet, useLoaderData, useNavigation, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  /*
  Invoking the loader function defined within
  this component as loader property in route definition.
  */
  const token = useLoaderData();
  
  /*
  The imperative version of <Form> that lets you,
  the programmer, submit a form instead of the user.

  This is used to trigger the action method defined in EventDetail.js
  and also deifned in route definition of EventDetail.js 
  */
  const submit = useSubmit();

  //Addedd automatic logout after 1 hour
  useEffect(() => {
    if (!token) {
      return;
    }

    setTimeout(() => {
      /*
      Below code will invoke the action function of logout route
      to reomve the token from the local storage.
      */
      submit(null, { action: '/logout', method: 'post' });
    }, 1 * 60 * 60 * 1000);
  }, [token, submit]);

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
