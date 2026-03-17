import express from "express";
import { supabase } from "../supabaseClient.js";

const router = express.Router();

router.post("/add-game", async (req, res) => {
  const { title, developer, platform, completiondate, rating, review, image } =
    req.body;

  try {
    const token = req.headers.authorization?.split(" ")[1];
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser(token);
    if (authError || !user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { data: list, error: userListError } = await supabase
      .from("lists")
      .select("id")
      .eq("user_id", user.id)
      .single();
    if (userListError) throw userListError;

    const { data: newGame, error: newGameError } = await supabase
      .from("games")
      .insert({
        list_id: list.id,
        title,
        developer,
        platform,
        completiondate,
        rating,
        review,
        image,
      })
      .eq("list_id", list.id)
      .select("*")
      .single();
    if (newGameError) throw newGameError;

    return res.status(201).json({
      message: "Game added successfully.",
      game: newGame,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message || "Failed to add game" });
  }
});

export default router;
