import { useState } from "react";
import logo from "../../src/assets/img/logo.png";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="nav">
      <div>
        <Link to="/">
          <img src={logo} alt="Game List Logo" />
        </Link>
      </div>
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
        </ul>
      </div>
      <div>
        {isLoggedIn ? (
          <a href="_blank">Log out</a>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
