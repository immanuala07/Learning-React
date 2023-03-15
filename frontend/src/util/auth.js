import { redirect } from "react-router-dom";

export function getAuthToken () {
  // Fetch the authentication token from the local storage.
  const token = localStorage.getItem("token");
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
