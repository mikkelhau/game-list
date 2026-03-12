import React from "react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import ButtonBig from "../components/ButtonBig";
import { useNavigate } from "react-router";

export default function MyListsPage() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/create-list");
  };

  return (
    <div className="list-page">
      {!user ? (
        <div className="no-list">
          <p>Please log in to create/view your lists.</p>
        </div>
      ) : (
        <div className="has-list">
          {user.hasList === true ? (
            <div>
              <h2>Your Lists</h2>
            </div>
          ) : (
            <div>
              <h1>You have no list yet!</h1>
              <ButtonBig onClick={handleNavigate} children={"Create a list"} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
