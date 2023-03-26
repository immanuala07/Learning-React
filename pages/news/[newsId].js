/*
Note: Folders, which we create in our pages folder act as path segments.

Renamed the file around the square brackets ([newsId.js]) so that,
nextJS will be load this page for different values.

our-domain.com/news/[different-values]
our-domain.com/news/[any-values]
*/

function DetailPage () {
	return <h1>The Detail Page</h1>;
}

export default DetailPage;
