import { createContext, useState, useEffect } from "react";

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
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      return data;
    } else {
      throw new Error(data.error || "Wrong username or password");
    }
  };

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem("sb_access_token");
      if (token) {
        try {
          setUser(JSON.parse(localStorage.getItem("user")));
        } catch (e) {
          localStorage.removeItem("sb_access_token");
        }
      }
    };
    initAuth();
  }, []);

  const logout = () => {
    localStorage.removeItem("sb_access_token");
    localStorage.removeItem("user");
    setUser(null);
    console.log("Logout triggered and state cleared");
  };

  return (
    <AuthContext value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext>
  );
}
