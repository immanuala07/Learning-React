import { useIsFetching } from "@tanstack/react-query";

export default function Header ({ children }) {
  /**
   * useIsFetching is a hook provided by React Query that allows us
   * to track the number of ongoing queries or mutations in your application.
   * It's particularly useful when we want to display loading indicators
   * or perform certain actions based on the global loading state of your queries and mutations.
   *
   * If 'fetching' is greater than 0,
   * we can display a loading indicator to inform the user that
   * there are ongoing network requests.
   */
  const fetching = useIsFetching();

  return (
    <>
      <div id="main-header-loading">{fetching > 0 && <progress />}</div>
      <header id="main-header">
        <div id="header-title">
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
