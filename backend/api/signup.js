import express from "express";
import { supabase } from "../supabaseClient.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { firstname, email, password, country, birthdate } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          firstname: firstname,
          country: country,
          birthdate: birthdate,
        },
      },
    });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    // 3. Success
    return res.status(201).json({
      message: "User created successfully. Check your email for verification!",
      user: data.user,
    });
  } catch (err) {
    return res.status(500).json({ error: "Server error during signup" });
  }
});

export default router;
