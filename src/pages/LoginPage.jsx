import { useState } from "react";
import "../styles/login.css";

export default function LoginPage() {
  function LogInUser() {}

  return (
    <div className="login">
      <h1>Log in to your account</h1>
      <div>
        <form action={LogInUser}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="xXGamer420Xx"
              required
              autoComplete="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password123"
              required
              minLength={8}
              autoComplete="current-password"
            />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}
