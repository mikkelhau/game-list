import React from "react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function HomePage() {
  const [data, setData] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5500/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log("User in HomePage:", user);

  return (
    <div>
      <h1>HomePage</h1>
      {data ? (
        <div>
          <h2>Hello there, {user?.user_metadata.name || "Guest"}!</h2>
          <p>
            Server says: <strong>{data.message}</strong>
          </p>
        </div>
      ) : (
        <p>Loading server response...</p>
      )}
    </div>
  );
}
