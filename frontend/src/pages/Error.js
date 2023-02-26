import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

import PageContent from '../components/PageContent';

// Generic error handling page
function ErrorPage() {
	/*
	useRouteError - Inside of an errorElement,
	this hook returns anything thrown during an action, loader, or rendering. 

	Returns the nearest ancestor Route error,
	which could be a loader/action error or a render error.
	This is intended to be called from your errorElement to display a proper error message.
	*/
	const error = useRouteError();

	let title = 'An error occurred!';
	let message = 'Something went wrong!';

	if (error.status === 500) {
		message = JSON.parse(error.data).message;
	}

	if (error.status === 404) {
		title = 'Not found!';
		message = 'Could not find resource or page.';
	}

	return (
		<>
			<MainNavigation />
			<PageContent title={title}>
				<p>{message}</p>
			</PageContent>
		</>
	);
}

export default ErrorPage;
