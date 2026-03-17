import express from "express";
import { supabase } from "../supabaseClient.js";

const router = express.Router();

router.get("/getlists", async (req, res) => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { data, error } = await supabase
      .from("lists")
      .select("*")
      .eq("user_id", user.id);
    if (error) throw error;

    if (data) {
      return res.status(200).json({
        message: "Lists fetched successfully",
        data: data,
      });
    }
  } catch (error) {
    console.error("FULL DATABASE ERROR:", JSON.stringify(error, null, 2));
    res.status(500).json({ error: error.message || "Failed to fetch lists" });
  }
});

export default router;
