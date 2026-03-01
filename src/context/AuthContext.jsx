import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (credentials) => {
    const response = await fetch("http://localhost:5500/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (response.ok) {
      const userData = await response.json();
      setUser(userData);
      return userData;
    } else {
      throw new Error("Wrong username or password");
    }
  };

  return <AuthContext value={{ user, setUser }}>{children}</AuthContext>;
}
