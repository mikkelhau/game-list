import { createContext, useState, useEffect } from "react";
import navigate from "react-router-dom";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await fetch("http://localhost:5500/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("sb_access_token", data.session.access_token);
      setUser(data.user);
      return data;
    } else {
      throw new Error(data.error || "Wrong username or password");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("sb_access_token");

    if (token) {
      console.log("Found session token, app is initialized.");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("sb_access_token");
    setUser(null);
    console.log(user, "User logged out");
    navigate("/login");
  };

  return (
    <AuthContext value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext>
  );
}

// import { createContext, useState } from "react";

// export const AuthContext = createContext(null);

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const login = async (email, password) => {
//     const response = await fetch("http://localhost:5500/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     if (response.ok) {
//       const user = await response.json();
//       setUser(user);
//       return user;
//     } else {
//       throw new Error("Wrong username or password");
//     }
//   };

//   return <AuthContext value={{ user, setUser }}>{children}</AuthContext>;
// }
