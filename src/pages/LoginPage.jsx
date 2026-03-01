import { useState } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin() {
    setErrorMsg("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5500/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      if (response.ok && data.session) {
        localStorage.setItem("sb_access_token", data.session.access_token);
        console.log("Logged in user:", data.user.email);
        navigate("/");
      }
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login">
      <div className="module">
        <h1>Log in to your account</h1>
        {errorMsg && (
          <p className="error" style={{ color: "red" }}>
            {errorMsg}
          </p>
        )}
        <form action={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="gamer@mail.com"
              required
              autoComplete="E-mail"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="totallysafepassword123"
              required
              minLength={8}
              autoComplete="current-password"
            />
          </div>
          <button type="submit">Log in</button>
        </form>
        <Link to="/signup">No account? Sign up here</Link>
      </div>
    </div>
  );
}
