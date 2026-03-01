import { useState } from "react";
import "../styles/NavBar.css";
import logo from "../../src/assets/img/logo.png";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="nav">
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
        </ul>
      </div>
      <div>
        {isLoggedIn ? (
          <a href="_blank">Log out</a>
        ) : (
          <a href="/login">Log in</a>
        )}
      </div>
    </div>
  );
}
