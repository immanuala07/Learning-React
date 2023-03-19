import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/* 
Adding lazy loading:
Step 1: Remove the below import where the below component is always loaded.
It's loaded eagerly, when it's called. 
 import BlogPage, { loader as postsLoader } from './pages/Blog';
 import PostPage, { loader as postLoader } from './pages/Post';
*/
import HomePage from './pages/Home';
import RootLayout from './pages/Root';

/*
Adding lazy loading:
Step 1: Adding lazy() from react

lazy() helps us to defer or postpone loading component’s code,
until it is rendered for the first time.

lazy returns a React component you can render in your tree.
While the code for the lazy component is still loading,
attempting to render it will suspend.
Use <Suspense> to display a loading indicator while it’s loading.

Example - 
const SomeComponent = lazy(load)

load parameter: A function that returns a Promise or another thenable (Promise-like object with then method).
React will not call load until the first time you attempt to render the returned component.
After React first calls load, it will wait for it to resolve,
and then render the resolved value as a React component.
Both the returned Promise and the Promise’s resolved value will be cached,
so React will not call load more than once.
If the Promise rejects, React will throw the rejection reason for the nearest Error Boundary to handle.
*/
const BlogPage = lazy(() => import('./pages/Blog'));
const PostPage = lazy(()=>import('./pages/Post'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          {
            index: true,
            element: (
              /*
              Adding lazy loading:
              Step 3: Add the <Suspense> component around the actual component
              */
              <Suspense fallback={<p>Loading...</p>}>
                <BlogPage />
              </Suspense>
            ),
            /*
            We pass a function to the loader prop,

            import(moduleSpecifier);

            The import() in ES2020 allows us to dynamically import a module when needed. Here is how the import() works:
            a) The import() accepts a module specifier (moduleSpecifier) that has the same format as the module specifier used for the import statement. In addition, the moduleSpecifier can be an expression that evaluates to a string.
            b) The import() returns a Promise that will be fulfilled once the module is loaded completely.

            Adding lazy loading:
            Step 2: Below the code is accessing the loader function with import function which returns promise
            and also inovkes only when the data is needed 
            and it adds bit delay to the function to execute.
            */
            loader: () =>
              import("./pages/Blog").then(
                (module) => module.loader()
              )
          },
          {
            path: ':id',
            element: (
              <Suspense fallback={<p>Loading...</p>}>
                 <PostPage />
              </Suspense>
            ),
            /*
            Since in this route definition, dynamic paramters passed in the path prop
            So we can pass meta object as parameter to the loader funtion
            meta = {
              "context": undefined,
                "request": {},
                "params": {
                    "id": "3"
                }
            }

            or we can pass an object destructing
            both params and request property as below:
            
            loader: ({params}) =>
              import("./pages/Post").then(
                (module) => module.loader({params})
              )
            */
            loader: (meta) =>
              import("./pages/Post").then(
                (module) => module.loader(meta)
              )
          }
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
