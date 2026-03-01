import React from "react";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5500/")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>HomePage</h1>
      {data ? (
        <div>
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
