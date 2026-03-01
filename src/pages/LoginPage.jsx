import { useState } from "react";
import "../styles/login.css";

export default function LoginPage() {
  function LogInUser() {}

  return (
    <div className="login">
      <h1>Log in to your account</h1>
      <div>
        <form action={LogInUser}>
          <label htmlFor="userNameInput">
            <input
              type="text"
              name="usernameInput"
              placeholder="Username"
              id="usernameInput"
            />
          </label>
          <label htmlFor="passwordInput">
            <input
              type="password"
              name="passwordInput"
              placeholder="Password"
              id="passwordInput"
            />
          </label>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}
