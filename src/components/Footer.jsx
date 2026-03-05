import { useState } from "react";
import logo from "../../src/assets/img/logo.png";
import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="footer">
      <img src={logo} alt="Game List Logo" />
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my-list">My List</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {isLoggedIn ? (
              <a href="_blank">Log out</a>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
