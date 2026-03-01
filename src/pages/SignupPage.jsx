import { useState } from "react";
import "../styles/signup.css";

export default function SignupPage() {
  function CreateUser() {}

  const placeholderMsg = {
    0: "Just gonna Ctrl+V, huh?",
    1: "Nice try buddy",
    2: "Oh? You can't paste?",
    3: "Try one more time",
    4: "Nope, still not working",
    5: "You sure are persistent",
    6: "JUST TYPE IT AGAIN",
    7: "For the love of God...",
  };

  const [count, setCount] = useState(0);
  const placeholder = placeholderMsg[count];

  const handlePaste = (e) => {
    e.preventDefault();
    setCount((count) => count + 1);
  };

  return (
    <div className="signup">
      <div className="module">
        <h1>Create an account</h1>
        <form action={CreateUser}>
          <div className="form-input-group">
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
              <label htmlFor="password">Confirm password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder={placeholder}
                onPaste={handlePaste}
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
                placeholder="Peter"
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
                placeholder="Griffin"
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
          </div>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}
