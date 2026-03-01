import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5500;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
