import { useContext, useState } from "react";
import logo from "../../src/assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "../styles/footer.css";
import { AuthContext } from "../context/AuthContext";

export default function Footer() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="footer">
      <img src={logo} alt="Game List Logo" />
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/my-lists">My Lists</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            {user ? (
              <Link onClick={handleLogout}>Log out</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
