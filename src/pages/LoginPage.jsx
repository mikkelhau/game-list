import { useState, useContext } from "react";
import "../styles/login.css";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  async function handleLogin() {
    setErrorMsg("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/");
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
