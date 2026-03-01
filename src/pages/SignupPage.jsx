import { useState } from "react";
import "../styles/signup.css";

export default function SignupPage() {
  function CreateUser() {}

  return (
    <div className="signup">
      <h1>Create an account</h1>
      <div>
        <form action={CreateUser}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example@mail.com"
              required
              autoComplete="email"
            />
          </div>
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
              placeholder="totallysafepassword123"
              required
              minLength={8}
              autoComplete="current-password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstname">Firstname</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              required
              autoComplete="firstname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Lastname</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              required
              autoComplete="lastname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              id="country"
              required
              autoComplete="country"
            />
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">Date of birth</label>
            <input
              type="date"
              name="birthdate"
              id="birthdate"
              required
              autoComplete="birthdate"
            />
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
