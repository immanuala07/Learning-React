import { redirect } from "react-router-dom";

export function action () {
  // We dont need a component for logout apart
  // from removing the token from local storage.
  localStorage.removeItem("token");
  return redirect("/");
}
