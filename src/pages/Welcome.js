import { Route } from 'react-router-dom';

const Welcome = () => {
	return (
		<section>
			<h1>The Welcome page</h1>
			{/* 
            Nested <Route> - We can define a <Route> within another <Route>.
            We can define routes in other components in other routes therefore,
            */}
			<Route path="/welcome/new-user">
				<p>Welcome, New User!</p>
			</Route>
		</section>
	);
};

export default Welcome;
