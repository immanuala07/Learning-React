export function getAuthToken () {
  // Fetch the authentication token from the local storage.
  const token = localStorage.getItem("token");
  return token;
}

export function tokenLoader () {
  return getAuthToken();
}
