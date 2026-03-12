import { useContext, useState } from "react";
import logo from "../../src/assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { AuthContext } from "../context/AuthContext";
import ButtonSmall from "./ButtonSmall";

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

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
            <Link to="/my-lists">My Lists</Link>
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
        {user ? (
          <ButtonSmall onClick={handleLogout} children={"Logout"} />
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
