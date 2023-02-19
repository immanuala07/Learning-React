import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
	/*
	useNavigation() - This hook tells you everything you need to know about a page navigation
	to build pending navigation indicators and optimistic UI on data mutations.

	Things like:
	Global loading indicators
	Disabling forms while a mutation is happening
	Adding busy indicators to submit buttons
	Optimistically showing a new record while it's being created on the server
	Optimistically showing the new state of a record while it's being updated
	*/
	const navigation = useNavigation();

	return (
		<>
			<MainNavigation />
			<main>
				{/*
				navigation.state
				idle - There is no navigation pending.
				submitting - A route action is being called due to a form submission using POST, PUT, PATCH, or DELETE
				loading - The loaders for the next routes are being called to render the next page

				Normal navigations and GET form submissions transition through these states:
				idle → loading → idle

				Form submissions with POST, PUT, PATCH, or DELETE transition through these states:
				idle → submitting → loading → idle
				*/}
				{navigation.state === 'idle' && <p>Idle...</p>}
				{navigation.state === 'loading' && <p>Loading...</p>}
				{/* {navigation.state === 'submitting' && <p>Submitting...</p>} */}

				<Outlet />
			</main>
		</>
	);
}

export default RootLayout;
