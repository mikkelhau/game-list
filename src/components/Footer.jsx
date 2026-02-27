import { useState } from "react";
import "../styles/Footer.css";
import logo from "../../src/assets/img/logo.png";

export default function Footer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="footer">
      <img src={logo} alt="Game List Logo" />
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/my-list">My List</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            {isLoggedIn ? (
              <a href="_blank">Log out</a>
            ) : (
              <a href="_blank">Log in</a>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
