import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';

import classes from "./NewsletterSignup.module.css";

function NewsletterSignup() {
  /*
  In HTML/HTTP, data mutations and loads are modeled with navigation: <a href> and <form action>.
  Both cause a navigation in the browser.
  The React Router equivalents are <Link> and <Form>.

  But sometimes you want to call a loader outside of navigation,
  or call an action (and get the data on the page to revalidate) without changing the URL.
  Or you need to have multiple mutations in-flight at the same time.

  Many interactions with the server aren't navigation events.
  This hook lets you plug your UI into your actions and loaders without navigating.
  This feature only works if using a data router, see Picking a Router

  This is useful when you need to:
    * fetch data not associated with UI routes (popovers, dynamic forms, etc.)
    * submit data to actions without navigating (shared components like a newsletter sign ups)
    * handle multiple concurrent submissions in a list (typical "todo app" list
      where you can click multiple buttons and all should be pending at the same time)
    * infinite scroll containers
  
  Fetchers have a lot of built-in behavior:
  * Automatically handles cancellation on interruptions of the fetch
  * When submitting with POST, PUT, PATCH, DELETE, the action is called first
    * After the action completes, the data on the page is revalidated
      to capture any mutations that may have happened, automatically
      keeping your UI in sync with your server state.
  * When multiple fetchers are inflight at once, it will
    * commit the freshest available data as they each land
    * ensure no stale loads override fresher data, no matter which order the responses return
  * Handles uncaught errors by rendering the nearest errorElement (just like a normal navigation from <Link> or <Form>)
  * Will redirect the app if your action/loader being called returns a redirect
    (just like a normal navigation from <Link> or <Form>)
 
 
  fetcher.state - We know the state of the fetcher with fetcher.state.
  It will be one of:
    * idle - nothing is being fetched.
    * submitting - A route action is being called due to a fetcher submission using POST, PUT, PATCH, or DELETE
    * loading - The fetcher is calling a loader (from a fetcher.load) or is being revalidated
                after a separate submission or useRevalidator call


  fetcher.Form - Just like <Form> except it doesn't cause a navigation. (You'll get over the dot in JSX ... we hope!)


  fetcher.data - The returned data from the loader or action is stored here.
  Once the data is set, it persists on the fetcher even through reloads and resubmissions.


  fetcher.formAction - Tells us the action url the form is being submitted to.
    <fetcher.Form action="/mark-as-read" />;


  fetcher.formMethod - Tells us the method of the form being submitted: get, post, put, patch, or delete.


  fetcher.submit() - The imperative version of <fetcher.Form>.
  If a user interaction should initiate the fetch, you should use <fetcher.Form>.
  But if you, the programmer are initiating the fetch
  (not in response to a user clicking a button, etc.), then use this function.
  */
  const fetcher = useFetcher();
  // Read the above comments to understand the below code:
  const { data, state } = fetcher;

  useEffect(() => {
    // Prompt an alert when the signnup is successful
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    // Read the above comments about useFetcher() to understand the below code:
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
