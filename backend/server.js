import express from "express";
import loginRouter from "./api/login.js";
import signupRouter from "./api/signup.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5500;

// 1. Global Middleware
app.use(cors());
app.use(express.json());

// 2. Routes (Define these BEFORE listening)
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

// Mounting your routers
app.use("/api", loginRouter);
app.use("/api", signupRouter);

// 3. Start Server (Last step)
app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
