import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action ({ request }) {
	/*
	Javascript URL:
	The URL() constructor returns a newly created URL object
	representing the URL defined by the parameters.

	The searchParams readonly property of the URL interface
	returns a URLSearchParams object allowing access to the
	GET decoded query arguments contained in the URL.

	const searchParams = new URL(request.url).searchParams;

	We couldn't fetch the url parameters,
	because this is the parent component of the actual component.
	So, we are using the below code:
	*/
	const searchParams = new URL(request.url).searchParams;

	/*
	URLSearchParams.get() - Returns the first value associated
	with the given search parameter.
	*/
	const mode = searchParams.get('mode') || 'login';

	if (mode !== 'login' && mode !== 'signup') {
		throw json({ message: 'Unsupported mode.' }, { status: 422 });
	}

	/*
	The FormData interface provides a way to construct
	a set of key/value pairs representing form fields and their values,
	which can be sent using the fetch() or XMLHttpRequest.send() method.
	
	It uses the same format a form would use
	if the encoding type were set to "multipart/form-data".
	*/
	const data = await request.formData();
	const authData = {
		email: data.get('email'),
		password: data.get('password')
	};

	const response = await fetch("http://localhost:8080/" + mode, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(authData)
	});

	if (response.status === 422 || response.status === 401) {
		// The below response from this action method is captured or fetched from the useLoaderActon() in AuthForm.js
		return response;
	}

	if (!response.ok) {
		throw json({ message: 'Could not authenticate user.' }, { status: 500 });
	}

	const resData = await response.json();
	// Access token from the backend response
  const token = resData.token;

	// Store the token from the backend to the local storage in browser
  localStorage.setItem('token', token);

	const expiration = new Date();
	expiration.setHours(expiration.getHours() + 1);
	localStorage.setItem('expiration',expiration.toISOString());

	return redirect('/');
}
