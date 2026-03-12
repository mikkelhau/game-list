import express from "express";
import { supabase } from "../supabaseClient.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { name, email, password, country, birthdate } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name,
          country,
          birthdate,
        },
      },
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(201).json({
      message: "User created successfully. Check your email for verification!",
      user: data.user,
    });
  } catch (err) {
    return res.status(500).json({ error: "Server error during signup" });
  }
});

export default router;
