import React from "react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ButtonBig from "../components/ButtonBig";
import { Link, useNavigate } from "react-router-dom";

export default function ListOverview() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log("User ID:", user?.id);

  const handleNavigate = () => {
    navigate("/create-list");
  };

  useEffect(() => {
    const fetchUserLists = async () => {
      setLoading(true);
      const token = localStorage.getItem("sb_access_token");
      try {
        const response = await fetch(
          "http://localhost:5500/api/fetchuserlists",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          },
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Server returned an error page:", errorText);
          return;
        }

        if (response.ok) {
          const result = await response.json();
          console.log("List created successfully:", result);
          setLists(result.data || []);
          setLoading(false);
        }
      } catch (error) {
        console.error("Fetch failed entirely:", error);
        setLoading(false);
      }
    };

    if (user) {
      fetchUserLists();
    }
  }, [user]);

  return (
    <div className="list-page">
      {!user ? (
        <div className="no-list">
          <p>Please log in to create/view your lists.</p>
        </div>
      ) : (
        <div className="has-list">
          {loading ? (
            <p>Scanning for lists...</p>
          ) : lists.length > 0 ? (
            <div>
              <h2>Your Lists</h2>
              <div>
                {lists.map((list) => (
                  <Link to={`/game-list/${list.id}`} key={list.id}>
                    <h3>{list.title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h1>You have no lists yet!</h1>
              <ButtonBig onClick={handleNavigate} children={"Create a list"} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
