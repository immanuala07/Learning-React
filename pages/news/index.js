/* 
index.js is entry js file.
news.js is renamed to index.js

The index.js file in news folder, this page would still be loaded
by visiting our-domain.com/news. because we're in the news folder.
Since index.js is entry js file in news folder.

our-domain.com/news

Note: Folders, which we create in our pages folder act as path segments.
*/

import Link from "next/link";
import { Fragment } from "react";

/*
In nextJS project, react is internally imported so we can omit this import.
import React from 'react';
*/

function NewsPage () {
  return (
		<Fragment>
			<h1>The News Page</h1>
			<ul>
				<li>
					{/*
          Link is one of the components in Next.js
          It is used to create links between pages in a Next.js app.
          Client-side transitions between routes can be enabled via the Link component exported by next/link
          To create a link, insert the <Link> component into your page, and specify the path to the page you want to link to.  

          Link accepts the following props:
          href - The path or URL to navigate to. This is the only required prop.
                It can also be an object

          as - Optional decorator for the path that will be shown in the browser URL bar.

          legacyBehavior - Changes behavior so that child must be <a>.
                          Defaults to false.

          passHref - Forces Link to send the href property to its child.
                    Defaults to false

          prefetch - Prefetch the page in the background.
                    Defaults to true. Any <Link /> that is in the viewport (initially or through scroll) will be preloaded.
                    Prefetch can be disabled by passing prefetch={false}.
                    When prefetch is set to false, prefetching will still occur on hover.
                    Pages using Static Generation will preload JSON files with the data for faster page transitions.
                    Prefetching is only enabled in production.

          replace - Replace the current history state instead of adding a new url into the stack.
                    Defaults to false

          scroll - Scroll to the top of the page after a navigation.
                  Defaults to true

          shallow - Update the path of the current page without rerunning getStaticProps, getServerSideProps or getInitialProps.
                    Defaults to false

          locale - The active locale is automatically prepended.
                  locale allows for providing a different locale.
                  When false href has to include the locale as the default behavior is disabled.
          */}
					<Link href="/news/nextjs-is-a-great-framework">
						NextJS Is A Great Framework
					</Link>
				</li>
				<li>Something Else</li>
			</ul>
		</Fragment>
  );
}

export default NewsPage;
