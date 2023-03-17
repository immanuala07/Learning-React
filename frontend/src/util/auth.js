import { redirect } from "react-router-dom";

/*
Function to fetch the remain duration left for the token to expire.
*/
export function getTokenDuration () {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken () {
  // Fetch the authentication token from the local storage.
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();
  console.log(tokenDuration);

  if (tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}

export function tokenLoader () {
  return getAuthToken();
}

export function checkAuthLoader () {
  const token = getAuthToken();

  if (!token) {
    /*
    Redirect to auth route if the user is without token or login.
    */
    return redirect('/auth');
  }
}
