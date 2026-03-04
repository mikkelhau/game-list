import express from "express";
import { supabase } from "../supabaseClient";

const router = express.Router();

router.post("/create-list", async (req, res) => {
  const { visibility } = req.body;

  try {
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();
    if (authError || !user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const {
      data: { listData },
      error: listError,
    } = await supabase
      .from("lists")
      .insert({
        user_id: user.id,
        public: visibility,
      })
      .select("*")
      .single();
    if (listError) throw listError;

    const { data: updatedUserData, error: updateError } =
      await supabase.auth.updateUser({
        data: { has_list: true },
      });
    if (updateError) throw updateError;

    return res.status(201).json({
      message: "List created successfully.",
      list: listData,
      user: updatedUserData.user,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message || "Failed to create list" });
  }
});

export default router;
