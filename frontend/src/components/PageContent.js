import classes from './PageContent.module.css';

// Generic error handling wrapper page
function PageContent({ title, children }) {
	return (
		<div className={classes.content}>
			<h1>{title}</h1>
			{children}
		</div>
	);
}

export default PageContent;
