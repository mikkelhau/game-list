import express from "express";
import cors from "cors";
import loginRouter from "./api/login.js";
import signupRouter from "./api/signup.js";
import createListRouter from "./api/createlist.js";

const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.use("/api", loginRouter);
app.use("/api", signupRouter);
app.use("/api", createListRouter);

// 3. Start Server (Last step)
app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
