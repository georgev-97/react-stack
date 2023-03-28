import { useEffect, useState } from "react";

export function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.status !== 200) {
          setError("User not found");
          throw new Error("User not found");
        } else {
          return response.json();
        }
      })
      .then((user) => setUser(user))
      .catch((error) => setError(error.message));
  }, [username]);
  return [user, error];
}
