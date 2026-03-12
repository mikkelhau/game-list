import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const URL = `https://${process.env.SUPABASE_URL}.supabase.co`;
const apiKey = process.env.SUPABASE_SECRET_KEY;

export const supabase = createClient(URL, apiKey);
