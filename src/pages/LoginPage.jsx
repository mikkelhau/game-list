import { useState } from "react";
import "../styles/Login.css";

export default function Login() {
  //   const [userName, setUserName] = useState();
  //   const [password, setPassword] = useState();

  function LogInUser() {}

  return (
    <div className="login">
      <h1>Log in to your account</h1>
      <div>
        <form action={LogInUser}>
          <label htmlFor="userNameInput">
            <input type="text" name="" placeholder="Username" />
          </label>
          <label htmlFor="passwordInput">
            <input type="password" name="" placeholder="Password" />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}
