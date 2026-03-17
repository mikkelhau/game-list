import express from "express";
import { supabase } from "../supabaseClient.js";

const router = express.Router();

router.post("/createlist", async (req, res) => {
  const { title, privateList } = req.body;

  const token = req.headers.authorization?.split(" ")[1];
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser(token);
  if (authError || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { data, error } = await supabase
      .from("lists")
      .insert({
        user_id: user.id,
        title,
        privateList,
      })
      .select()
      .single();
    if (error) throw error;

    if (data) {
      return res.status(201).json({
        message: "List created successfully",
        data: data,
      });
    }
  } catch (error) {
    console.error("FULL DATABASE ERROR:", JSON.stringify(error, null, 2));
    res.status(500).json({ error: error.message || "Failed to create list" });
  }
});

export default router;
