import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList(props) {
  const [usernames, setUsernames] = useState([]);
  const [usernameToAdd, setUsernameToAdd] = useState("");
  function addUser() {
    setUsernames([...usernames, usernameToAdd]);
    setUsernameToAdd("");
  }
  return (
    <div>
      <div>
        <input
          type="text"
          value={usernameToAdd}
          onChange={(event) => setUsernameToAdd(event.target.value)}
        />
        <button onClick={addUser}>Add user</button>
      </div>
      {usernames.length > 0 &&
        usernames.map((el, index) => {
          return <GithubUser username={el} key={index} />;
        })}
    </div>
  );
}
