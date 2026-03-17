import { useState, useContext } from "react";
import "../styles/createlist.css";
import { useNavigate } from "react-router-dom";
import ButtonBig from "../components/ButtonBig";
import { AuthContext } from "../context/AuthContext";
import { supabase } from "../supabaseClient";

export default function CreateListPage() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [privateList, setPrivateList] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleListCreation() {
    setErrorMsg("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5500/api/createlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user.id,
          title,
          privateList,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "List creation failed");
      }

      if (response.ok) {
        supabase.auth.refreshSession();
        alert("List created!");
        navigate("/list-overview");
        console.log("List created successfully:", data);
        return data;
      }
    } catch (error) {
      setErrorMsg(error.message, "FAILED");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="create-list">
      <div className="module">
        <h1>Create a list</h1>
        <p className="error" style={{ color: "red" }}>
          {errorMsg}
        </p>
        <form action={handleListCreation}>
          <div className="form-fields">
            <div className="form-group">
              <label htmlFor="name">List Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="My Epic Game List"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="privateList">Make list private?</label>
              <input
                type="checkbox"
                name="privateList"
                id="privateList"
                checked={privateList}
                onChange={(e) => setPrivateList(e.target.checked)}
              />
            </div>
          </div>
          <ButtonBig children={"Create List"} type={"submit"} />
        </form>
      </div>
    </div>
  );
}
