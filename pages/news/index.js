/* 
index.js is entry js file.
news.js is renamed to index.js

The index.js file in news folder, this page would still be loaded
by visiting our-domain.com/news. because we're in the news folder.
Since index.js is entry js file in news folder.

our-domain.com/news

Note: Folders, which we create in our pages folder act as path segments.
*/

/*
In nextJS project, react is internally imported so we can omit this import.
import React from 'react';
*/

function NewsPage () {
  return <h1>The News Page</h1>
}

export default NewsPage;
