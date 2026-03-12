import { useState } from "react";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";
import ButtonBig from "../components/ButtonBig";

export default function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignup() {
    setErrorMsg("");
    setLoading(true);

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5500/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          country,
          birthdate,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      console.log("User created:", data.user);

      // if (data.session) {
      //   localStorage.setItem("token", data.session.access_token);
      //   navigate("/");
      // } else {
      if (data.user) {
        alert("Account created! Please try logging in manually.");
        navigate("/login");
      }
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

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
        <p className="error" style={{ color: "red" }}>
          {errorMsg}
        </p>
        <form action={handleSignup}>
          <div className="form-fields">
            <div className="form-group">
              <label htmlFor="name">Username/Gamertag</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="MasterChief420"
                required
                autoComplete="name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="totallysafepassword123"
                required
                minLength={8}
                autoComplete="current-password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={placeholder}
                onPaste={handlePaste}
                required
                minLength={8}
                autoComplete="current-password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
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
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                required
                autoComplete="birthdate"
              />
            </div>
          </div>
          <ButtonBig children={"Sign up"} type={"submit"} />
        </form>
      </div>
    </div>
  );
}
