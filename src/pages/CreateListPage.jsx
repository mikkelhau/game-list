import { useState, useContext } from "react";
import "../styles/signup.css";
import { useNavigate } from "react-router-dom";
import ButtonBig from "../components/ButtonBig";
import { AuthContext } from "../context/AuthContext";

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
      const response = await fetch("http://localhost:5500/api/create-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          privateList,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "List creation failed");
      }

      console.log("List created:", data.list);

      if (data.session) {
        localStorage.setItem("token", data.session.access_token);
        navigate("/");
      }
    } catch (error) {
      setErrorMsg(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="signup">
      <div className="module">
        <h1>Create an account</h1>
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
              <label htmlFor="visibility">Make list private?</label>
              <input
                type="radio"
                name="visibility"
                id="visibility"
                value={privateList}
                onChange={(e) => setPrivateList(e.target.value)}
                required
              />
            </div>
          </div>
          <ButtonBig children={"Create List"} onClick={"handleListCreation"} />
        </form>
      </div>
    </div>
  );
}
