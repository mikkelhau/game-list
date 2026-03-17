import React from "react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ButtonBig from "../components/ButtonBig";
import { useNavigate, useParams } from "react-router";

export default function GameListPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [lists, setLists] = useState([]);

  const handleNavigate = () => {
    navigate("/create-list");
  };

  useEffect(() => {
    const fetchUserLists = async () => {
      try {
        const response = await fetch(
          `http://localhost:5500/api/fetchuserlists/${id}`,
        );
        const result = await response.json();
        setLists(result.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (user) {
      fetchUserLists();
    }
  }, [user]);

  return (
    <div className="list-page">
      <h1>Here be a list o' games!</h1>
    </div>
  );
}
