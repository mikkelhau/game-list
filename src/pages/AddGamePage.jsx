import { useState } from "react";
import "../styles/signup.css";
import { useNavigate, useParams } from "react-router-dom";
import ButtonBig from "../components/ButtonBig";

export default function AddGamePage() {
  const navigate = useNavigate();
  const { listId } = useParams();
  const [title, setTitle] = useState("");
  const [developer, setDeveloper] = useState("");
  const [platform, setPlatform] = useState("");
  const [completiondate, setCompletionDate] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const [image, setImage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAddGame() {
    setErrorMsg("");
    setLoading(true);

    const response = await fetch(
      `http://localhost:5500/api/list/${listId}/add-game`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          developer,
          platform,
          completiondate,
          rating,
          review,
          image,
        }),
      },
    );

    const result = await response.json();
    if (result.error) {
      setErrorMsg(result.error);
    } else {
      navigate(`/list/${listId}`);
    }
    setLoading(false);
  }

  return (
    <div className="signup">
      <div className="module">
        <h1>Create an account</h1>
        <p className="error" style={{ color: "red" }}>
          {errorMsg}
        </p>
        <form action={handleAddGame}>
          <div className="form-fields">
            <div className="form-group">
              <label htmlFor="title">Game Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="developer">Developer</label>
              <input
                type="text"
                name="developer"
                id="developer"
                value={developer}
                onChange={(e) => setDeveloper(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="platform">Platform</label>
              <input
                type="text"
                name="platform"
                id="platform"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="completiondate">Date of Completion</label>
              <input
                type="text"
                name="completiondate"
                id="completiondate"
                value={completiondate}
                onChange={(e) => setCompletionDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <input
                type="text"
                name="rating"
                id="rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="review">Review</label>
              <input
                type="text"
                name="review"
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image URL</label>
              <input
                type="text"
                name="image"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Paste game image URL here"
              />
            </div>
          </div>
          <ButtonBig children={"Add Game"} type={"submit"} />
        </form>
      </div>
    </div>
  );
}
