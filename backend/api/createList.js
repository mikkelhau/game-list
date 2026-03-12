import express from "express";
import { supabase } from "../supabaseClient.js";

const router = express.Router();

router.post("/createlist", async (req, res) => {
  const { user_id, title, privateList } = req.body;

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const { data, error: listError } = await supabase
      .from("lists")
      .insert({
        user_id: user.id,
        title,
        privateList,
      })
      .select()
      .single();
    if (listError) throw listError;

    const { data: updatedUserData, error: updateError } =
      await supabase.auth.updateUser({
        data: { has_list: true },
      });
    if (updateError) throw updateError;

    return res.status(201).json({
      message: "List created successfully",
      data: data,
    });
  } catch (error) {
    console.error("FULL DATABASE ERROR:", JSON.stringify(error, null, 2));
    res.status(500).json({ error: error.message || "Failed to create list" });
  }
});

export default router;
