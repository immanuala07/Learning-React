/*
Note: Folders, which we create in our pages folder act as path segments.

Renamed the file around the square brackets ([newsId.js]) so that,
nextJS will be load this page for different values.

our-domain.com/news/[different-values]
our-domain.com/news/[any-values]
*/
import { useRouter } from "next/router";

function DetailPage () {
	/*
  useRouter is a React Hook, meaning it cannot be used with classes. You can either use withRouter or wrap your class in a function component.
  If you want to access the router object inside any function component in your app, you can use the useRouter hook

  The following is the definition of the router object returned by both useRouter and withRouter:
  1) pathname: String - The path for current route file that comes after /pages.
                        Therefore, basePath, locale and trailing slash (trailingSlash: true) are not included.
  2) query: Object - The query string parsed to an object, including dynamic route parameters.
                    It will be an empty object during prerendering if the page doesn't use Server-side Rendering.
                    Defaults to {}.
  3) asPath: String - The path as shown in the browser including the search params and respecting the trailingSlash configuration.
                      basePath and locale are not included.
  4) isFallback: boolean - Whether the current page is in fallback mode.
  5) basePath: String - The active basePath (if enabled).
  6) locale: String - The active locale (if enabled).
  7) locales: String[] - All supported locales (if enabled).
  8) defaultLocale: String - The current default locale (if enabled).
  9) domainLocales: Array<{domain, defaultLocale, locales}> - Any configured domain locales.
  10) isReady: boolean - Whether the router fields are updated client-side and ready for use.
                        Should only be used inside of useEffect methods and not for conditionally rendering on the server.
  11) isPreview: boolean - Whether the application is currently in preview mode.
  */
	const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId);

	// Send a request to the ackend API
	// to fecth the news item with newsId

	return <h1>The Detail Page</h1>;
}

export default DetailPage;
