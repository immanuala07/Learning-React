import { Link, useNavigate } from 'react-router-dom';

function HomePage () {
	/*
	The useNavigate hook returns a function that lets you navigate programmatically

	The navigate function has two signatures:
	a) Either pass a 'To' value (same type as <Link to>)
	with an optional second { replace, state } arg or
	b) Pass the delta you want to go in the history stack.
	For example, navigate(-1) is equivalent to hitting the back button.
	*/
	const navigate = useNavigate();

	function navigateHandler () {
		navigate('/products');
	}

	return (
		<>
			<h1>My Home Page</h1>
			<p>
				{/* Relative Path without '/' */}
				Go to <Link to="products">the list of products</Link>.
			</p>
			<button onClick={navigateHandler}>Navigate</button>
		</>
	);
}

export default HomePage;
